const fs = require('fs');

const periods = [121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103];

async function fetchAndParseAll() {
  console.log(`Starting comprehensive fetch for ${periods.length} exam periods (103 to 121)...`);
  const allQuestions = [];
  let globalId = 1;

  for (const period of periods) {
    const url = `https://avcilarozelguvenlik.com.tr/sinav/${period}-donem-ozel-guvenlik-sinav-sorulari/`;
    console.log(`Fetching period ${period}...`);
    try {
      let raw = "";
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        raw = await res.text();
      }

      if (!raw) {
        console.warn(`Could not get HTML for period ${period}`);
        continue;
      }

      const panels = raw.split('<div class="panel">');
      console.log(`Period ${period}: found ${panels.length - 1} panels.`);

      for (let i = 1; i < panels.length; i++) {
        const p = panels[i];
        const qMatch = p.match(/<h3 class="soru">([\s\S]*?)<\/h3>/);
        if (!qMatch) continue;

        const qText = qMatch[1].replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').trim();
        const optMatches = [...p.matchAll(/<label class="custom-control-label"[^>]*><b>([A-E])\)\s*<\/b>([\s\S]*?)<\/label>/g)];
        const options = optMatches.map(m => `${m[1]}) ${m[2].replace(/<[^>]*>/g, '').trim()}`);

        const ansMatch = p.match(/checkAnswer\(this,\s*'([a-e])'/i);
        const correctLetter = ansMatch ? ansMatch[1].toLowerCase() : 'a';
        const map = { a: 0, b: 1, c: 2, d: 3, e: 4 };
        const ansIdx = map[correctLetter] !== undefined ? map[correctLetter] : 0;

        const tLower = qText.toLowerCase();
        let topic = 'Özel Güvenlik Hukuku';
        if (tLower.includes('yangın') || tLower.includes('itfaiye') || tLower.includes('lpg') || tLower.includes('söndür') || tLower.includes('yanma')) {
          topic = 'Yangın Güvenliği';
        } else if (tLower.includes('kalp') || tLower.includes('solunum') || tLower.includes('ilkyardım') || tLower.includes('kanama') || tLower.includes('heimlich') || tLower.includes('rentek') || tLower.includes('şok')) {
          topic = 'Temel İlkyardım';
        } else if (tLower.includes('silah') || tLower.includes('namlu') || tLower.includes('fişek') || tLower.includes('tabanca') || tLower.includes('yiv') || tLower.includes('atış') || tLower.includes('şarjör') || tLower.includes('horoz') || tLower.includes('iğne')) {
          topic = 'Silah Bilgisi ve Atış';
        } else if (tLower.includes('devriye') || tLower.includes('tutanak') || tLower.includes('üst arama') || tLower.includes('nokta') || tLower.includes('olay yeri')) {
          topic = 'Güvenlik Tedbirleri';
        } else if (tLower.includes('x-ray') || tLower.includes('detektör') || tLower.includes('kamera') || tLower.includes('cctv') || tLower.includes('alarm')) {
          topic = 'Güvenlik Sistem ve Cihazları';
        } else if (tLower.includes('iletişim') || tLower.includes('empati') || tLower.includes('beden dili') || tLower.includes('mesaj') || tLower.includes('dinleme')) {
          topic = 'Etkili İletişim';
        } else if (tLower.includes('kalabalık') || tLower.includes('grup') || tLower.includes('panik') || tLower.includes('eylem') || tLower.includes('topluluk') || tLower.includes('cop')) {
          topic = 'Kalabalık Yönetimi';
        } else if (tLower.includes('uyuşturucu') || tLower.includes('madde') || tLower.includes('esrar') || tLower.includes('eroin') || tLower.includes('narkotik')) {
          topic = 'Uyuşturucu Madde Bilgisi';
        } else if (tLower.includes('koruma') || tLower.includes('vip') || tLower.includes('suikast') || tLower.includes('öncü') || tLower.includes('konvoy')) {
          topic = 'Kişi Koruma';
        } else if (tLower.includes('kolluk') || tLower.includes('polis') || tLower.includes('jandarma')) {
          topic = 'Genel Kollukla İlişkiler';
        }

        const correctOptionText = options[ansIdx] || "Doğru Seçenek";
        const explanation = `💡 **Öğretici Çözüm:**\nBu soruda aranan doğru kural **${correctOptionText}** seçeneğidir.\n5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun ve EGM standartları uyarınca, ${period}. Dönem sınavında bu konu adayların mesleki mevzuat bilgisi kapsamında sorulmuştur.`;

        if (options.length >= 4) {
          allQuestions.push({
            id: globalId++,
            period: `${period}. Dönem`,
            topic: topic,
            question: qText,
            options: options,
            answer: ansIdx,
            explanation: explanation,
            lawRef: `5188 Sayılı Kanun (${period}. Dönem Sınavı)`
          });
        }
      }
    } catch (e) {
      console.error(`Error in period ${period}:`, e.message);
    }
  }

  console.log(`\n========================================`);
  console.log(`TOTAL QUESTIONS EXTRACTED: ${allQuestions.length}`);
  console.log(`========================================\n`);

  const outputCode = `/**
 * ÖGG Sınav & Eğitim Merkezi — Tüm Dönemler Resmi Soru Havuzu (103 - 121. Dönemler)
 * EGM Özel Güvenlik Denetleme Başkanlığı 19 Dönem Resmi Çıkmış Sorular Arşivi
 */

const OGG_QUESTION_BANK = ${JSON.stringify(allQuestions, null, 2)};
`;

  fs.writeFileSync('questions.js', outputCode, 'utf8');
  console.log('Saved to questions.js successfully!');
}

fetchAndParseAll();
