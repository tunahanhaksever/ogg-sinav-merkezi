/**
 * ÖGG Eğitim Portalı — Kapsamlı ve Detaylı Resmi Müfredat Ders Kitabı (11 Modül)
 * EGM Özel Güvenlik Denetleme Başkanlığı, Polis Akademisi ve Sağlık Bakanlığı Standartları
 */

const OGG_TOPICS = [
  // 1. MODÜL: ÖZEL GÜVENLİK HUKUKU
  {
    id: "hukuk",
    title: "1. Özel Güvenlik Hukuku ve Kişi Hakları (5188 Sayılı Kanun)",
    icon: "⚖️",
    summary: "5188 Sayılı Kanunun tüm maddeleri, ÖGG yetkileri, yasaklar, ruhsat ve kimlik iptali, adli/önleme ayrımı.",
    content: `
      <h3>📌 1. Özel Güvenlik Hizmetlerinin Yasal Dayanağı (5188 Sayılı Kanun)</h3>
      <p>Özel güvenlik hizmetleri, <strong>10.06.2004 tarihli ve 5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun</strong> ile düzenlenmiştir. Özel güvenlik personeli kamu güvenliğini tamamlayıcı mahiyette görev yapar.</p>

      <h3>📌 2. Özel Güvenlik Görevlisinin Yetkileri (Madde 7 ve 9)</h3>
      <ul>
        <li><strong>Kimlik Sorma:</strong> Görev alanında ve görev süresi içerisinde şüpheli veya alana giriş yapan kişilere kimlik sorma yetkisi vardır.</li>
        <li><strong>Arama ve Kontrol:</strong> Kişileri duyarlı kapıdan (kapı metal dedektörü) geçirme, eşyaları X-Ray veya el dedektörüyle kontrol etme; spor müsabakası, konser gibi halka açık etkinliklerde genel kolluk gözetiminde elle arama yapma.</li>
        <li><strong>Yakalama Yetkisi (CMK m.90):</strong>
          <br>• Suçüstü halinde faili yakalama,
          <br>• Suç delillerinin kaybolmasını önlemek amacıyla şüphelileri yakalama,
          <br>• Haklarında yakalama veya tutuklama müzekkeresi bulunan kişileri yakalama,
          <br>• Vücudu veya sağlığı bakımından mevcut bir tehlikeden korunması amacıyla (baygınlık, aşırı sarhoşluk vb.) kişileri yakalama.
        </li>
        <li><strong>Emanete Alma / Muhafaza:</strong> Suç teşkil eden veya delil olabilecek eşyayı genel kolluk gelene kadar tutanakla emanete alma.</li>
        <li><strong>Zor Kullanma (TCK m.25 & TBK m.64):</strong> Meşru savunma, zorunluluk hali ve orantılılık ilkesi çerçevesinde bedeni kuvvet, kelepçe ve cop kullanma.</li>
        <li><strong>Konuta / İşyerine Girme:</strong> Yangın, deprem, sel gibi doğal afetlerde ve içeriden gelen imdat çağrısı durumlarında konut ve işyerlerine girme.</li>
      </ul>

      <h3>⚠️ 3. Özel Güvenlik Görevlilerine Kesinlikle Yasak Olan Haller</h3>
      <ul>
        <li><strong>Grev Yasağı:</strong> Özel güvenlik personeli kesinlikle greve katılamaz (Sendikaya üye olabilirler fakat grev yapamazlar).</li>
        <li><strong>Başka İşte Çalıştırılma Yasağı:</strong> Özel güvenlik personeli koruma ve güvenlik hizmeti dışında temizlik, çay, taşıma gibi işlerde çalıştırılamaz.</li>
        <li><strong>Adli Arama ve İfade Alma Yasağı:</strong> Özel güvenlik görevlilerinin hakim/savcı kararı olmadan ev, araç arama, soyarak üst arama veya şüpheliden ifade alma yetkisi KESİNLİKLE YOKTUR.</li>
        <li><strong>Kimlik Kartı İptali (m.11 & 20):</strong> Kimlik kartını başkasına kullandıran görevlinin kimlik kartı Valilikçe iptal edilir ve bu kişi bir daha asla özel güvenlik görevlisi olamaz.</li>
      </ul>
    `
  },

  // 2. MODÜL: GÜVENLİK TEDBİRLERİ
  {
    id: "tedbirler",
    title: "2. Güvenlik Tedbirleri & Devriye Hizmetleri",
    icon: "🛡️",
    summary: "Devriye yöntemleri, kontrol noktaları, tutanak türleri, olay yeri koruma ve delil muhafazası.",
    content: `
      <h3>📌 1. Devriye Hizmetleri ve Devriye Türleri</h3>
      <ul>
        <li><strong>Rastgele (Rastlantısal) Devriye:</strong> Belirli zaman ve rota planı olmadan tamamen habersiz yapılan, suçluların plan yapmasını önleyen <strong>en etkili devriye</strong> yöntemidir.</li>
        <li><strong>Dairesel Devriye:</strong> Merkezden çevreye veya dış sınırdan merkeze doğru iç içe daireler çizilerek yapılan devriye.</li>
        <li><strong>Geri Dönüşlü Devriye:</strong> Güzergahta ilerlerken beklenmedik bir noktada geriye dönerek şüphelileri yanıltan devriye.</li>
        <li><strong>Çizgisel (Hat) Devriyesi:</strong> Boru hattı, sınır teli veya tren yolu boyunca sabit bir hat üzerinde yapılan devriye.</li>
        <li><strong>Planlı (Rutin) Devriye:</strong> Önceden belirlenen saat ve güzergah çizelgesine göre icra edilen devriye.</li>
      </ul>

      <h3>📌 2. Kontrol Noktaları Organizasyonu</h3>
      <ul>
        <li><strong>1. Kademe (Dış Kontrol Noktası):</strong> Tesis ana kapısı; araç ve kimlik sorgulamasının yapıldığı alandır.</li>
        <li><strong>2. Kademe (İç Kontrol Noktası):</strong> Bina giriş kapısı; X-Ray cihazı ve kapı metal dedektörünün bulunduğu alandır.</li>
      </ul>

      <h3>📌 3. Tutanak Tanzim Kuralları (B-G-M-S-İ)</h3>
      <ul>
        <li>Tutanak bölümleri: <strong>Başlık, Giriş (Tarih, Saat, Yer), Metin (Olayın Gelişimi), Sonuç ve İmzalar</strong>.</li>
        <li>Tutanaklar mutlaka en az <strong>iki görevli personel veya şahit</strong> tarafından imzalanmalıdır.</li>
        <li>Tutanak üzerinde silme, kazıma, daksil kullanılamaz; yanlış kelimenin üzeri tek çizgiyle çizilip yanına doğrusu yazılır ve paraflanır.</li>
      </ul>
    `
  },

  // 3. MODÜL: YANGIN GÜVENLİĞİ
  {
    id: "yangin",
    title: "3. Yangın Güvenliği ve Müdahale Teknikleri (TS EN 2 Standartları)",
    icon: "🔥",
    summary: "TS EN 2 Yangın Sınıfları (A, B, C, D, F), söndürme maddeleri, yangın üçgeni ve PASS kuralı.",
    content: `
      <h3>📌 1. Yangın Üçgeni</h3>
      <p>Yangının başlaması ve sürmesi için üç unsur bir arada bulunmalıdır: <strong>Yanıcı Madde + Oksijen (Hava) + Isı (Tutuşma Sıcaklığı)</strong>. Bu üç unsurdan birinin kesilmesi yangını söndürür (Soğutma, Boğma veya Yanıcı Maddeyi Uzaklaştırma).</p>

      <h3>📌 2. TS EN 2 Standartlarında Yangın Sınıfları ve Söndürücüler</h3>
      <ul>
        <li><strong>A Sınıfı (Katı Maddeler):</strong> Ahşap, kömür, kumaş, kağıt. <em>Söndürücü: Basınçlı Su, KKT, Köpük.</em></li>
        <li><strong>B Sınıfı (Sıvı Maddeler):</strong> Benzin, mazot, tiner, alkol, vernik, boya, yağ. <em>Söndürücü: Köpük (Foam), Kuru Kimyevi Toz (KKT), CO2. (ASLA SU KULLANILMAZ!).</em></li>
        <li><strong>C Sınıfı (Gaz Maddeler):</strong> LPG, metan, bütan, doğalgaz, asetilen. <em>Söndürücü: KKT. (İlk kural: Ana gaz vanası derhal kapatılmalıdır).</em></li>
        <li><strong>D Sınıfı (Hafif Metaller):</strong> Magnezyum, alüminyum, titanyum, lityum. <em>Söndürücü: Özel D Tipi Kuru Toz. (Su ve köpük patlamaya yol açar).</em></li>
        <li><strong>F Sınıfı (Mutfak Yağları):</strong> Fritöz, bitkisel ve hayvansal pişirme yağları. <em>Söndürücü: Islak Kimyasal (Wet Chemical). (Su dökülürse parlama ve yangın yayılması olur).</em></li>
      </ul>

      <h3>📌 3. Yangın Söndürme Cihazı Kullanım Kuralı (PASS Kuralı)</h3>
      <ul>
        <li><strong>P (Pull):</strong> Pimi çek.</li>
        <li><strong>A (Aim):</strong> Hortumu alevin dibine doğrult.</li>
        <li><strong>S (Squeeze):</strong> Tetiği sık.</li>
        <li><strong>S (Sweep):</strong> Alevin tabanını sağa-sola süpürerek tara.</li>
      </ul>
    `
  },

  // 4. MODÜL: TEMEL İLKYARDIM
  {
    id: "ilkyardim",
    title: "4. Temel İlkyardım Bilgisi & Yaşam Desteği (Sağlık Bakanlığı Standartları)",
    icon: "🚑",
    summary: "Temel Yaşam Desteği (30:2 CPR), Heimlich, Rentek, Koma/Şok Pozisyonları, Kanamalar ve Turnike.",
    content: `
      <h3>📌 1. Temel Yaşam Desteği (CPR - Kalp Masajı)</h3>
      <ul>
        <li><strong>Döngü Oranı:</strong> Tüm yaş gruplarında (Yetişkin, Çocuk, Bebek) <strong>30 Kalp Masajı : 2 Suni Solunum (30:2)</strong> uygulanır.</li>
        <li><strong>Bası Hızı:</strong> Dakikada <strong>100 - 120 bası</strong> ritminde uygulanır.</li>
        <li><strong>Bası Derinliği:</strong> Yetişkinde 5 cm, çocukta 5 cm, bebekte 4 cm göğüs kafesi çökecek şekilde bası yapılır.</li>
        <li><strong>Bilinç ve Solunum Kontrolü:</strong> Solunum <strong>'Bak-Dinle-Hisset'</strong> yöntemiyle en fazla <strong>10 saniye</strong> kontrol edilir.</li>
      </ul>

      <h3>📌 2. Hayat Kurtarıcı Manevralar ve Pozisyonlar</h3>
      <ul>
        <li><strong>Heimlich Manevrası:</strong> Tam tıkanma (hava yolu tıkanıklığı) yaşayan kazazedenin karın bölgesine arkadan sarılarak içeri ve yukarı doğru yapılan basıdır.</li>
        <li><strong>Rentek Manevrası:</strong> Kaza yapan araç içerisindeki bilinci kapalı yaralıyı <em>omuriliğine zarar vermeden</em> güvenli alana çıkarmak için kullanılır.</li>
        <li><strong>Koma Pozisyonu:</strong> Bilinci kapalı fakat solunumu olan kazazedeye dilin boğaza kaçmasını ve kusmukla boğulmayı önlemek için verilen <strong>yarı yüzükoyun yan yatış</strong> pozisyonudur.</li>
        <li><strong>Şok Pozisyonu:</strong> Beyne kan akışını artırmak için bacakların sırtüstü haldeyken <strong>30 cm</strong> yukarı kaldırılmasıdır.</li>
      </ul>
    `
  },

  // 5. MODÜL: SİLAH BİLGİSİ VE ATIŞ
  {
    id: "silah",
    title: "5. Silah Bilgisi, Balistik ve Atış Eğitimi",
    icon: "🎯",
    summary: "Silahın ana parçaları, namlu, yiv-set mekanizması, çap, tırnak-çıkarıcı, tutukluk sebepleri ve atış emniyeti.",
    content: `
      <h3>📌 1. Silahın Ana Parçaları ve Fonksiyonları</h3>
      <ul>
        <li><strong>Namlu:</strong> Mermi çekirdeğine yön veren, içinde yiv ve set bulunan çelik borudur.</li>
        <li><strong>Yiv ve Set:</strong> Namlu içindeki girintilere <strong>YİV</strong> (çukur), çıkıntılara <strong>SET</strong> (tepe) denir. Mermiye dönme hareketi vererek menzilini ve isabet hassasiyetini artırır.</li>
        <li><strong>Çap (Kalibre):</strong> Karşılıklı iki set arasındaki mesafedir (Örn: 9x19 mm fişekte '9' mermi çapıdır).</li>
        <li><strong>Tırnak & Çıkarıcı:</strong> Boş kovanı tırnak fişek yatağından geri çeker, çıkarıcıya çarparak kovan atma boşluğundan dışarı fırlatır.</li>
        <li><strong>İğne ve Horoz:</strong> Tetiğin çekilmesiyle horoz iğneye vurur, iğne kapsülü patlatarak barutu ateşler.</li>
      </ul>

      <h3>📌 2. Atış Emniyet Talimatı</h3>
      <ul>
        <li>Silah her zaman dolu kabul edilir.</li>
        <li>Namlu asla vurulmak istenmeyen bir canlıya doğrultulmaz.</li>
        <li>Tetiğe basıldığı halde patlama olmazsa (Hangfire), namlu hedeften ayrılmadan en az <strong>10 - 15 saniye</strong> beklenir.</li>
      </ul>
    `
  },

  // 6. MODÜL: GÜVENLİK SİSTEMLERİ VE X-RAY
  {
    id: "xray",
    title: "6. Güvenlik Sistem ve Cihazları (X-Ray & Dedektörler)",
    icon: "📡",
    summary: "X-Ray bagaj kontrol cihazı renk skalaları, el ve kapı metal dedektörleri, CCTV kamera sistemleri.",
    content: `
      <h3>📌 1. X-Ray Cihazı Renk Skalası (Madde Ayrımı)</h3>
      <ul>
        <li><strong>Turuncu / Kahverengi (Atom No < 10):</strong> Organik maddeler. <em>Plastik patlayıcılar (C4, RDX), uyuşturucular, kağıt, ahşap, gıda, kumaş.</em></li>
        <li><strong>Yeşil / Açık Mavi (Atom No 10 - 18):</strong> Karışık ve inorganik maddeler. <em>Cam, alüminyum, silikon, porselen, kemik, tuz.</em></li>
        <li><strong>Mavi / Koyu Mavi / Siyah (Atom No > 18):</strong> Ağır Metaller. <em>Demir, çelik, kurşun, altın, tabancalar, bıçaklar, mermi çekirdekleri.</em></li>
        <li><strong>Simsiyah (Işın Geçirmez):</strong> X-Ray ışınının delemediği kurşun veya çok kalın metallerdir (Fiziki elle arama yapılır).</li>
      </ul>

      <h3>📌 2. Metal Dedektörleri</h3>
      <ul>
        <li>El dedektörü kişinin vücuduna <strong>2.5 - 5 cm mesafeden paralel</strong> olarak gezdirilir.</li>
        <li>El dedektörü hamilelere ve kalp pili taşıyan kişilere doğrudan tutulmaz.</li>
      </ul>
    `
  },

  // 7. MODÜL: KALABALIK YÖNETİMİ
  {
    id: "kalabalik",
    title: "7. Kalabalık Yönetimi ve Toplumsal Olaylar",
    icon: "👥",
    summary: "Kalabalık türleri, grup dinamikleri, panik psikolojisi, çember/hat düzenleri ve cop kullanımı.",
    content: `
      <h3>📌 1. Kalabalık ve Grup Ayrımı</h3>
      <ul>
        <li><strong>Kalabalık:</strong> Ortak bir amaç için geçici olarak toplanmış, lideri ve teşkilatı olmayan rastgele topluluktur.</li>
        <li><strong>Grup:</strong> Ortak bir amacı, hiyerarşik lideri, kuralları ve sürekliliği olan örgütlü topluluktur.</li>
        <li><strong>Panik:</strong> Ani tehlike karşısında mantıklı düşünmenin kaybolduğu, bulaşıcı ve kontrolsüz kaçış hareketidir.</li>
      </ul>

      <h3>📌 2. Cop Kullanım Esasları</h3>
      <p>Cop saldırıyı savuşturmak amacıyla kol ve bacakların etli kısımlarına vurulur. Baş, boyun, omurga ve kasık bölgesine vurulması hayati tehlike doğurduğundan kesinlikle yasaktır.</p>
    `
  },

  // 8. MODÜL: KİŞİ KORUMA (VIP)
  {
    id: "vip",
    title: "8. Kişi Koruma (VIP) Hizmetleri",
    icon: "👮",
    summary: "Koruma halkaları (İç, Orta, Dış), yaya düzenleri (V, Kama, Kutu), öncü istihbarat ve suikast safhaları.",
    content: `
      <h3>📌 1. Koruma Çemberleri (Halkaları)</h3>
      <ul>
        <li><strong>İç Çember:</strong> Korunan kişinin (VIP) hemen yanında bulunan, tehlike anında bedenini siper eden yakın koruma personeli.</li>
        <li><strong>Orta Çember:</strong> Bina girişleri, kapılar, koridorlar ve asansör kontrolünü sağlayan güvenlik halkası.</li>
        <li><strong>Dış Çember:</strong> Tesisin çevre duvarları ve ana cadde/sokak girişlerini kontrol eden en geniş halkadır.</li>
      </ul>
    `
  },

  // 9. MODÜL: UYUŞTURUCU MADDE BİLGİSİ
  {
    id: "uyusturucu",
    title: "9. Uyuşturucu Madde Bilgisi ve Narkotik",
    icon: "💊",
    summary: "Doğal ve sentetik uyuşturucular, esrar, kokain, eroin, metamfetamin, bonzai ve bağımlılık belirtileri.",
    content: `
      <h3>📌 1. Doğal ve Sentetik Uyuşturucular</h3>
      <ul>
        <li><strong>Doğal Uyuşturucular:</strong> Kenevir bitkisinden <strong>Esrar</strong> (yanarken karakteristik tatlımsı kuru ot kokusu yayar), Haşhaş bitkisinden <strong>Afyon, Morfin ve Eroin</strong>.</li>
        <li><strong>Sentetik Uyuşturucular:</strong> Kimyasal yollarla üretilen <strong>Metamfetamin, Bonzai (Sentetik Kannabinoid), Ecstasy, Captagon</strong>.</li>
      </ul>
    `
  },

  // 10. MODÜL: ETKİLİ İLETİŞİM
  {
    id: "iletisim",
    title: "10. Etkili İletişim ve Kişilerarası İlişkiler",
    icon: "💬",
    summary: "İletişim süreci (Kaynak, Mesaj, Kanal, Alıcı, Dönüt), empati, sempati, beden dili ve öfke kontrolü.",
    content: `
      <h3>📌 1. İletişimin Temel Öğeleri</h3>
      <ul>
        <li><strong>Kaynak (Gönderici) ➔ Mesaj ➔ Kanal ➔ Alıcı ➔ Dönüt (Geri Bildirim)</strong>.</li>
        <li><strong>Dönüt (Geri Bildirim):</strong> Alıcının göndericiye verdiği tepkidir; iletişimin hedefine ulaşıp ulaşmadığını gösterir.</li>
        <li><strong>Empati:</strong> Kişinin kendisini karşısındakinin yerine koyarak onun duygularını ve düşüncelerini doğru anlama becerisidir.</li>
      </ul>
    `
  },

  // 11. MODÜL: GENEL KOLLUKLA İLİŞKİLER
  {
    id: "kaan",
    title: "11. Genel Kollukla İlişkiler & KAAN Projesi",
    icon: "🤝",
    summary: "Genel kolluk (Polis/Jandarma) hiyerarşisi, KAAN entegrasyon projesi ve olay yeri teslim usulleri.",
    content: `
      <h3>📌 1. KAAN (Genel Kolluk - Özel Güvenlik İşbirliği) Projesi</h3>
      <p>Özel güvenlik görevlileri ile Polis ve Jandarma arasındaki işbirliğini, hızlı bilgi paylaşımını ve suç önleme etkinliğini artırmak amacıyla Emniyet Genel Müdürlüğü tarafından yürütülen dijital entegrasyon projesidir.</p>
      <p>Özel güvenlik personeli görev alanında adli bir suç meydana geldiğinde derhal genel kolluğa haber vermek, suç delillerini korumak ve genel kolluk geldiğinde sevk ve idareyi genel kolluğa devretmekle yükümlüdür.</p>
    `
  }
];
