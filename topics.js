/**
 * ÖGG Akademisi — Kapsamlı Ders Konu Anlatımları & Önemli Sınav Notları
 */

const OGG_TOPICS = [
  {
    id: "hukuk",
    title: "1. Özel Güvenlik Hukuku ve Kişi Hakları (5188 Sayılı Kanun)",
    icon: "⚖️",
    summary: "5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun, ÖGG'nin yetkileri, yasakları, kimlik kartı, silah taşıma şartları ve cezai sorumlulukları.",
    content: `
      <h3>📌 1. Özel Güvenlik Görevlisinin Temel Yetkileri (Madde 9)</h3>
      <ul>
        <li><strong>Kimlik Sorma:</strong> Görev alanında ve görev saatleri içerisinde kimlik sorma yetkisi vardır.</li>
        <li><strong>Duyarlı Kapı ve Detektörle Arama:</strong> Görev alanına girenleri duyarlı kapıdan geçirme, eşyaları X-ray veya detektörle kontrol etme.</li>
        <li><strong>Yakalama Yetkisi:</strong> Suçüstü halinde, suç delillerinin kaybolmasını önlemek için ve haklarında yakalama/tutuklama kararı bulunanları yakalama.</li>
        <li><strong>Emanete Alma / Muhafaza:</strong> Suç delili olabilecek veya tehlike doğurabilecek eşyaları genel kolluk gelene kadar muhafaza altına alma.</li>
        <li><strong>Zor Kullanma:</strong> TCK m.25 (Meşru Savunma ve Zorunluluk Hali) ile Türk Borçlar Kanunu m.64 uyarınca orantılı güç kullanma.</li>
        <li><strong>Konuta Girme:</strong> Yangın, sel, deprem gibi tabii afet ve acil imdat çağrısı hallerinde görev alanındaki konut ve işyerlerine girme.</li>
      </ul>

      <h3>⚠️ 2. Özel Güvenlik Görevlisine Yasak Olan Haller</h3>
      <ul>
        <li><strong>Grev Yasağı:</strong> Özel güvenlik görevlileri greve katılamazlar.</li>
        <li><strong>Görev Alanı Dışında Çalıştırılma:</strong> Özel güvenlik görevlileri koruma ve güvenlik hizmetleri dışında başka bir işte çalıştırılamaz.</li>
        <li><strong>Sendikaya Üye Olma:</strong> Özel güvenlik görevlileri sendikalara üye OLABİLİRLER (Sadece grev yapamazlar).</li>
        <li><strong>Arama Kısıtı:</strong> Görevliler hakim kararı veya savcı talimatı olmadan adli arama (ev/araç arama, soyarak üst arama) yapamazlar.</li>
      </ul>
    `
  },
  {
    id: "tedbirler",
    title: "2. Güvenlik Tedbirleri & Devriye Hizmetleri",
    icon: "🛡️",
    summary: "Devriye türleri, kontrol noktaları, üst arama usulleri, olay yeri koruma ve tutanak tanzim kuralları.",
    content: `
      <h3>📌 1. Devriye Türleri ve Amaçları</h3>
      <ul>
        <li><strong>Rastgele (Rastlantısal) Devriye:</strong> Belirli güzergah ve zaman planına bağlı kalmaksızın suçluların plan yapmasını önleyen devriye.</li>
        <li><strong>Dairesel Devriye:</strong> Merkezden çevreye veya çevreden merkeze daireler çizerek yapılan devriye.</li>
        <li><strong>Geri Dönüşlü Devriye:</strong> Gidilen rotadan beklenmedik anda ani geri dönüşler yaparak şüphelileri yanıltan devriye.</li>
        <li><strong>Çizgisel Devriye:</strong> Belirli bir hat veya sınır boyunca (örneğin fabrika çiti, boru hattı) ileri-geri icra edilen devriye.</li>
      </ul>

      <h3>📌 2. Olay Yeri Koruma İlkeleri</h3>
      <ul>
        <li>Olay yerine genel kolluk (Polis/Jandarma) gelene kadar emniyet şeridi çekilir.</li>
        <li>Olay yerindeki hiçbir suç deliline çıplak elle dokunulmaz, kovan/silah/kan izlerinin yeri değiştirilmez.</li>
        <li>Hava şartlarına karşı delillerin üzeri kutu veya örtüyle (temas etmeden) muhafaza edilir.</li>
      </ul>
    `
  },
  {
    id: "yangin",
    title: "3. Yangın Güvenliği ve Müdahale Teknikleri",
    icon: "🔥",
    summary: "Yangın sınıfları (A, B, C, D, F), söndürme cihazları, yangın üçgeni ve tahliye prensipleri.",
    content: `
      <h3>📌 1. Yangın Sınıfları ve Söndürücüler</h3>
      <ul>
        <li><strong>A Sınıfı (Katı Madde):</strong> Ahşap, kömür, kumaş, kağıt. Söndürücü: <em>Basınçlı Su, KKT, Köpük</em>.</li>
        <li><strong>B Sınıfı (Sıvı Madde):</strong> Benzin, tiner, alkol, vernik, yağ. Söndürücü: <em>Köpük, KKT, Karbondioksit (CO2)</em>. (ASLA SU KULLANILMAZ!).</li>
        <li><strong>C Sınıfı (Gaz Maddeler):</strong> LPG, metan, bütan, doğalgaz. Söndürücü: <em>Kuru Kimyevi Toz (KKT), Halon alternatifleri</em>. (Önce gaz vanası kesilmelidir).</li>
        <li><strong>D Sınıfı (Hafif Metaller):</strong> Magnezyum, alüminyum, titanyum, lityum. Söndürücü: <em>Özel D Tipi Kuru Toz</em>.</li>
        <li><strong>F Sınıfı (Bitkisel/Hayvansal Pişirme Yağları):</strong> Fritöz, mutfak tava yangınları. Söndürücü: <em>Islak Kimyasal (Wet Chemical)</em>.</li>
      </ul>

      <h3>📌 2. Yangın Üçgeni</h3>
      <p>Yangının başlaması ve sürmesi için üç unsur bir arada bulunmalıdır: <strong>Yanıcı Madde + Oksijen (Hava) + Isı (Tutuşma Sıcaklığı)</strong>.</p>
    `
  },
  {
    id: "ilkyardim",
    title: "4. Temel İlkyardım Bilgisi & Yaşam Desteği",
    icon: "🚑",
    summary: "Temel yaşam desteği (CPR), Heimlich manevrası, kanamalar, şok ve Rentek manevrası.",
    content: `
      <h3>📌 1. Temel Yaşam Desteği (CPR - Kalp Masajı)</h3>
      <ul>
        <li><strong>Oran:</strong> Yetişkin, çocuk ve bebeklerde <strong>30 Kalp Masajı : 2 Suni Solunum</strong> uygulanır.</li>
        <li><strong>Hız:</strong> Dakikada 100 - 120 bası ritminde uygulanır.</li>
        <li><strong>Derinlik:</strong> Yetişkin ve çocukta göğüs kafesi 5 cm (bebekte 4 cm) çökecek şekilde bası yapılır.</li>
      </ul>

      <h3>📌 2. Hayat Kurtarıcı Manevralar</h3>
      <ul>
        <li><strong>Heimlich Manevrası:</strong> Tam tıkanma (hava yolu tıkanıklığı) yaşayan kazazedenin karın bölgesine arkadan sarılarak içeri ve yukarı doğru yapılan basıdır.</li>
        <li><strong>Rentek Manevrası:</strong> Kaza yapmış araç içerisindeki bilinci kapalı yaralıyı, omuriliğine zarar vermeden güvenli alana çıkarmak için kullanılan manevradır.</li>
        <li><strong>Koma Pozisyonu:</strong> Bilinci kapalı fakat solunumu ve nabzı olan yaralıya verilen yan yatış pozisyonudur (Dilin boğaza kaçmasını ve kusmukla boğulmayı önler).</li>
      </ul>
    `
  },
  {
    id: "silah",
    title: "5. Silah Bilgisi ve Atış Eğitimi",
    icon: "🎯",
    summary: "Silahın ana parçaları, namlu, yiv-set mekanizması, nişan hattı, arızalar ve atış emniyeti kuralları.",
    content: `
      <h3>📌 1. Silahın Ana Parçaları ve Fonksiyonları</h3>
      <ul>
        <li><strong>Namlu:</strong> Mermiye yön veren, içinde yiv ve set bulunan çelik borudur.</li>
        <li><strong>Yiv ve Set:</strong> Namlu içindeki girinti (yiv) ve çıkıntılardır (set). Merminin kendi ekseni etrafında dönerek (burgu hareketi) hedefe dik gitmesini sağlar.</li>
        <li><strong>Çap (Kalibre):</strong> Karşılıklı iki set arasındaki mesafedir.</li>
        <li><strong>Tırnak & Çıkarıcı:</strong> Boş kovanı fişek yatağından çekip dışarı fırlatan mekanizmadır. (Tırnak çeker, Çıkarıcı fırlatır).</li>
      </ul>

      <h3>📌 2. Atış Emniyet Kuralları</h3>
      <ul>
        <li>Silah her zaman dolu kabul edilir.</li>
        <li>Namlu asla vurulmak istenmeyen bir canlıya doğrultulmaz.</li>
        <li>Atışa hazır olunana kadar tetik parmağı tetik korkuluğu dışında (gövdede) düz tutulur.</li>
        <li>Tetiğe basıldığı halde patlama olmazsa, namlu hedeften ayrılmadan en az 10-15 saniye beklenir.</li>
      </ul>
    `
  },
  {
    id: "xray",
    title: "6. Güvenlik Sistem ve Cihazları (X-Ray & Detektörler)",
    icon: "📡",
    summary: "X-Ray bagaj kontrol cihazı renk skalaları, kapı/el metal detektörleri ve CCTV kamera sistemleri.",
    content: `
      <h3>📌 1. X-Ray Cihazı Renk Anlamları</h3>
      <ul>
        <li><strong>Turuncu / Kahverengi:</strong> Organik Maddeler (Atom numarası 10'dan küçük olanlar: C, H, O, N). <em>Plastik patlayıcılar (C4, RDX), uyuşturucular, kumaş, ahşap, kağıt, gıda</em>.</li>
        <li><strong>Yeşil / Açık Mavi:</strong> Karışık ve İnorganik Maddeler (Atom numarası 10-18 arası). <em>Alüminyum, cam, silikon, kemik, tuz</em>.</li>
        <li><strong>Mavi / Koyu Mavi / Siyah:</strong> Ağır Metaller (Atom numarası 18'den büyük). <em>Çelik, demir, kurşun, altın, silahlar, bıçaklar, mermi çekirdeği</em>.</li>
      </ul>

      <h3>📌 2. Metal Detektörleri Kullanım İlkeleri</h3>
      <ul>
        <li>El detektörü kişinin vücuduna 2.5 - 5 cm mesafeden paralel olarak gezdirilir.</li>
        <li>El detektörü hamilelere ve kalp pili olan kişilere kesinlikle doğrudan tutulmamalıdır.</li>
      </ul>
    `
  }
];
