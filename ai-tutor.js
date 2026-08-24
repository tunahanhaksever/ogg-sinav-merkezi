/**
 * ÖGG Eğitim ve Soru Analiz Motoru
 * Soru kökü analizi, kanuni gerekçeler ve mevzuat çözümleri
 */

class OggQuestionAnalyzer {
  constructor() {
    this.trapKeywords = [
      { pattern: /yer\s*almaz/i, tip: "Soru kökündeki 'YER ALMAZ' olumsuz ifadesine dikkat ediniz. Özel güvenlik görevlilerine yasak olan veya adli kolluğa ait yetkiyi aramalısınız." },
      { pattern: /hangisi\s*değildir/i, tip: "'DEĞİLDİR' sorusudur. Özel güvenliğin yetkisini aşan (örneğin adli ifade alma, soruşturma yürütme) seçeneği tespit ediniz." },
      { pattern: /yazılı\s*emir/i, tip: "Acil ve olağanüstü durumlarda sözlü emir geçerlidir; ancak normal idari işlemlerde yetkili amirden yazılı emir talep edilir." },
      { pattern: /yangın/i, tip: "B sınıfı (sıvı) ve F sınıfı (yağ) yangınlara kesinlikle su sıkılmaz. C sınıfı gaz yangınında ilk işlem ana gaz vanasını kapatmaktır." },
      { pattern: /kalp|solunum|ilkyardım|cpr/i, tip: "Temel yaşam desteğinde döngü 30 Kalp Masajı : 2 Suni Solunum (30:2), bası hızı dakikada 100-120 aralığındadır." },
      { pattern: /silah|namlu|yiv|set|fişek/i, tip: "Namlu içi girintiye Yiv, çıkıntıya Set denir. Karşılıklı iki set arası Çap (kalibre)'dır. Tırnak boş kovanı çeker, çıkarıcı dışarı atar." },
      { pattern: /x-ray|detektör/i, tip: "X-Ray skalası: Turuncu=Organik (Patlayıcı/Uyuşturucu), Yeşil=İnorganik (Cam/Alüminyum), Mavi/Siyah=Ağır Metal (Silah/Bıçak)." },
      { pattern: /kimlik/i, tip: "5188 SK. m.11 ve 20 uyarınca kimlik kartını başkasına kullandıran görevlinin kimliği Valilikçe iptal edilir ve meslekten men edilir." }
    ];
  }

  analyzeError(questionObj, chosenIndex, correctIndex) {
    const qText = questionObj.question;
    let detectedTip = "Soru metnini ve seçeneklerdeki kanuni dayanakları inceleyiniz.";
    for (const trap of this.trapKeywords) {
      if (trap.pattern.test(qText)) {
        detectedTip = trap.tip;
        break;
      }
    }

    return {
      title: "Soru Çözümü ve Mevzuat Değerlendirmesi",
      trapAnalysis: detectedTip,
      pedagogicalRule: questionObj.explanation,
      lawRef: questionObj.lawRef
    };
  }
}

const oggAnalyzer = new OggQuestionAnalyzer();
