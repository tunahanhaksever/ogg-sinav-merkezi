const fs = require('fs');

const raw = fs.readFileSync('C:/Users/mybil/.gemini/antigravity-ide/brain/821bab88-383a-4486-a1ad-ea778478c88e/.system_generated/steps/1272/content.md', 'utf8');

const panels = raw.split('<div class="panel">');
console.log("Total panels found:", panels.length);

const parsed = [];

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

  // Topic classification
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

  // Construct educational reasoning
  const correctOptionText = options[ansIdx] || "Doğru Seçenek";
  const explanation = `💡 **Öğretici Çözüm:**\nBu soruda aranan doğru kural **${correctOptionText}** şeklindedir.\n5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun ve EGM standartları uyarınca, sınavda bu soru tipi adli/önleme yetkileri ve görev alanı sınırları kapsamında sorulmaktadır.`;

  if (options.length >= 4) {
    parsed.push({
      id: parsed.length + 1,
      period: '119. Dönem (EGM Resmi Sınavı)',
      topic: topic,
      question: qText,
      options: options,
      answer: ansIdx,
      explanation: explanation,
      lawRef: '5188 Sayılı Kanun & EGM Sınav Müfredatı'
    });
  }
}

console.log("Successfully extracted questions count:", parsed.length);

const outputCode = `/**
 * ÖGG Sınav & Eğitim Merkezi — Resmi Müfredat & 119. Dönem Çıkmış Sorular Havuzu
 * EGM Özel Güvenlik Denetleme Başkanlığı 119. Dönem Sınavı + 11 Modül
 */

const OGG_QUESTION_BANK = ${JSON.stringify(parsed, null, 2)};
`;

fs.writeFileSync('c:/Users/mybil/OneDrive/Desktop/github-projeleri/ogg-sinav-merkezi/questions.js', outputCode, 'utf8');
console.log("Saved to questions.js successfully!");
