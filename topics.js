/**
 * ÖGG Akademisi — %100 Doğrulanmış ve Güncel EGM Müfredat Ders Notları
 * 5188 Sayılı Kanun, Sağlık Bakanlığı İlkyardım, EGM Yangın & Silah Bilgisi Standartları
 */

const OGG_TOPICS = [
  {
    id: "hukuk",
    title: "1. Özel Güvenlik Hukuku ve Kişi Hakları (5188 Sayılı Kanun)",
    icon: "⚖️",
    summary: "5188 Sayılı Kanun, ÖGG yetkileri, yasaklar, kimlik kartı iptal şartları, orantılı güç ve arama sınırları.",
    content: `
      <h3>📌 1. Özel Güvenlik Görevlisinin Temel Yetkileri (5188 SK. Madde 7 ve 9)</h3>
      <div class="lecture-highlight">
        Özel güvenlik görevlileri yetkilerini <strong>yalnızca görev alanında ve görev süresi içerisinde</strong>, kimlik kartları yakalarında takılı vaziyetteyken kullanabilirler.
      </div>
      <ul>
        <li><strong>Kimlik Sorma:</strong> Görev alanında ve görev saatlerinde şüpheli veya alana giren kişilere kimlik sorma yetkisi vardır.</li>
        <li><strong>Kontrol ve Arama:</strong> Kişileri duyarlı kapıdan (kapı metal dedektörü) geçirme, eşyaları X-Ray veya dedektörle kontrol etme; spor müsabakası, konser gibi halka açık etkinliklerde genel kolluk gözetiminde elle arama yapma.</li>
        <li><strong>Yakalama Yetkisi (CMK m.90 ve 5188 SK.):</strong>
          <br>• Suçüstü halinde herkes gibi yakalama,
          <br>• Suç delillerinin kaybolmasını önlemek amacıyla,
          <br>• Haklarında yakalama emri veya mahkumiyet kararı bulunanları,
          <br>• Vücudu veya sağlığı bakımından mevcut bir tehlikeden korunması amacıyla (sarhoşluk, baygınlık vb.).
        </li>
        <li><strong>Emanete Alma / Muhafaza:</strong> Suç teşkil eden veya delil olabilecek eşyayı genel kolluğa teslim etmek üzere tutanakla emanete alma.</li>
        <li><strong>Zor Kullanma (TCK m.25 & TBK m.64):</strong> Meşru savunma, zorunluluk hali ve orantılılık ilkesi çerçevesinde bedeni kuvvet, kelepçe ve cop kullanma.</li>
        <li><strong>Konuta / İşyerine Girme:</strong> Yangın, deprem, sel gibi doğal afetlerde ve imdat çağrısı durumlarında konut ve işyerlerine girme.</li>
      </ul>

      <h3>⚠️ 2. Özel Güvenliğe Kesinlikle Yasak Olan Haller</h3>
      <ul>
        <li><strong>Grev Yasağı:</strong> Özel güvenlik personeli kesinlikle greve katılamaz (Sendikaya üye olabilirler fakat grev yapamazlar).</li>
        <li><strong>Başka İşte Çalıştırılma Yasağı:</strong> Özel güvenlik personeli temizlik, çay, taşıma gibi güvenlik dışı işlerde çalıştırılamaz.</li>
        <li><strong>Adli Arama ve İfade Alma Yasağı:</strong> Özel güvenlik görevlilerinin hakim/savcı kararı olmadan ev, araç arama, soyarak üst arama veya şüpheliden ifade alma yetkisi YOKTUR.</li>
        <li><strong>Kimlik Kartı İptali:</strong> Kimlik kartını başkasına kullandıran görevlinin kimlik kartı Valilikçe iptal edilir ve bir daha asla ÖGG olamaz.</li>
      </ul>
    `
  },
  {
    id: "tedbirler",
    title: "2. Güvenlik Tedbirleri & Devriye Hizmetleri",
    icon: "🛡️",
    summary: "Devriye türleri, olay yeri koruma, tutanak tanzimi, kontrol noktası organizasyonu.",
    content: `
      <h3>📌 1. Devriye Yöntemleri ve Çeşitleri</h3>
      <ul>
        <li><strong>Rastgele (Rastlantısal) Devriye:</strong> Belirli zaman ve rota kısıtı olmadan tamamen habersiz yapılan, suçluların plan yapmasını imkansız kılan en etkili devriye yöntemidir.</li>
        <li><strong>Dairesel Devriye:</strong> Merkezden çevreye veya dış sınırdan merkeze doğru iç içe daireler çizilerek yapılan devriye.</li>
        <li><strong>Geri Dönüşlü Devriye:</strong> Güzergahta ilerlerken beklenmedik bir noktada geriye dönerek şüphelileri yanıltan devriye.</li>
        <li><strong>Çizgisel (Hat) Devriyesi:</strong> Boru hattı, sınır teli veya tren yolu boyunca sabit bir eksende yapılan devriye.</li>
        <li><strong>Planlı (Rutin) Devriye:</strong> Önceden belirlenen saat ve güzergah planına göre yapılan devriye.</li>
      </ul>

      <h3>📌 2. Tutanak Tanzim Kuralları</h3>
      <ul>
        <li>Tutanaklar mutlaka en az <strong>iki görevli memur/şahit</strong> tarafından imzalanmalıdır.</li>
        <li>Tutanakta: <em>Başlık, Giriş (Olayın tarihi, saati, yeri), Metin (Olayın gelişimi), Sonuç ve İmzalar</em> bölümleri yer almalıdır.</li>
        <li>Tutanak üzerine sonradan silme, kazıma, karalama yapılamaz; yanlış yazılan kelimenin üzeri tek çizgiyle çizilip yanına doğrusu yazılarak paraflanır.</li>
      </ul>

      <h3>📌 3. Olay Yeri Koruma</h3>
      <ul>
        <li>Olay yerine derhal güvenlik şeridi çekilir.</li>
        <li>Kovan, silah, kan, parmak izi gibi maddi suç delillerine asla çıplak elle temas edilmez.</li>
        <li>Hava şartlarına karşı (yağmur, rüzgar) delillerin üzeri temas etmeyecek şekilde steril kutu veya kapla örtülür.</li>
      </ul>
    `
  },
  {
    id: "yangin",
    title: "3. Yangın Güvenliği ve Söndürme Teknikleri (TS EN 2 Standartları)",
    icon: "🔥",
    summary: "Yangın sınıfları (A, B, C, D, F), söndürme maddeleri, yangın üçgeni ve tahliye kuralları.",
    content: `
      <h3>📌 1. TS EN 2 Standartlarında Yangın Sınıfları</h3>
      <ul>
        <li><strong>A Sınıfı (Katı Maddeler):</strong> Ahşap, kömür, kumaş, kağıt, plastik. <em>Söndürücü: Su, KKT, Köpük.</em></li>
        <li><strong>B Sınıfı (Sıvı Maddeler):</strong> Benzin, mazot, tiner, alkol, vernik, boya. <em>Söndürücü: Köpük (Foam), Kuru Kimyevi Toz (KKT), CO2 (Karbondioksit). (ASLA SU KULLANILMAZ!).</em></li>
        <li><strong>C Sınıfı (Gaz Maddeler):</strong> LPG, metan, bütan, doğalgaz, asetilen. <em>Söndürücü: KKT, Halon alternatifleri. (İlk kural: Gaz vanası ana hattan kapatılmalıdır).</em></li>
        <li><strong>D Sınıfı (Hafif Metaller):</strong> Magnezyum, alüminyum, titanyum, lityum. <em>Söndürücü: Özel D Tipi Kuru Toz. (Su ve köpük patlamaya sebep olur).</em></li>
        <li><strong>F Sınıfı (Mutfak Yağları):</strong> Fritöz, bitkisel/hayvansal kızartma yağları. <em>Söndürücü: Islak Kimyasal (Wet Chemical). (Su sıkılırsa alev parlaması ve yayılma olur).</em></li>
      </ul>

      <h3>📌 2. Yangın Söndürme Cihazı Kullanım Kuralı (PASS Kuralı)</h3>
      <ul>
        <li><strong>P (Pull):</strong> Pimi çek.</li>
        <li><strong>A (Aim):</strong> Hortumun ucunu alevin dibine doğrult.</li>
        <li><strong>S (Squeeze):</strong> Tetiği sık.</li>
        <li><strong>S (Sweep):</strong> Alevin tabanını sağa-sola süpürerek tara.</li>
      </ul>
    `
  },
  {
    id: "ilkyardim",
    title: "4. Temel İlkyardım Bilgisi & Hayat Kurtarma (AHA/ERC Standartları)",
    icon: "🚑",
    summary: "Temel Yaşam Desteği (30:2 CPR), Heimlich Manevrası, Rentek Manevrası, Koma/Şok Pozisyonları.",
    content: `
      <h3>📌 1. Temel Yaşam Desteği (CPR - Kalp Masajı)</h3>
      <ul>
        <li><strong>Döngü Oranı:</strong> Tüm yaş gruplarında (Yetişkin, Çocuk, Bebek) <strong>30 Kalp Masajı : 2 Suni Solunum (30:2)</strong> uygulanır.</li>
        <li><strong>Hız ve Ritim:</strong> Dakikada <strong>100 - 120 bası</strong> hızında uygulanır.</li>
        <li><strong>Bası Derinliği:</strong> Yetişkinde 5 cm, çocukta 5 cm, bebekte 4 cm göğüs kafesi çökecek şekilde bası yapılır.</li>
        <li><strong>Bilinç ve Solunum Kontrolü:</strong> Yetişkinde omuzlara dokunularak 'İyi misiniz?', solunum ise <strong>'Bak-Dinle-Hisset'</strong> yöntemiyle en fazla <strong>10 saniye</strong> süreyle kontrol edilir.</li>
      </ul>

      <h3>📌 2. Kritik İlkyardım Manevraları</h3>
      <ul>
        <li><strong>Heimlich Manevrası (Tam Tıkanma):</strong> Nefes alamayan, ellerini boynuna götüren bilinci açık kişide göbek çukuru ile göğüs kemiği arasına yumruk yapılıp içeri-yukarı bası uygulanır.</li>
        <li><strong>Rentek Manevrası:</strong> Kaza yapmış araçtan bilinci kapalı kazazedeyi <em>omurilik zedelenmesini önleyerek</em> boyun-omurga düzleminde çıkarmak için kullanılır.</li>
        <li><strong>Koma Pozisyonu:</strong> Bilinci kapalı ama solunumu ve nabzı olan kazazedeye dilin soluk borusunu tıkamaması ve kusmuk aspirasyonunu önlemek için verilen <strong>yarı yüzükoyun yan yatış</strong> pozisyonudur.</li>
        <li><strong>Şok Pozisyonu:</strong> Beyne kan akışını artırmak için bacakların <strong>30 cm</strong> yukarı kaldırılmasıdır.</li>
      </ul>
    `
  },
  {
    id: "silah",
    title: "5. Silah Bilgisi, Balistik ve Atış Eğitimi",
    icon: "🎯",
    summary: "Silahın parçaları, namlu, yiv-set, çap, ateşleme mekanizması, kovan atma arızaları ve atış emniyeti.",
    content: `
      <h3>📌 1. Silahın Ana Parçaları ve Çalışma Prensipleri</h3>
      <ul>
        <li><strong>Namlu:</strong> Mermi çekirdeğine yön veren, içinde yiv ve set bulunan içi boş borudur.</li>
        <li><strong>Yiv ve Set:</strong> Namlu içindeki girintilere <strong>YİV</strong>, çıkıntılara <strong>SET</strong> denir. Mermiye dönme hareketi vererek menzilini, hızını ve hedefe dik gitmesini sağlar.</li>
        <li><strong>Çap (Kalibre):</strong> Karşılıklı iki set arasındaki mesafedir (Örn: 9x19 mm'de '9' mermi çapıdır).</li>
        <li><strong>Tırnak & Çıkarıcı:</strong> Patlayan boş kovanı tırnak fişek yatağından geri çeker, çıkarıcıya çarparak kovan atma boşluğundan dışarı fırlatır.</li>
        <li><strong>İğne ve Horoz:</strong> Tetiğin çekilmesiyle horoz iğneye çarpar, iğne fişeğin arkasındaki kapsülü patlatarak barutu ateşler.</li>
      </ul>

      <h3>📌 2. Atış Emniyet Talimatı</h3>
      <ul>
        <li>Her silah daima dolu kabul edilir.</li>
        <li>Hedefe doğrultulana kadar parmak tetik korkuluğu içinde TUTULMAZ.</li>
        <li>Tetik düşürüldüğü halde patlama olmazsa (Hangfire), namlu hedeften ayrılmadan en az <strong>10 - 15 saniye</strong> beklenir.</li>
      </ul>
    `
  },
  {
    id: "xray",
    title: "6. Güvenlik Sistem ve Cihazları (X-Ray & Detektörler)",
    icon: "📡",
    summary: "X-Ray bagaj kontrol cihazı renk skalaları, atom numaraları, kapı metal dedektörleri ve CCTV.",
    content: `
      <h3>📌 1. X-Ray Cihazı Renk Skalası (Madde Ayırımı)</h3>
      <ul>
        <li><strong>Turuncu / Kahverengi (Atom No < 10):</strong> Organik maddeler. <em>Plastik patlayıcılar (C4, RDX), uyuşturucular, gıda, kumaş, deri, kağıt, ahşap.</em></li>
        <li><strong>Yeşil / Açık Mavi (Atom No 10 - 18):</strong> Karışık / İnorganik maddeler. <em>Alüminyum, cam, silikon, porselen, kemik, tuz.</em></li>
        <li><strong>Mavi / Koyu Mavi / Siyah (Atom No > 18):</strong> Ağır Metaller. <em>Demir, çelik, kurşun, altın, gümüş, tabancalar, bıçaklar, mermi çekirdekleri.</em></li>
        <li><strong>Simsiyah (Işın Geçirmez):</strong> Kurşun tabaka veya X-Ray ışınının delemediği çok kalın metaller. (Manuel fiziki arama yapılmalıdır).</li>
      </ul>
    `
  },
  {
    id: "iletisim",
    title: "7. Etkili İletişim ve Kişilerarası İlişkiler",
    icon: "💬",
    summary: "İletişim süreci (Kaynak, Mesaj, Kanal, Alıcı, Dönüt), empati, sempati, beden dili ve çatışma yönetimi.",
    content: `
      <h3>📌 1. İletişimin Temel Öğeleri</h3>
      <ul>
        <li><strong>Kaynak (Gönderici):</strong> İletişimi başlatan kişi.</li>
        <li><strong>Mesaj (İleti):</strong> Aktarılan bilgi, duygu veya düşünce.</li>
        <li><strong>Kanal:</strong> Mesajın iletildiği yol (ses, yazı, beden dili).</li>
        <li><strong>Alıcı (Hedef):</strong> Mesajı alan ve yorumlayan kişi.</li>
        <li><strong>Dönüt (Geri Bildirim):</strong> Alıcının mesaja verdiği tepki (İletişimin başarısını belirler).</li>
      </ul>
      <p><strong>Empati:</strong> Kişinin kendisini karşısındakinin yerine koyarak onun duygularını anlama becerisidir.</p>
    `
  },
  {
    id: "kalabalik",
    title: "8. Kalabalık Yönetimi ve Toplumsal Olaylar",
    icon: "👥",
    summary: "Kalabalık türleri, panik anında insan psikolojisi, çember ve hat düzenleri, cop kullanımı.",
    content: `
      <h3>📌 1. Kalabalık ve Grup Ayrımı</h3>
      <ul>
        <li><strong>Kalabalık:</strong> Ortak bir amaç için geçici olarak bir araya gelmiş, lideri ve teşkilatı olmayan topluluktur (Örn: Otobüs durağında bekleyenler, kaza izleyenler).</li>
        <li><strong>Grup:</strong> Ortak bir amacı, hiyerarşik lideri, kuralları ve sürekliliği olan örgütlü topluluktur.</li>
        <li><strong>Panik:</strong> Ani tehlike karşısında mantıklı düşüncenin kaybolduğu, bulaşıcı ve kontrolsüz kaçış hareketidir.</li>
      </ul>
    `
  },
  {
    id: "vip",
    title: "9. Kişi Koruma (VIP) Taktikleri",
    icon: "👮",
    summary: "Koruma halkaları (İç, Orta, Dış), yaya koruma düzenleri (V, Kama, Kutu), öncü istihbarat ve suikast safhaları.",
    content: `
      <h3>📌 1. Koruma Çemberleri (Halkaları)</h3>
      <ul>
        <li><strong>İç Çember (En Dar Halka):</strong> Korunan kişinin (VIP) hemen yanında bulunan, bedenini siper eden yakın koruma personeli.</li>
        <li><strong>Orta Çember:</strong> Bina girişi, asansörler, koridorlar ve toplantı salonu çevresinde güvenliği sağlayan halka.</li>
        <li><strong>Dış Çember:</strong> Tesisin ana giriş kapıları, çevre duvarları ve sokak başlarını kontrol eden en geniş güvenlik halkasıdır.</li>
      </ul>
    `
  },
  {
    id: "uyusturucu",
    title: "10. Uyuşturucu Madde Bilgisi ve Narkotik",
    icon: "💊",
    summary: "Doğal ve sentetik uyuşturucular, esrar, kokain, eroin, metamfetamin, bonzai ve belirtileri.",
    content: `
      <h3>📌 1. Uyuşturucu Sınıfları</h3>
      <ul>
        <li><strong>Doğal Uyuşturucular:</strong> Kenevir bitkisinden elde edilen <em>Esrar (Marihuana)</em>, Haşhaş sütünden elde edilen <em>Afyon, Morfin ve Eroin</em>.</li>
        <li><strong>Sentetikler:</strong> <em>Metamfetamin, Ecstasy, Captagon, Bonzai (Sentetik Kannabinoid)</em>.</li>
        <li><strong>Belirtiler:</strong> Göz bebeklerinde büyüme/küçülme, aşırı terleme, saldırganlık, tatlımsı yanık ot kokusu (esrar kullanımında).</li>
      </ul>
    `
  },
  {
    id: "kolluk",
    title: "11. Genel Kollukla İlişkiler & KAAN Uygulaması",
    icon: "🤝",
    summary: "Genel kolluk (Polis/Jandarma) ile özel güvenlik işbirliği, KAAN projesi, emir-komuta zinciri.",
    content: `
      <h3>📌 1. KAAN (Genel Kolluk - Özel Güvenlik İşbirliği ve Entegrasyonu) Projesi</h3>
      <p>Özel güvenlik görevlileri ile Polis ve Jandarma arasındaki koordinasyonu, hızlı bilgi akışını ve suç önleme kapasitesini artırmak amacıyla EGM tarafından kurulan dijital entegrasyon sistemidir.</p>
      <p>Özel güvenlik personeli, görev alanında adli bir suç meydana geldiğinde derhal genel kolluğa haber vermek ve olay yerini muhafaza etmekle yükümlüdür.</p>
    `
  }
];
