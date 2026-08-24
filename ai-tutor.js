/**
 * ÖGG AI Güvenlik Eğitmeni & Akıllı Hata Müfettişi (AI Security Tutor Engine)
 * Yanlış cevaplarda anında soru kökü tuzak analizi ve akıllı öğrenme tavsiyeleri üretir.
 */

class OggAiTutor {
  constructor() {
    this.trapKeywords = [
      { pattern: /yer\s*almaz/i, tip: "Soru kökünde 'YER ALMAZ' olumsuz ifadesi var! Şıklardaki doğru uygulamaları değil, özel güvenliğe YASAK olan veya müfredat dışı olan seçeneği bulmalısın." },
      { pattern: /hangisi\s*değildir/i, tip: "Dikkat! 'DEĞİLDİR' sorusu. Özel güvenliğin yetki sınırını aşan veya genel kolluğa ait olan (ifade alma, soruşturma vb.) şıkka odaklan." },
      { pattern: /yazılı\s*emir/i, tip: "Olağanüstü acil hallerde sözlü emir geçerlidir; ancak normal idari işlemlerde veya şüphe durumlarında 'yazılı emir' şartı aranır." },
      { pattern: /yangın/i, tip: "Yangın sorularında ilk kural: B sınıfı (sıvı) yangınlara ASLA SU SIKILMAZ (Köpük/KKT kullanılır). C sınıfında önce gaz vanası kapatılır." },
      { pattern: /kalp|solunum|ilkyardım|cpr/i, tip: "İlkyardım kuralı: Yaş fark etmeksizin CPR döngüsü 30 Kalp Masajı : 2 Suni Solunum (30:2) ve dakikada 100-120 bası ritmindedir." },
      { pattern: /silah|namlu|yiv|set|fişek/i, tip: "Silah sorularında: Girintilere YİV, Çıkıntılara SET denir. İki karşılıklı set arası ÇAP (kalibre)'dır. Tırnak çeker, Çıkarıcı fırlatır." },
      { pattern: /x-ray|detektör/i, tip: "X-Ray renkleri: Turuncu=Organik (Patlayıcı/Uyuşturucu), Yeşil=İnorganik (Cam/Alüminyum), Mavi/Siyah=Ağır Metaller (Silah/Bıçak)." },
      { pattern: /kimlik/i, tip: "5188 SK. gereğince kimlik kartını başkasına kullandıran görevlinin kimliği Valilikçe iptal edilir ve bir daha asla ÖGG olamaz." }
    ];
  }

  // Generate intelligent diagnostic feedback when user chooses a wrong answer
  analyzeError(questionObj, chosenIndex, correctIndex) {
    const qText = questionObj.question;
    const chosenOpt = questionObj.options[chosenIndex] || "";
    const correctOpt = questionObj.options[correctIndex] || "";

    // Check specific trap patterns
    let detectedTrap = "Soru kökünü ve şıkları dikkatle karşılaştıralım.";
    for (const trap of this.trapKeywords) {
      if (trap.pattern.test(qText)) {
        detectedTrap = trap.tip;
        break;
      }
    }

    return {
      title: "⚠️ Gel bu soruya birlikte dikkatle bakalım!",
      trapAnalysis: detectedTrap,
      chosenText: chosenOpt,
      correctText: correctOpt,
      pedagogicalRule: questionObj.explanation,
      lawRef: questionObj.lawRef
    };
  }

  // Generate custom AI explanation on demand
  generateTutorNotes(questionObj) {
    return `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--accent-gold); padding: 12px; border-radius: 8px;">
          <strong style="color: var(--accent-gold); font-size: 14px;">🎓 AI Eğitmenin Sınav Tüyosu:</strong>
          <p style="margin-top: 6px; font-size: 13px; line-height: 1.6; color: #fff;">
            EGM Özel Güvenlik sınavlarında <strong>${questionObj.topic}</strong> dersinden gelen sorularda adayların en çok düştüğü yanılgı, özel güvenliğin yetkilerini genel kolluk (Polis) yetkileriyle karıştırmaktır.
          </p>
        </div>

        <div style="background: var(--bg-card); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
          <strong style="color: #fff; font-size: 13.5px;">📌 Kanuni / Teknik Esas:</strong>
          <p style="margin-top: 4px; font-size: 13px; color: var(--text-muted); line-height: 1.6;">
            ${questionObj.explanation}
          </p>
          <div style="margin-top: 8px; font-family: var(--font-mono); font-size: 11.5px; color: var(--accent-cyan);">
            Dayanak: ${questionObj.lawRef}
          </div>
        </div>
      </div>
    `;
  }
}

const oggAi = new OggAiTutor();
