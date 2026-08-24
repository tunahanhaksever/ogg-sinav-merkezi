/**
 * ÖGG Zihne Kazıma Akademisi — Tüm 11 Ders İçin Eksiksiz Hafıza Şifreleri & Görsel Şablonlar
 * 1. Hukuk, 2. Devriye, 3. Yangın, 4. İlkyardım, 5. Silah, 6. X-Ray, 7. Kalabalık, 8. VIP Koruma, 9. Uyuşturucu, 10. İletişim, 11. KAAN
 */

const OGG_MNEMONICS = [
  // 1. Yangın Güvenliği
  {
    topic: "Yangın Güvenliği",
    title: "🔥 TS EN 2 Yangın Sınıfları & Söndürücü Formülleri",
    badge: "Yangın Şifresi",
    code: "A-B-C-D-F ve P-A-S-S Kuralı",
    diagramSvg: `
      <svg viewBox="0 0 400 120" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <rect x="10" y="20" width="65" height="80" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
        <text x="42" y="55" fill="#eab308" font-size="22" font-weight="bold" text-anchor="middle">A</text>
        <text x="42" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">AĞAÇ (Katı)</text>
        
        <rect x="90" y="20" width="65" height="80" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="122" y="55" fill="#ef4444" font-size="22" font-weight="bold" text-anchor="middle">B</text>
        <text x="122" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">BENZİN (Sıvı)</text>

        <rect x="170" y="20" width="65" height="80" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="202" y="55" fill="#06b6d4" font-size="22" font-weight="bold" text-anchor="middle">C</text>
        <text x="202" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">CIZZ GAZ</text>

        <rect x="250" y="20" width="65" height="80" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="282" y="55" fill="#a855f7" font-size="22" font-weight="bold" text-anchor="middle">D</text>
        <text x="282" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">DÖKÜM (Metal)</text>

        <rect x="330" y="20" width="65" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="362" y="55" fill="#f59e0b" font-size="22" font-weight="bold" text-anchor="middle">F</text>
        <text x="362" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">FRİTÖZ (Yağ)</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">A</div>
          <div class="m-content">
            <strong>Ağaç / Ahşap (Katı Madde)</strong>
            <span>Odun, kumaş, kağıt. Söndürücü: <em>Basınçlı Su, KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">B</div>
          <div class="m-content">
            <strong>Benzin / Boya (Sıvı Madde)</strong>
            <span>Mazot, tiner, yağ. <strong>ASLA SU SIKMA!</strong> Söndürücü: <em>Köpük (Boğma), KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#06b6d4; border-color:#06b6d4;">C</div>
          <div class="m-content">
            <strong>Cızz Gaz (Gaz Maddeler)</strong>
            <span>LPG, metan, doğalgaz. İlk kural: <strong>Vanayı Kapat!</strong> Söndürücü: <em>KKT</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#a855f7; border-color:#a855f7;">D</div>
          <div class="m-content">
            <strong>Demir / Döküm (Hafif Metal)</strong>
            <span>Magnezyum, alüminyum. Söndürücü: <em>Özel D Tipi Kuru Toz</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#f59e0b; border-color:#f59e0b;">F</div>
          <div class="m-content">
            <strong>Fritöz / Fast-Food (Mutfak Yağı)</strong>
            <span>Kızartma yağları. <strong>ASLA SU SIKMA!</strong> Söndürücü: <em>Islak Kimyasal</em>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">PASS</div>
          <div class="m-content">
            <strong>Tüp Kullanım Sırası (PASS)</strong>
            <span><strong>P</strong>imi çek, <strong>A</strong>levin dibine tut, <strong>S</strong>ık, <strong>S</strong>üpür!</span>
          </div>
        </div>
      </div>
    `
  },

  // 2. Temel İlkyardım
  {
    topic: "Temel İlkyardım",
    title: "🚑 İlkyardım Hayat Kurtarma Formülleri (30:2 & H-R-K-Ş)",
    badge: "İlkyardım Şifresi",
    code: "30:2 CPR | H-R-K-Ş Manevraları",
    diagramSvg: `
      <svg viewBox="0 0 400 100" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <circle cx="60" cy="50" r="35" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="60" y="48" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">30:2</text>
        <text x="60" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">CPR DÖNGÜSÜ</text>

        <circle cx="160" cy="50" r="35" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="160" y="48" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">HEIMLICH</text>
        <text x="160" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">TAM TIKANMA</text>

        <circle cx="260" cy="50" r="35" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="260" y="48" fill="#3b82f6" font-size="13" font-weight="bold" text-anchor="middle">RENTEK</text>
        <text x="260" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">ARAÇTA OMURİLİK</text>

        <circle cx="350" cy="50" r="35" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="350" y="48" fill="#ec4899" font-size="14" font-weight="bold" text-anchor="middle">KOMA</text>
        <text x="350" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">YAN YATIŞ</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">30:2</div>
          <div class="m-content">
            <strong>Kalp Masajı : Suni Solunum Oranı</strong>
            <span>Tüm yaşlarda (Yetişkin, Çocuk, Bebek) <strong>30 Bası : 2 Nefes</strong>. Ritim: Dakikada <strong>100-120 bası</strong>. Derinlik: 5 cm.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#f59e0b; border-color:#f59e0b;">HM</div>
          <div class="m-content">
            <strong>Heimlich Manevrası (Boğulma / Tam Tıkanma)</strong>
            <span>Konuşamayan, ellerini boynuna götüren kişide karına arkadan yumruk basısı yapılır (Tıkaç fırlar!).</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">RM</div>
          <div class="m-content">
            <strong>Rentek Manevrası (Araç İçi Kurtarma)</strong>
            <span>Kaza yapan araçtan yaralıyı <strong>omuriliğini hiç bükmeden</strong> çıkarmak için uygulanır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#ec4899; border-color:#ec4899;">KP</div>
          <div class="m-content">
            <strong>Koma Pozisyonu (Yan Yatış)</strong>
            <span>Bilinci kapalı ama solunumu olan kişide <strong>dilin boğaza kaçmaması</strong> ve kusmukla boğulmaması için verilir.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#a855f7; border-color:#a855f7;">30cm</div>
          <div class="m-content">
            <strong>Şok Pozisyonu</strong>
            <span>Beyne kan gitmesi için bacaklar sırtüstü pozisyonda <strong>30 cm</strong> yukarı kaldırılır.</span>
          </div>
        </div>
      </div>
    `
  },

  // 3. Silah Bilgisi ve Atış
  {
    topic: "Silah Bilgisi ve Atış",
    title: "🎯 Silahın Parçaları, Yiv-Set & Balistik Şifresi",
    badge: "Silah Şifresi",
    code: "Çukur=YİV | Tepe=SET | Çeken=TIRNAK | Fırlatan=ÇIKARICI",
    diagramSvg: `
      <svg viewBox="0 0 400 100" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <rect x="20" y="25" width="160" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="48" fill="#3b82f6" font-size="14" font-weight="bold" text-anchor="middle">YİV (GİRİNTİ/ÇUKUR)</text>
        <text x="100" y="65" fill="#eab308" font-size="12" font-weight="bold" text-anchor="middle">SET (ÇIKINTI/TEPE)</text>

        <rect x="220" y="25" width="160" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="300" y="48" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">TIRNAK = ÇEKER</text>
        <text x="300" y="65" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">ÇIKARICI = FIRLATIR</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">Y-S</div>
          <div class="m-content">
            <strong>Yiv ve Set (Namlu İçi Helezon)</strong>
            <span>Girintiye <strong>YİV</strong> (Çukur), Çıkıntıya <strong>SET</strong> (Tepe) denir. Karşılıklı iki set arası <strong>ÇAP</strong>'tır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#f59e0b; border-color:#f59e0b;">T-Ç</div>
          <div class="m-content">
            <strong>Tırnak ve Çıkarıcı</strong>
            <span><strong>Tırnak</strong> boş kovanı fişek yatağından geri çeker, <strong>Çıkarıcı</strong> çarparak dışarı fırlatır!</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">15s</div>
          <div class="m-content">
            <strong>Gecikmeli Patlama (Hangfire Emniyeti)</strong>
            <span>Tetiğe basıp patlamazsa namluyu hedeften ayırmadan en az <strong>10-15 saniye</strong> beklenir!</span>
          </div>
        </div>
      </div>
    `
  },

  // 4. Güvenlik Sistemleri & X-Ray
  {
    topic: "Güvenlik Sistem ve Cihazları",
    title: "📡 X-Ray Renk Skalası ve Madde Ayırımı Şifresi",
    badge: "X-Ray Şifresi",
    code: "Turuncu=Organik | Yeşil=İnorganik | Mavi=Metal",
    diagramSvg: `
      <svg viewBox="0 0 400 90" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <rect x="20" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#f97316" stroke-width="2"/>
        <text x="75" y="45" fill="#f97316" font-size="14" font-weight="bold" text-anchor="middle">TURUNCU</text>
        <text x="75" y="60" fill="#94a3b8" font-size="10" text-anchor="middle">ORGANİK / C4</text>

        <rect x="145" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
        <text x="200" y="45" fill="#22c55e" font-size="14" font-weight="bold" text-anchor="middle">YEŞİL</text>
        <text x="200" y="60" fill="#94a3b8" font-size="10" text-anchor="middle">CAM / ALÜMİNYUM</text>

        <rect x="270" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="325" y="45" fill="#3b82f6" font-size="14" font-weight="bold" text-anchor="middle">MAVİ / SİYAH</text>
        <text x="325" y="60" fill="#94a3b8" font-size="10" text-anchor="middle">ÇELİK / SİLAH</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#f97316; border-color:#f97316;">TUR</div>
          <div class="m-content">
            <strong>Turuncu / Kahve (Organik - Atom No < 10)</strong>
            <span>Portakal organiktir! <strong>Patlayıcılar (C4, RDX), uyuşturucular</strong>, kağıt, ahşap, gıda, tekstil.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#22c55e; border-color:#22c55e;">YEŞ</div>
          <div class="m-content">
            <strong>Yeşil / Açık Mavi (İnorganik - Atom No 10-18)</strong>
            <span>Yeşil şişe camdır! <strong>Cam, alüminyum, porselen, kemik, tuz, silikon</strong>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">MAV</div>
          <div class="m-content">
            <strong>Mavi / Siyah (Ağır Metaller - Atom No > 18)</strong>
            <span>Mavi çelik! <strong>Tabanca, bıçak, demir, kurşun, altın, mermi çekirdeği</strong>.</span>
          </div>
        </div>
      </div>
    `
  },

  // 5. Özel Güvenlik Hukuku (5188 Sayılı Kanun)
  {
    topic: "Özel Güvenlik Hukuku",
    title: "⚖️ 5188 Sayılı Kanun Kırmızı Çizgileri ve Yetki Sınırları",
    badge: "Hukuk Şifresi",
    code: "Grev Yok! Başka İş Yok! Kartı Verirsen İptal!",
    diagramSvg: `
      <svg viewBox="0 0 400 90" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <rect x="20" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="75" y="45" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">GREV YASAK</text>
        <text x="75" y="60" fill="#94a3b8" font-size="9.5" text-anchor="middle">SENDİKA SERBEST</text>

        <rect x="145" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="200" y="45" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">BAŞKA İŞ YASAK</text>
        <text x="200" y="60" fill="#94a3b8" font-size="9.5" text-anchor="middle">GÜVENLİK DIŞI İŞ</text>

        <rect x="270" y="20" width="110" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="325" y="45" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">YAKALAMA VAR</text>
        <text x="325" y="60" fill="#94a3b8" font-size="9.5" text-anchor="middle">SUÇÜSTÜ HALİNDE</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">🚫</div>
          <div class="m-content">
            <strong>ÖGG Neleri Asla Yapamaz?</strong>
            <span>• Greve katılamaz (Sendikaya üye olabilir ama grev yapamaz!).<br>• Başka işte çalıştırılamaz (Çay/temizlik yasak!).<br>• Savcı/hakim kararsız ev/araç arayamaz ve şüpheli ifadesi ALAMAZ!</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#f59e0b; border-color:#f59e0b;">📜</div>
          <div class="m-content">
            <strong>Kimlik Kartı İptali (5188 SK. m.11 & 20)</strong>
            <span>Kimlik kartını başkasına kullandıran görevlinin kartı Valilikçe <strong>ömür boyu iptal edilir</strong> ve bir daha ÖGG olamaz.</span>
          </div>
        </div>
      </div>
    `
  },

  // 6. Güvenlik Tedbirleri & Devriye
  {
    topic: "Güvenlik Tedbirleri",
    title: "🛡️ Devriye Türleri ve Tutanak Tanzim Şifresi",
    badge: "Devriye Şifresi",
    code: "R-D-G-Ç Devriye | B-G-M-S-İ Tutanak",
    diagramSvg: `
      <svg viewBox="0 0 400 90" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <circle cx="50" cy="45" r="28" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
        <text x="50" y="49" fill="#eab308" font-size="11" font-weight="bold" text-anchor="middle">RASTGELE</text>

        <circle cx="150" cy="45" r="28" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="150" y="49" fill="#06b6d4" font-size="11" font-weight="bold" text-anchor="middle">DAİRESEL</text>

        <circle cx="250" cy="45" r="28" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="250" y="49" fill="#a855f7" font-size="10.5" font-weight="bold" text-anchor="middle">GERİ DÖNÜŞ</text>

        <circle cx="350" cy="45" r="28" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="350" y="49" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">ÇİZGİSEL</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">RST</div>
          <div class="m-content">
            <strong>Rastgele (Rastlantısal) Devriye</strong>
            <span>Zaman ve rota planı olmadan tamamen habersiz yapılan, suçlunun planını bozan <strong>en etkili devriye</strong>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">TTN</div>
          <div class="m-content">
            <strong>Tutanak Bölümleri (B-G-M-S-İ)</strong>
            <span><strong>B</strong>aşlık, <strong>G</strong>iriş (Tarih/Yer), <strong>M</strong>etin (Olay), <strong>S</strong>onuç, <strong>İ</strong>mzalar (En az 2 görevli).</span>
          </div>
        </div>
      </div>
    `
  },

  // 7. Kişi Koruma (VIP)
  {
    topic: "Kişi Koruma",
    title: "👮 Kişi Koruma (VIP) Çemberleri ve Düzen Şifresi",
    badge: "VIP Koruma Şifresi",
    code: "İç - Orta - Dış Çember & V / Kama Düzeni",
    diagramSvg: `
      <svg viewBox="0 0 400 90" style="width:100%; max-width:400px; height:auto; margin:8px auto; display:block;">
        <circle cx="200" cy="45" r="40" fill="none" stroke="#ef4444" stroke-width="2"/>
        <circle cx="200" cy="45" r="26" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="200" cy="45" r="12" fill="#1e3a8a" stroke="#10b981" stroke-width="2"/>
        <text x="200" y="49" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">VIP</text>
        <text x="80" y="50" fill="#ef4444" font-size="11" font-weight="bold">DIŞ ÇEMBER</text>
        <text x="320" y="50" fill="#10b981" font-size="11" font-weight="bold">İÇ ÇEMBER</text>
      </svg>
    `,
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">İÇ</div>
          <div class="m-content">
            <strong>İç Çember (En Dar Halka)</strong>
            <span>Korunan kişinin (VIP) hemen yanında olan, tehlikede bedenini siper eden yakın korumadır.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#f59e0b; border-color:#f59e0b;">ORT</div>
          <div class="m-content">
            <strong>Orta Çember</strong>
            <span>Bina girişi, asansörler ve kapılarda güvenliği sağlar.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">DIŞ</div>
          <div class="m-content">
            <strong>Dış Çember</strong>
            <span>Tesisin çevre duvarları ve ana sokak başlarını tutan en geniş güvenlik halkasıdır.</span>
          </div>
        </div>
      </div>
    `
  },

  // 8. Kalabalık Yönetimi
  {
    topic: "Kalabalık Yönetimi",
    title: "👥 Kalabalık, Grup & Panik Dinamikleri Şifresi",
    badge: "Kalabalık Şifresi",
    code: "Kalabalık=Teşkilatsız | Grup=Liderli/Örgütlü",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#94a3b8; border-color:#94a3b8;">KLB</div>
          <div class="m-content">
            <strong>Kalabalık</strong>
            <span>Geçici olarak toplanmış, lideri ve teşkilatı olmayan rastgele topluluktur (Örn: Durakta bekleyenler).</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">GRP</div>
          <div class="m-content">
            <strong>Grup</strong>
            <span>Ortak bir amacı, hiyerarşik lideri ve kuralları olan örgütlü topluluktur.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#ef4444; border-color:#ef4444;">PNK</div>
          <div class="m-content">
            <strong>Panik</strong>
            <span>Ani tehlike karşısında mantıklı düşünmenin yok olduğu, bulaşıcı ve kontrolsüz kaçış hissidir.</span>
          </div>
        </div>
      </div>
    `
  },

  // 9. Uyuşturucu Madde Bilgisi
  {
    topic: "Uyuşturucu Madde Bilgisi",
    title: "💊 Doğal ve Sentetik Uyuşturucu Maddeler Şifresi",
    badge: "Narkotik Şifresi",
    code: "Doğal=Kenevir/Afyon | Sentetik=Met/Bonzai",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">DOĞ</div>
          <div class="m-content">
            <strong>Doğal Uyuşturucular</strong>
            <span>Kenevir bitkisinden <strong>Esrar</strong> (yanık tatlımsı ot kokusu yayar), Haşhaştan <strong>Afyon, Morfin, Eroin</strong>.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#a855f7; border-color:#a855f7;">SNT</div>
          <div class="m-content">
            <strong>Sentetik Uyuşturucular</strong>
            <span>Laboratuvarda kimyasal üretilen <strong>Metamfetamin, Bonzai, Ecstasy, Captagon</strong>.</span>
          </div>
        </div>
      </div>
    `
  },

  // 10. Etkili İletişim
  {
    topic: "Etkili İletişim",
    title: "💬 İletişimin Temel Öğeleri & Empati Şifresi",
    badge: "İletişim Şifresi",
    code: "K-M-K-A-D (Kaynak, Mesaj, Kanal, Alıcı, Dönüt)",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">EMP</div>
          <div class="m-content">
            <strong>Empati</strong>
            <span>Kişinin kendisini karşısındakinin yerine koyarak onun duygu ve düşüncelerini anlama becerisidir.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#10b981; border-color:#10b981;">DÖN</div>
          <div class="m-content">
            <strong>Dönüt (Geri Bildirim)</strong>
            <span>Alıcının göndericiye verdiği tepkidir; iletişimin başarılı olup olmadığını gösteren en kritik öğedir.</span>
          </div>
        </div>
      </div>
    `
  },

  // 11. Genel Kollukla İlişkiler & KAAN
  {
    topic: "Genel Kollukla İlişkiler",
    title: "🤝 Genel Kolluk (Polis/Jandarma) & KAAN Entegrasyon Şifresi",
    badge: "KAAN Şifresi",
    code: "KAAN = Özel Güvenlik + Genel Kolluk Birlikteliği",
    explanation: `
      <div class="mnemonic-grid">
        <div class="m-card">
          <div class="m-letter" style="color:#3b82f6; border-color:#3b82f6;">KAAN</div>
          <div class="m-content">
            <strong>KAAN Projesi</strong>
            <span>ÖGG ile Polis ve Jandarma arasındaki işbirliğini ve hızlı bilgi akışını sağlayan EGM entegrasyon sistemidir.</span>
          </div>
        </div>
        <div class="m-card">
          <div class="m-letter" style="color:#eab308; border-color:#eab308;">EMR</div>
          <div class="m-content">
            <strong>Emir ve Denetim</strong>
            <span>Özel güvenlik görevlileri mülki idare amiri (Vali/Kaymakam) ve genel kolluğun emir ve talimatlarına uymak zorundadır.</span>
          </div>
        </div>
      </div>
    `
  }
];
