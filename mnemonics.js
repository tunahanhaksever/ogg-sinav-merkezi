/**
 * ÖGG Zihne Kazıma Akademisi — Hafıza Kodlamaları, Şifreler ve Püf Noktalar
 * Kağıt kaleme gerek bırakmayan, akılda kalıcı kalıcı öğrenme sistemi.
 */

const OGG_MNEMONICS = [
  {
    topic: "Yangın Güvenliği",
    title: "🔥 TS EN 2 Yangın Sınıflarını Kafaya Kazıma Şifresi (A-B-C-D-F)",
    badge: "Yangın Kodlaması",
    code: "A-B-C-D-F Formülü",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter">A</div>
          <div class="m-content">
            <strong>Ağaç / Ahşap (Katı Madde)</strong>
            <span>Odun, kömür, kumaş, kağıt. Söndürücü: <em>Basınçlı Su, KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #ef4444; border-color: #ef4444;">B</div>
          <div class="m-content">
            <strong>Benzin / Boya (Sıvı Madde)</strong>
            <span>Mazot, tiner, alkol, yağ. <strong>ASLA SU SIKMA!</strong> Söndürücü: <em>Köpük (Boğma), KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #06b6d4; border-color: #06b6d4;">C</div>
          <div class="m-content">
            <strong>Cızz Gaz (Gaz Maddeler)</strong>
            <span>LPG, metan, doğalgaz. İlk kural: <strong>Vanayı Kapat!</strong> Söndürücü: <em>KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #a855f7; border-color: #a855f7;">D</div>
          <div class="m-content">
            <strong>Demir / Döküm (Hafif Metaller)</strong>
            <span>Magnezyum, alüminyum, titanyum. Söndürücü: <em>Özel D Tipi Kuru Toz</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #f59e0b; border-color: #f59e0b;">F</div>
          <div class="m-content">
            <strong>Fritöz / Fast-Food (Mutfak Yağı)</strong>
            <span>Kızartma yağları. <strong>ASLA SU SIKMA!</strong> Söndürücü: <em>Islak Kimyasal (Wet Chemical)</em>.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    topic: "Temel İlkyardım",
    title: "🚑 İlkyardım Hayat Kurtarma Kodlamaları (30:2, Heimlich, Rentek)",
    badge: "İlkyardım Kodlaması",
    code: "30 Gün Oruç / 2 Bayram = 30:2 CPR",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color: #10b981; border-color: #10b981;">30:2</div>
          <div class="m-content">
            <strong>Kalp Masajı : Suni Solunum Oranı</strong>
            <span>Tüm yaşlarda (Yetişkin, Çocuk, Bebek) <strong>30 Bası : 2 Nefes</strong>. Ritim: Dakikada <strong>100-120 bası</strong>. Derinlik: 5 cm.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #f59e0b; border-color: #f59e0b;">HM</div>
          <div class="m-content">
            <strong>Heimlich Manevrası (Boğulma / Tam Tıkanma)</strong>
            <span>Konuşamayan, ellerini boynuna götüren kişide karına arkadan yumruk basısı yapılır (Tıkaç fırlar!).</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #3b82f6; border-color: #3b82f6;">RM</div>
          <div class="m-content">
            <strong>Rentek Manevrası (Araç İçi Kurtarma)</strong>
            <span>Kaza yapan araçtan yaralıyı <strong>omuriliğini hiç bükmeden</strong> çıkarmak için uygulanır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #ec4899; border-color: #ec4899;">KP</div>
          <div class="m-content">
            <strong>Koma Pozisyonu (Yan Yatış)</strong>
            <span>Bilinci kapalı ama solunumu olan kişide <strong>dilin boğaza kaçmaması</strong> ve kusmukla boğulmaması için verilir.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    topic: "Silah Bilgisi ve Atış",
    title: "🎯 Silah Parçaları & Yiv-Set Kodlamaları",
    badge: "Silah Kodlaması",
    code: "Çukur=YİV, Tepe=SET, Çeken=TIRNAK, Fırlatan=ÇIKARICI",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color: #3b82f6; border-color: #3b82f6;">Y-S</div>
          <div class="m-content">
            <strong>Yiv ve Set (Namlu İçi Helezon)</strong>
            <span>Girintiye <strong>YİV</strong> (Çukur), Çıkıntıya <strong>SET</strong> (Tepe) denir. Karşılıklı iki set arası <strong>ÇAP</strong>'tır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #f59e0b; border-color: #f59e0b;">T-Ç</div>
          <div class="m-content">
            <strong>Tırnak ve Çıkarıcı</strong>
            <span><strong>Tırnak</strong> boş kovanı fişek yatağından geri çeker, <strong>Çıkarıcı</strong> çarparak dışarı fırlatır!</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #ef4444; border-color: #ef4444;">15s</div>
          <div class="m-content">
            <strong>Gecikmeli Patlama (Hangfire Emniyeti)</strong>
            <span>Tetiğe basıp patlamazsa namluyu hedeften ayırmadan en az <strong>10-15 saniye</strong> beklenir!</span>
          </div>
        </div>
      </div>
    `
  },
  {
    topic: "Güvenlik Sistem ve Cihazları",
    title: "📡 X-Ray Renk Skalası Kodlaması",
    badge: "X-Ray Kodlaması",
    code: "Turuncu=Organik, Yeşil=Karışık, Mavi=Metal",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color: #f97316; border-color: #f97316;">TUR</div>
          <div class="m-content">
            <strong>Turuncu / Kahve (Organik - Atom No < 10)</strong>
            <span>Portakal organiktir! <strong>Patlayıcılar (C4, RDX), uyuşturucular</strong>, kağıt, ahşap, gıda, tekstil.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #22c55e; border-color: #22c55e;">YEŞ</div>
          <div class="m-content">
            <strong>Yeşil / Açık Mavi (İnorganik - Atom No 10-18)</strong>
            <span>Yeşil şişe camdır! <strong>Cam, alüminyum, porselen, kemik, tuz, silikon</strong>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #3b82f6; border-color: #3b82f6;">MAV</div>
          <div class="m-content">
            <strong>Mavi / Siyah (Ağır Metaller - Atom No > 18)</strong>
            <span>Mavi çelik! <strong>Tabanca, bıçak, demir, kurşun, altın, mermi çekirdeği</strong>.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    topic: "Özel Güvenlik Hukuku",
    title: "⚖️ 5188 Sayılı Kanun Kırmızı Çizgiler & Yasaklar",
    badge: "Hukuk Kodlaması",
    code: "Grev Yok! Başka İş Yok! Kartı Başkasına Verirsen İptal!",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color: #ef4444; border-color: #ef4444;">🚫</div>
          <div class="m-content">
            <strong>ÖGG Neleri Asla Yapamaz?</strong>
            <span>• Greve katılamaz (Sendikaya üye olabilir ama grev yapamaz!).<br>• Başka işte çalıştırılamaz (Çay/temizlik yasak!).<br>• Savcı/hakim kararsız ev/araç arayamaz ve şüpheli ifadesi ALAMAZ!</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color: #f59e0b; border-color: #f59e0b;">📜</div>
          <div class="m-content">
            <strong>Kimlik Kartı İptali (5188 SK. m.11 & 20)</strong>
            <span>Kimlik kartını başkasına kullandıran görevlinin kartı Valilikçe <strong>ömür boyu iptal edilir</strong> ve bir daha ÖGG olamaz.</span>
          </div>
        </div>
      </div>
    `
  }
];
