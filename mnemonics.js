/**
 * ÖGG Zihne Kazıma Akademisi — 11 Ders İçin Zekice Üretilmiş Hafıza Şifreleri, Formüller ve Görsel Şablonlar
 */

const OGG_MNEMONICS = [
  {
    id: "m_hukuk",
    topic: "Özel Güvenlik Hukuku",
    title: "⚖️ 5188 Sayılı Kanun Kırmızı Çizgileri & Yasak Üçgeni",
    badge: "Hukuk Şifresi",
    code: "G-B-K (Grev Yok! Başka İş Yok! Kartı Verirsen İptal!)",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge red">⚠️ 5188 KESİN YASAKLAR</div>
        <div class="schema-grid">
          <div class="schema-card danger">
            <span class="icon">🚫</span>
            <strong>Grev Yasağı</strong>
            <p>Sendikaya üye olabilir ama <strong>asla grev yapamaz!</strong></p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🧹</span>
            <strong>Başka İş Yasağı</strong>
            <p>Güvenlik personeli çay, temizlik, taşıma işinde <strong>çalıştırılamaz!</strong></p>
          </div>
          <div class="schema-card danger">
            <span class="icon">🪪</span>
            <strong>Kart İptali (m.11 & 20)</strong>
            <p>Kimliğini başkasına kullandıranın kartı <strong>Valilikçe ömür boyu iptal edilir!</strong></p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">YASAK</div>
          <div class="m-content">
            <strong>Adli Arama ve İfade Alma</strong>
            <span>ÖGG hakim/savcı kararı olmadan ev veya araç arayamaz, şüpheliyi sorguya çekip <strong>ifade tutanağı düzenleyemez!</strong></span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">SERBEST</div>
          <div class="m-content">
            <strong>Yakalama ve Zor Kullanma (m.9)</strong>
            <span>Suçüstü halinde, delil kaybolmasını önlemek için ve haklarında arama kararı olanları yakalar; TCK m.25 uyarınca <strong>orantılı güç</strong> kullanır.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_yangin",
    topic: "Yangın Güvenliği",
    title: "🔥 Yangın Sınıfları & Söndürme Maddesi Eşleştirme Şifresi",
    badge: "Yangın Şifresi",
    code: "A-B-C-D-F Formülü & PASS Kuralı",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge gold">🔥 TS EN 2 YANGIN HARİTASI</div>
        <div class="schema-grid-5">
          <div class="class-pill a"><strong>A</strong><span>Ağaç/Katı</span><small>Su / KKT</small></div>
          <div class="class-pill b"><strong>B</strong><span>Benzin/Sıvı</span><small>Köpük / KKT (SU YASAK!)</small></div>
          <div class="class-pill c"><strong>C</strong><span>Cızz/Gaz</span><small>Önce Vanayı Kapat!</small></div>
          <div class="class-pill d"><strong>D</strong><span>Döküm/Metal</span><small>Özel D Tozu</small></div>
          <div class="class-pill f"><strong>F</strong><span>Fritöz/Yağ</span><small>Islak Kimyasal (SU YASAK!)</small></div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">SU YASAK!</div>
          <div class="m-content">
            <strong>B (Sıvı) ve F (Mutfak Yağı) Yangınları</strong>
            <span>Benzin veya tavada yanan yağa su dökülürse patlama ve parlama olur. Sadece <strong>Köpük ve Islak Kimyasal</strong> kullanılır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">PASS</div>
          <div class="m-content">
            <strong>Yangın Tüpü Kullanım Sırası</strong>
            <span><strong>P</strong>imi çek ➔ <strong>A</strong>levin dibine tut ➔ <strong>S</strong>ık ➔ <strong>S</strong>üpürerek alevi boğ!</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_ilkyardim",
    topic: "Temel İlkyardım",
    title: "🚑 Temel Yaşam Desteği (CPR) & Hayat Kurtaran Manevralar",
    badge: "İlkyardım Şifresi",
    code: "30 Gün Oruç / 2 Bayram = 30:2 | H-R-K-Ş",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge green">🚑 ACİL İLKYARDIM PROTOKOLÜ</div>
        <div class="schema-grid">
          <div class="schema-card success">
            <span class="icon">❤️</span>
            <strong>CPR: 30 Bası / 2 Nefes</strong>
            <p>Dakikada <strong>100-120 bası</strong>, derinlik <strong>5 cm</strong>.</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">✊</span>
            <strong>Heimlich Manevrası</strong>
            <p>Tam tıkanma (nefes alamama) ➔ Karına arkadan bası.</p>
          </div>
          <div class="schema-card primary">
            <span class="icon">🚗</span>
            <strong>Rentek Manevrası</strong>
            <p>Araçtan yaralıyı <strong>omuriliği koruyarak</strong> çıkarma.</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#ec4899; border-color:#ec4899;">KOMA</div>
          <div class="m-content">
            <strong>Koma Pozisyonu (Yan Yatış)</strong>
            <span>Bilinci kapalı fakat solunumu olan kişide <strong>dilin boğaza kaçmasını ve kusmukla boğulmayı</strong> engeller.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#a855f7; border-color:#a855f7;">ŞOK</div>
          <div class="m-content">
            <strong>Şok Pozisyonu (30 cm)</strong>
            <span>Beyne kan akışını sağlamak için kazazedenin bacakları sırtüstü haldeyken <strong>30 cm</strong> yukarı kaldırılır.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_silah",
    topic: "Silah Bilgisi ve Atış",
    title: "🎯 Silahın Parçaları, Yiv-Set & Balistik Kodlamaları",
    badge: "Silah Şifresi",
    code: "Çukur=YİV | Tepe=SET | Çeken=TIRNAK | Fırlatan=ÇIKARICI",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge blue">🎯 SİLAH VE BALİSTİK DOKTRİNİ</div>
        <div class="schema-grid">
          <div class="schema-card primary">
            <span class="icon">🌀</span>
            <strong>Yiv & Set</strong>
            <p>Yiv=Girinti (Çukur), Set=Çıkıntı (Tepe). Mermiyi döndürür.</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">⚙️</span>
            <strong>Tırnak & Çıkarıcı</strong>
            <p>Tırnak kovanı çeker, Çıkarıcı çarparak fırlatır.</p>
          </div>
          <div class="schema-card danger">
            <span class="icon">⏱️</span>
            <strong>Hangfire (Gecikmeli Ateş)</strong>
            <p>Patlamazsa namluyu ayırmadan <strong>en az 15 sn</strong> bekle!</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">ÇAP</div>
          <div class="m-content">
            <strong>Çap (Kalibre) Tanımı</strong>
            <span>Namlu içindeki <strong>karşılıklı iki set arasındaki</strong> mesafedir (Örn: 9x19 mm'deki 9 mm).</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">ATEŞ</div>
          <div class="m-content">
            <strong>Ateşleme Zinciri</strong>
            <span>Tetik çekilir ➔ Horoz düşer ➔ İğneye çarpar ➔ İğne kapsülü patlatır ➔ Barut yanar ➔ Çekirdek fırlar!</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_xray",
    topic: "Güvenlik Sistem ve Cihazları",
    title: "📡 X-Ray Renk Skalası & Dedektör Standartları",
    badge: "X-Ray Şifresi",
    code: "Turuncu=Organik/C4 | Yeşil=Cam/Alüminyum | Mavi=Metal/Silah",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge purple">📡 X-RAY MADDE AYIRIMI</div>
        <div class="schema-grid">
          <div class="schema-card orange-glow">
            <span class="icon">🟠</span>
            <strong>Turuncu / Kahve</strong>
            <p>Atom No < 10 (Organik: C4, RDX, Uyuşturucu, Gıda, Kağıt).</p>
          </div>
          <div class="schema-card green-glow">
            <span class="icon">🟢</span>
            <strong>Yeşil / Açık Mavi</strong>
            <p>Atom No 10-18 (İnorganik: Cam, Alüminyum, Silikon, Kemik).</p>
          </div>
          <div class="schema-card blue-glow">
            <span class="icon">🔵</span>
            <strong>Mavi / Siyah</strong>
            <p>Atom No > 18 (Ağır Metal: Çelik, Tabanca, Bıçak, Kurşun).</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#06b6d4; border-color:#06b6d4;">2.5-5 cm</div>
          <div class="m-content">
            <strong>El Metal Dedektörü Mesafesi</strong>
            <span>Dedektör vücuda <strong>2.5 ile 5 cm mesafeden paralel</strong> tutulmalıdır. Hamilelere tutulmaz!</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_devriye",
    topic: "Güvenlik Tedbirleri",
    title: "🛡️ Devriye Çeşitleri & Tutanak Yazım Kuralları",
    badge: "Devriye Şifresi",
    code: "Rastgele (En Etkili) | B-G-M-S-İ Tutanak",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge blue">🛡️ DEVRİYE VE TUTANAK DÜZENİ</div>
        <div class="schema-grid">
          <div class="schema-card primary">
            <span class="icon">🎲</span>
            <strong>Rastgele Devriye</strong>
            <p>Planı olmayan, suçluyu en çok şaşırtan <strong>en etkili devriye</strong>.</p>
          </div>
          <div class="schema-card success">
            <span class="icon">📋</span>
            <strong>Tutanak (B-G-M-S-İ)</strong>
            <p>Başlık, Giriş, Metin, Sonuç, İmzalar (En az 2 görevli).</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🚧</span>
            <strong>Olay Yeri Koruma</strong>
            <p>Şerit çek, delile çıplak elle dokunma, delilin yerini değiştirme!</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">TUTANAK</div>
          <div class="m-content">
            <strong>Hata Düzeltme Kuralı</strong>
            <span>Tutanakta daksil/silme YASAKTIR! Yanlış kelimenin üstü tek çizgiyle çizilip yanına doğrusu yazılır ve paraflanır.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_vip",
    topic: "Kişi Koruma",
    title: "👮 VIP Koruma Çemberleri & Yaya Düzenleri",
    badge: "VIP Şifresi",
    code: "İç Çember (Beden Siper) | Orta (Kapı) | Dış (Sokak)",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge gold">👮 KORUMA HALKALARI</div>
        <div class="schema-grid">
          <div class="schema-card danger">
            <span class="icon">🎯</span>
            <strong>İç Çember</strong>
            <p>VIP'nin hemen yanındaki yakın koruma personeli (Bedenini siper eder).</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🚪</span>
            <strong>Orta Çember</strong>
            <p>Bina girişleri, kapılar, koridorlar ve asansör kontrolü.</p>
          </div>
          <div class="schema-card primary">
            <span class="icon">🏙️</span>
            <strong>Dış Çember</strong>
            <p>Çevre duvarları ve ana sokak girişleri (En geniş halka).</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">DÜZEN</div>
          <div class="m-content">
            <strong>Yaya Koruma Düzenleri</strong>
            <span>Tek kişi, İkili, Üçlü (Üçgen), Dörtlü (Kutu), Beşli (Kama / V Düzeni). Kalabalıkta koruma çemberi daraltılır.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_kalabalik",
    topic: "Kalabalık Yönetimi",
    title: "👥 Kalabalık Psikolojisi & Grup Dinamikleri",
    badge: "Kalabalık Şifresi",
    code: "Kalabalık=Teşkilatsız | Grup=Liderli | Panik=Bulaşıcı Kaçış",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge purple">👥 TOPLULUK AYRIMI</div>
        <div class="schema-grid">
          <div class="schema-card">
            <span class="icon">🚶</span>
            <strong>Kalabalık</strong>
            <p>Geçici toplanmış, lideri ve teşkilatı olmayan topluluk.</p>
          </div>
          <div class="schema-card primary">
            <span class="icon">👥</span>
            <strong>Grup</strong>
            <p>Ortak amacı ve lideri olan örgütlü topluluk.</p>
          </div>
          <div class="schema-card danger">
            <span class="icon">⚡</span>
            <strong>Panik</strong>
            <p>Mantığın kaybolduğu, bulaşıcı ve kontrolsüz kaçış hareketi.</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#a855f7; border-color:#a855f7;">COP</div>
          <div class="m-content">
            <strong>Cop Kullanım Bölgeleri</strong>
            <span>1. Derece Vuruş: Kol ve bacakların etli kısımları. Baş, boyun ve kasık bölgesine vurulması <strong>HAYATİ TEHLİKE</strong> yaratır ve yasaktır!</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_uyusturucu",
    topic: "Uyuşturucu Madde Bilgisi",
    title: "💊 Uyuşturucu Sınıfları & Ayırt Edici Belirtiler",
    badge: "Narkotik Şifresi",
    code: "Kenevir=Esrar (Yanık Ot Kokusu) | Haşhaş=Afyon/Eroin",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge green">💊 NARKOTİK MADDE HARİTASI</div>
        <div class="schema-grid">
          <div class="schema-card success">
            <span class="icon">🌿</span>
            <strong>Kenevir ➔ Esrar</strong>
            <p>Karakteristik tatlımsı yanık kuru ot kokusu yayar.</p>
          </div>
          <div class="schema-card danger">
            <span class="icon">🌸</span>
            <strong>Haşhaş ➔ Eroin / Morfin</strong>
            <p>Merkezi sinir sistemini uyuşturan opiat grubu.</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🧪</span>
            <strong>Sentetikler</strong>
            <p>Metamfetamin, Bonzai, Ecstasy, Captagon.</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">BELİRTİ</div>
          <div class="m-content">
            <strong>Madde Bağımlısı Belirtileri</strong>
            <span>Göz bebeklerinde aşırı büyüme/küçülme, titreme, aşırı terleme, algı kaybı ve saldırganlık.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_iletisim",
    topic: "Etkili İletişim",
    title: "💬 İletişim Öğeleri & Empati / Sempati Ayrımı",
    badge: "İletişim Şifresi",
    code: "K-M-K-A-D (Kaynak, Mesaj, Kanal, Alıcı, Dönüt)",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge blue">💬 İLETİŞİM ÇEMBERİ</div>
        <div class="schema-grid">
          <div class="schema-card primary">
            <span class="icon">👤</span>
            <strong>Kaynak ➔ Mesaj ➔ Alıcı</strong>
            <p>İletişim kanalla aktarılır, <strong>Dönüt (Geri Bildirim)</strong> ile tamamlanır.</p>
          </div>
          <div class="schema-card success">
            <span class="icon">🤝</span>
            <strong>Empati</strong>
            <p>Kendini karşıdakinin yerine koyarak onu anlama becerisidir.</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🎭</span>
            <strong>Sempati</strong>
            <p>Karşıdakinin duygularını olduğu gibi benimsemektir.</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">DÖNÜT</div>
          <div class="m-content">
            <strong>Dönüt (Geri Bildirim) Önemi</strong>
            <span>Dönüt yoksa tek yönlü iletişimdir. İletişimin başarılı olduğunu alıcının verdiği dönüt kanıtlar.</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "m_kaan",
    topic: "Genel Kollukla İlişkiler",
    title: "🤝 Genel Kolluk (Polis/Jandarma) & KAAN Entegrasyonu",
    badge: "KAAN Şifresi",
    code: "KAAN = Özel Güvenlik + Polis/Jandarma Entegrasyonu",
    visualBox: `
      <div class="visual-schema-box">
        <div class="schema-badge gold">🤝 GENEL KOLLUK KOORDİNASYONU</div>
        <div class="schema-grid">
          <div class="schema-card primary">
            <span class="icon">📱</span>
            <strong>KAAN Projesi</strong>
            <p>ÖGG ile Polis arasında anlık suç bildirimi ve entegrasyon sistemi.</p>
          </div>
          <div class="schema-card warning">
            <span class="icon">🚨</span>
            <strong>Derhal Bildirim</strong>
            <p>Adli olay vuku bulduğunda derhal genel kolluğa haber verilir.</p>
          </div>
          <div class="schema-card success">
            <span class="icon">👮</span>
            <strong>Emir ve Denetim</strong>
            <p>Mülki amir ve genel kolluğun talimatlarına uymak zorunludur.</p>
          </div>
        </div>
      </div>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">KOLLUK</div>
          <div class="m-content">
            <strong>Genel Kolluk Geldiğinde</strong>
            <span>Genel kolluk olay yerine intikal ettiği andan itibaren sevk ve idare genel kolluğa geçer, ÖGG emrine girer.</span>
          </div>
        </div>
      </div>
    `
  }
];
