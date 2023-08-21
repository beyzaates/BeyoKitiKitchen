// Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cards = [
  
  {
    id: 1,
    title: "Vişneli Brownie",
    malzemeler: ["2, 5 paket bitter çikolata(160-180 gr)","200 gr tereyağı","1 su bardağı şeker","3 yumurta","1 vanilya","1 su bardağı un","1 çay bardağı çekirdeği çıkarılmış vişne"
    ],
    detail: "Öncelikle tereyağını tavaya alıp eritiyoruz ve ocağı kapatıyoruz.Parçaladığımız çikolataları içine atıp eriyene kadar kaşık yardımıyla karıştırıyoruz.Sonra derin bir kapta şeker ve yumurtayı köpük olana kadar çırpıyoruz.Eriyen çikolatayı da bu kaba ekleyip karıştırıyoruz.En son un ve vanilyayı da ekleyip pürüzsüz kıvam alana kadar karıştırıp yağlı kağıt serili 20×20 bir kalıba döküyoruz.Üzerine vişneleri dizip 170 derecede üzeri çatlayana kadar pişiriyoruz.Piştikten sonra fırından alıp yarım saat kadar dinlendiriyoruz. Deneyeceklere şimdiden afiyet olsun. ",
    image: '../visnebrownie.jpg',
           
},
  { id: 2,image: '../ApplePie.jpg', title: 'Elmalı Turta',
  malzemeler:["100 gram tereyağı","40 gram süt","40 gram sıvı yağ","1/2 su bardağı pudra şekeri","1 adet yumurta","1 çay kaşığı kabartma tozu","1/2 su bardağı nişasta","2-3 su bardağı un","4 adet elma", "6 yemek kaşığı toz şeker","1 kase ceviz içi", "1/2 tatlı kaşığı tarçın" ] ,
  detail:"Hamuru için gerekli tüm malzemeleri karıştırıp kulak memesi kıvamında bir hamur elde edelim ve hamuru üstü kapalı şekilde dolapta 15 dakika dinlendirelim.Hamur dinlenirken iç harcımızı hazırlayalım. Bunun için elmaların kabuklarını soyup rendeleyelim.Küçük bir tavada şekeri elmaları yaklaşık 5-6 dakika kavuralım. Ocaktan alıp tarçını ceviz içini ekleyelim. Soğumaya bırakalım.  Dolaptan çıkardığımız hamurun yarısından fazlasını tabanını tereyağı ile yağladığımız orta boy tart kalıbının tabanına yayalım.Elimizle bastırarak her yerinin kalıba yapışmasını sağlayalım. Üzerine elma harcımızın tamamını yerleştirelim. kalan hamurla da üzerine dilediğimiz şekilleri yapalım. 180 derecede üzeri hafif kızarana kadar pişirin."  },
 
  { id: 3,image: '../chestnut.jpg', title: 'Kestaneli Pasta',
  malzemeler:["500 gram kestane","1,5 su bardağı süt", "4-5 yemek kaşığı toz şeker", "40 gram bitter çikolata","4 adet yumurta"," 1 su bardağı şeker","2 yemek kaşığı kakao","1 su bardağı un","Yarım paket kabartma tozu","1 poşet sade krem şanti","Yarım poşet kakaolu krem şanti","2 adet muz" ],
   detail:"lk olarak kestaneli kremayı yapmaya başlayın. Öncelikle kestaneleri orta kısımlarında kesikler olacak şekilde kesin. Sonrasında bir tencereye sıvı yağ koyun. Yağ iyice kızınca kestaneleri içine atın ve 5-6 dakika boyunca kızartın. Adım 2 Kızarmış kestaneleri ayıklamak için 1 bardak su ilave ederek yumuşayana kadar haşlayın. Sonrasında bir blender yardımı ile ya da mutfak robotu kullanarak püre gibi olacak şekilde ezin. Adım 3 Kestaneler püre haline geldikten sonra henüz sıcakken içine çikolatayı ve toz şekeri ekleyerek karıştırın. Karışımın tamamen pürüzsüz bir hale gelmesi için sıcak süt dökerek karıştırmaya devam edin. Eğer vaktiniz var ise bir gün boyunca, yok ise bir süre buzdolabında kıvamını bulması için bekletin.Adım 4 Hafif derin bir kabın içine yumurtaları kırın ve toz şekeri ilave edin. Rengi değişip iyice kabarıncaya kadar mikser yardımı ile çırpın. Unu, kakaoyu ve kabartma tozunu eleyin ve yumurta ile şekerin olduğu kabın içerisine ekleyerek bir güzel karıştırın. Adım 5Yuvarlak bir fırın tepsisini yağlayın, biraz da un serpin ve unun her yere eşit ve az miktarda dağılmasına özen gösterin. Sonrasında tepsinin içine hazırlamış olduğunuz hamuru ekleyin. Fırını 200 dereceye ayarlayın ve hamuru pişirmeye başlayın. Hamur kızarmaya başladığında fırını 175 dereceye düşürün. Pandispanya hamuru iyice kızardığında kürdan ile pişip pişmediğini kontrol edin. Keke batırdığınız kürdan temiz çıkıyorsa pandispanya pişmiş olacaktır. Keki fırından alıp ters çevirerek kaptan çıkartın.Adım 6Pandispanya ılık hale gelince iki yuvarlağa bölün. İki parçayı birden süt ile ıslatın. Pandispanyanın alt parçasının üstüne hazırlamış olduğunuz kestaneli kremayı sürün. Üstüne yuvarlak bir şekilde dilimlediğiniz muzları dizin. Sonrasında kekin diğer parçasını da üstüne kapatın.Adım 7 Hazır krem şanti tozunun sade olanını 1 su bardağı süt ile mikser yardımıyla çırpın. Krem şantinin yarısını ikinci katını koyduğunuz pastanın üstüne sürün. Aynı zamanda kakaolu krem şantiyi de 1 çay bardağı kadar su ile çırpın. Sade krem şantiden kalanı sıkma pompası ile pastanın üzerine şeritler oluşacak şekilde sıkın. Boşluklu yerlere de kakaolu krem şantiyi aynı şekilde sıkın. Kırık şekildeki kestane şekerlerini ya da bütün kestane şekerlerini pastanın muhtelif yerlerine dizin."  },
  
  
   { id: 4,image: '../ahud.jpg', title: 'Ahududu Cheesecake',
   malzemeler:["750 gram Labne","90 gram Tereyağı","315 gram toz şeker" ,"3 adet yumurta","30 gram un", "90 gram Krema", "Tabanı için","225 gram petibör bisküvi","40 gram teretağı", "Sosu için","500 gram ahdududu","150 gram toz şeker", "3-4 damla limon suyu" ] ,
  detail:"Tereyağı ve şekeri homojen hale gelene kadar mikser makinesinde palet uçla çırpın.2 Ardından yumurtayı tek tek ekleyerek karıştırın. 3Labneyi ve kremayı da ekleyin ve çırpmaya devam edin. 4 Son olarak unu ekleyin, karıştırın. 5Tabanı için; tereyağını eritin. Bisküvileri robotta toz haline getirerek çekin. Eritilmiş tereyağı ile bisküvileri harmanlayın. 6Sos için; Ahududuyu tencereye koyun. Üzerine şekeri ekleyin ve ocağa alın. Ara sıra üzerinde biriken köpüğü kevgir yardımıyla temizleyin. Kaynadıktan sonra 3-4 damla limon ekleyin ve kısık ateşte kıvam alana kadar pişirin.7 26 cm’lik tabanlı çemberi sprey yağ ile yağlayın. Eğer sprey yağınız yoksa sıvı yağı fırça yardımı ile kalıbın her yerini ince şekilde yağlayın, fazla yağını süzdürün. Eğer tabanlı çember kullanmayacaksanız, kullanacağınız kalıbın kenarlarını yağlayın, yağlı kağıdın üstüne çemberi oturtun, kenarlarını kıvırın. Kullanacağınız çemberin altını streç folyo ile kaplayın.8 Hazırladığınız taban malzemesini kalıba koyun ve üzerine baskı uygulayarak sıkıştırın.9Üzerine ahududu sosun bir kısmını ekleyin. Sosu eklerken kenarlarına çok taşırmamaya dikkat edin.10Ardından hazırladığınız harcı süzerek kalıba ilave edin. Son olarak ahududu sosun kalanını kaşık yardımıyla harcın üzerine ekleyerek şekiller verin.11Kalıbı çok az su konulmuş fırın tepsisine yerleştirin benmari usulü önceden ısıtılmış 90 derecede fırında 1,30 saat pişirin.12)Pişen cheesecake'i fırından çıkarın, 6-8 saat buzdolabında dinlendirerek servis edin."   },
  
  { id: 5,image: '../cadi.jpg', title: 'Cadılar Bayramı kek topları',
  malzemeler:["eritilmiş çikolatalı kek tabanı","yemek renklendiricisi","Kakoa","Süt","Ekşi şeker","Şeker eritici","Şeker gözü"] ,
  detail:"1. Çikolatalı şekerleme pastasını paketteki talimatlara göre pişirin ve tamamen soğutun. Soğuyan keki ufalayın.2. Kremayı yapın ve mikserde 1 su bardağı bırakın. Kakao ve 1 yemek kaşığı sütü ekleyin. İyice birleşene kadar çırpın. Ufalanmış kek ve sprinkles ile birleştirin. Kepçe ve 1 inçlik toplara yuvarlayın. Balmumu veya parşömen kağıdı kaplı bir fırın tepsisine yerleştirin ve 20 dakika dondurun.3. Şekeri veya çikolatayı paketteki talimatlara göre eritin. Bir lolipop çubuğunun ucunu erimiş şekere batırın ve bir kek topunun yarısına kadar sokun.4. Kek topunu kaplamak için eritilmiş şekere batırın ve fazlalığı gidermek için kasenin kenarlarına hafifçe vurun. Çubuğun ucunu bir köpük bloğa yerleştirin. Kalan kek topları ile tekrarlayın."  },
  
  
  { id: 6,image: '../roll.jpg', title: 'Tarçınlı Rulo',
  malzemeler:["1 su bardağı süt","1/2 su bardağı toz şeker","1 paket kurumaya","4 su bardağı un","2 adet yumurta","3 yemek kaşığı oda sıcaklığında tereyağı","içi için","1 su bardağı toz şeker", "2 yemek kaşığı tarçın","3 yemek kaşığı oda sıcaklığında tereyağı","Üzeri için","4 yemek kaşığı labne peyniri", "3 yemek kaşığı oda sıcaklığında teretağı","1 paket vanilin","6 yemek kaşığı pudra şekeri"], 
  detail:"Hamur için ılık süt, şeker ve mayayı karıştırın. Karışıma yumurtaları ve tereyağını da ekleyin. Islak karışıma unu azar azar yedirin ve hamuru bir kap içerisinde 15 dakika yoğurun. Hamurun üzerini kapatarak ılık bir yerde bir saat kadar mayalayın.Mayalanan hamuru yağlanmış tezgahta dikdörtgen şeklinde açın. Hamurun içine yumuşak tereyağını sürün, üzerine şeker ve tarçını da serpin.Hamuru kalın rulo şeklinde sarın ve 2-3 parmak genişliğinde kesin. Hamur parçalarını aralarında boşluk kalacak şekilde fırın tepsisine yerleştirin. Tepsinin üzerini bir bezle örtün ve yirmi dakika ikinci kez mayalayın. Mayalanan hamuru 180 derecelik fırında 20-25 dakika üzeri kızarana kadar pişirin. Çöreğin üzeri için labne, tereyağı ,vanilin ve pudra şekerini çırpın.Tarçınlı çörek hafif ılınınca kremayı üzerine sürerek hazır hale getirin.Afiyet olsun." },

  
  { id: 7,image: '../pistachio.jpg', title: 'Paris Brest',
  malzemeler:["Pralin İçin:","3/4 su bardağı toz şeker (100 gram)", "3 yemek kaşığı su(30 ml)","1su bardağı fıstık (100 gram)", "Choux Hamuru İçin:", "1/2 su bardağı süt (100 ml)", "1/2 su bardağı su (100 ml)", "75 gram tereyağı", "1tatlı kaşığıtoz şeker(5 gram)","1çay kaşığıtuz(2 gram)","1su bardağı un (110 gram)", "4 adet orta boy yumurta", "Hamurun Üstü İçin:",  "1 adet yumurta", "4 yemek kaşığı file badem", "Krema İçin:","500 mililitre süt (2,5 su bardağı)",  "4 adet orta boy yumurta sarısı", "2/3 su bardağı  toz şeker (100 gram)", "3 yemek kaşığı nişasta (45 gram)",  "2 yemek kaşığı un", "1 çimdik tuz", "1 yemek kaşığı tereyağı", "1 paket vanilin", "100 gram oda sıcaklığında tereyağı", "185 gram pralin(pişirilen)","Üzeri İçin:", "1 yemek kaşığı pudra şekeri"],
 detail:"Pralin yapılışı: Fıstıklar tavada kavrulur. Diğer yandan toz şeker ve su tencereye alınır. Orta ateşte karıştırmadan karamel rengine dönmesi sağlanır. Karamele dönünce fındık eklenir. Hızlıca karıştırılıp pişirme kağıdı üzerine dökülür. Tamamen soğuyunca üzerine pişirme kağıdı kapatılır. Merdane ile vurulur. Ufalanan parçalar blender haznesinde sıvılaşana kadar çekilir. Buzdolabında bekletilir.Hamurun yapılışı: Süt, su, tereyağı, şeker ve tuz tencereye alınır. Tereyağı eriyip su kaynayınca un eklenir. Ocaktan alınıp hızlıca karıştırılır. Hamur toparlanınca 1-2 dakika daha karıştırılarak pişirilir. Hamur başka bir kaba aktarılır. Hamur ılınınca birer birer yumurta eklenerek mikserle çırpılır. Her yumurtayı hamura karıştıktan sonra diğeri eklenir. Sıvı olmayan ama kendiliğinden yavaşça akan bir hamur elde edilir.Sıkma torbasına alınıp yarım saat buzdolabında dinlendirilir. Dinlenen hamur, yağlı kağıt serili fırın tepsisine 7 cm'lik çember olacak şekilde aralıklı sıkılır.Üzerine fırçayla çırpılmış yumurta sürülür. File bademler yerleştirilir.Önceden 180 derece alt üst ayarda ısıtılan fırında 30-35 dakika kızarana kadar pişirilir (Fırın kapağı kesinlikle açılmaz). Pişince kürdanla delikler açılarak içinin de kuruması sağlanır.Kremanın yapılışı: Süt ve toz şekerin yarısı karıştırılarak ısıtılmaya başlanır. Geniş bir kasede yumurta sarısı ve kalan toz şeker çırpılır.Nişasta ve un eklenir, çırpılır. Isınan sütten bu karışıma azar azar eklenerek sürekli karıştırılır. Tencereye aktarılıp kısık ateşte koyulaşana kadar pişirilir. Tereyağı ve vanilin eklenip karıştırılır. Başka kaba alıp üzerine değecek şekilde streç filmle kapatılıp soğumaya bırakılır.Geniş bir kasede, oda sıcaklığında yumuşayan 100 gram tereyağı çırpılarak kabartılır. Buna soğuyan krema ve pralin kaşık kaşık eklenerek çırpılır. Sıkma torbasına alınır. Buzdolabında dinlendirilir.Birleştirme için: Tamamen soğuyan hamur enine kesilir. Tabana krema sıkılır. Üst kısmı kapatılır. Pudra şekeri serpilerek 2 saat buzdolabında dinlendirildikten sonra servis edilir. Afiyet olsun" },
  
  
  { id: 8,image: '../Lasagna.jpg', title: 'Lazanya', 
  malzemeler:["12 yaprak lazanya", "İç harcı için;",
    "400 gr kıyma",
    "3 yemek kaşığı sıvı yağ",
    "2 adet kuru soğan",
    "2 adet domates",
    "2 yemek kaşığı domates salçası",
    "2 diş sarımsak",
    "1 tatlı kaşığı tuz",
    "1,5 su bardağı sıcak su (300 ml)",
    "Beşamel sosu için;",
    
    "2 yemek kaşığı tereyağı",
    "3 su bardağı süt (600 ml)",
    "Yarım su bardağı un",
    "1 çay kaşığı tuz",
    "Yarım çay kaşığı karabiber",
   "Üzeri için;",
     "1 su bardağı kaşar peyniri rendesi"],
  detail: "İç harcı için geniş bir tavaya sıvı yağı alalım.Küçük küçük doğradığımız soğanları ilave edelim, biraz kavurduktan sonra üzerine kıymayı ilave ederek kavurmaya devam edelim.Kıymalar yeterince kavrulunca doğradığımız sarımsakları ve kabuğunu soyup doğradığımız domatesleri de ilave edelim ve orta ateşte 5 dakika kadar daha soteleyelim.Üzerine salçayı ve tuzu ekleyerek kavuralım. Ardından suyunu ekleyelim ve iç harcımız suyunu çekene kadar kısık ateşte pişmeye bırakalım. Beşamel sosu için tereyağı ve unu küçük bir tencereye alalım ve orta ateşte kavurun.Üzerine sütü azar azar ekleyelim ve topaklanmaması için sürekli çırparak karıştıralım.Kaynamaya başlayınca tuz ve karabiberi ekleyelim. Muhallebi kıvamına gelince ocaktan alalım. Kıymalı sos ve beşamel sos hazırlandıktan sonra ısıya dayanıklı bir fırın kabına önce biraz iç harçtan yayalım. Üzerine çok az beşamel sostan gezdirdikten sonra lazanyaları dizelim. Lazanyaların üzerine biraz kıymalı iç harç ve ardından beşamel sos dökerek güzelce yayalım. Üzerine tekrar lazanya yapraklarından yerleştirelim ve tekrar iç hraç ve beşamel sostan gezdirelim. Bu işlemi malzemeleriniz bitene kadar devam ettirelim.En üstteki lazanyalara tekrar iç harç ve beşamel sos dökelim ve kaşar peyniri rendesi serpelim.Lazanyalarımızı önceden ısıtılmış 190 derece fırında yaklaşık 20-25 dakika pişirelim.Üzeri tamamen kızarınca fırından alalım ve 15 dakika kadar dinlendirelim. Ardından lazanyamızı dilimleyerek servis edelim. Afiyet olsun.Not: Yapmadan önce paketin üzerini okumanızı tavsiye ederim, çünkü bazı lazanyaların haşlanması gerekebilir, eğer haşlanması gerekiyorsa orada belirtilecektir." },


  { id: 9,image: '../margarita.jpg', title: 'Mavi Margarita',
  malzemeler:["tekila", "triple sec", "blue curaçao", "limon suyu"  ],
  detail:"Kokteyl çalkalayıcıyı yarıya kadar buzla doldurun.Ekle 1 ¼ ons tekila, 1 ¼ ons blue curaçao.Kapak çalkalayıcı ve 20 saniye sallayın.Süzün ve dökün bir margarita bardağına. Limon kabuğu veya elma dilimi ile ve tadını çıkarın"   },


  { id: 10,image: '../humus.webp', title: 'Humus',
  malzemeler:["Nohutları Islatmak İçin:",
    "2 su bardağı nohut(250 g)",
    "1 tatlı kaşığı karbonat(arzuya göre)",
    "1/2 su bardağı tahin (90-100 ml)",
    "1/2 çay bardağı zeytinyağı",
     "2 adet limon", "2 diş sarımsak",
    "1,5 çay kaşığı tuz",  "1 tatlı kaşığıkimyon","1-2 yemek kaşığı su(kıvamına göre)",
     "Üzeri İçin:", "1 yemek kaşığı zeytinyağı" ,"1 tutam maydanoz", "1tutam nar taneleri", "1 tutam toz kırmızı biber", "1tutam kimyon"],
      detail:"Nohutları 1 gece veya en az 4-5 saat öncesinden ıslatın. Sindirimi kolaylaştırması ve daha kolay pişmesi için suyuna 1 tatlı kaşığı karbonat ekleyin. Ertesi gün suyunu süzün ve tekrar sudan geçirin.Nohutları tencereye alıp üzerine su ekleyin ve pişmeye bırakın. Normal bir çelik tencerede 45 dakika kadar pişecektir. Nohutlar iyice yumuşadıktan sonra ocaktan alın.Haşlanan ve suyu süzülmüş nohutları mutfak robotuna alın. Üzerine tahin, zeytinyağı, limon suyu, sarımsak ve tuzu ekleyin. Pürüzsüz bir kıvamda oluncaya kadar robottan geçirin.Son aşamada kimyonu ekleyin ve tekrar robottan geçirin. Eğer mutfak robotu zorlanıyorsa, azar azar su ilave ederek dilediğiniz kıvama ulaşmasını sağlayın.Ardından servis tabağına alarak tatlı kaşığıyla ortasına bir yuvarlak çizin.Son olarak zeytinyağını gezdirip, üzerine kıyılmış maydanoz, toz kırmızı biber ve kimyon serpin. Afiyet olsun!"  },


  { id: 11,image: '../FourCheese.webp', title: 'Dört Peynirli Pizza',
  malzemeler:[<ul >
   <li> Hamuru için:</li><li>1 su bardağı ılık su</li>
   <li> 2.5 su bardağı un</li>
    <li> 1 yemek kaşığı zeytinyağı</li>
    <li> 1/2 tatlı kaşığı bal</li>
    <li> 1 tatlı kaşığı kuru maya</li>
    <li>  1 çay kaşığı tuz</li>
    <li>  Sosu için: </li><li>1 tatlı kaşığı domates salçası</li>
    <li> 3 adet domates</li>
    <li> 1 tatlı kaşığı acı sos</li>
    <li> 1 diş sarımsak</li>
    <li> 2 dal kekik</li>
    <li> 1 yemek kaşığı su</li>
    <li> Üzeri için:</li><li> 100 gram rokfor peyniri</li><li> 150 gram mozzarella peyniri</li>
    <li> 100 gram kaşar peyniri</li>
    <li> 80 gram parmesan peyniri</li>
    </ul>], 
    
    detail:"Bir kabın içerisine kuru maya, bal ve suyu koyup karıştırın. Mayanın aktifleşmesi için 10 dakika bekleyin.Un ve tuzu eleyerek yoğurma kabına alın. Unun ortasını çukur şeklinde açın. Bu kısma mayalı karışımı ve zeytinyağını ekleyin. Unu ortadan dışa doğru olacak şekilde karıştırın. Kıvam almaya başladığında ele yapışmayacak bir hamur elde edin.Hamur kabının üzerini streç film ile örterek 30 dakika dinlendirin.Pizza sosu için; Domateslerin kabuklarını güzelce soyun. Domates ve sarımsağı rendeleyin.Rendelenmiş domates ve sarımsağı 3-4 dakika tavada kavurun.Üzerine acı sos, taze kekik dalları, domates salçası ve çok az su ekleyerek birkaç dakika daha pişirin.Hazırladığınız sosu ocaktan alarak soğuması için kenarda bekletin.Mayalanan hamuru 3 eşit parçaya ayırın. Unlanmış mutfak tezgahında bezeleri elinizle yuvarlak olacak şekilde açın.Fırın tepsisinin tabanını yağlayın veya yağlı kağıt serin. Açtığınız hamurları tepsilere yerleştirin.Pizzaların üzerine önce rendelenmiş mozzarella peyniri, ardından ufalanmış rokfor peyniri, daha sonra rendelenmiş parmesan ve rendelenmiş kaşar peyniri ekleyin.Dilerseniz, pizzayı dörde bölerek her parçasına tek peynir de kullanabilirsiniz.Hazırladığınız pizzaları önceden ısıtılmış 250 dereceli fırında 15-20 dakika kadar pişirin. Pişen pizzaların üzerine maydanoz serpiştirin, dilimleyerek servis edin. Afiyet olsun."  },



  { id: 12,image: '../martiniapp.jpeg', title: 'Elmalı Martini',
  malzemeler:["buz","vodka","elma suyu", "bal veya agave şurubu", "elma veya limon dilimi","ekşi elma likörü"]
   ,detail:"Kokteyl çalkalayıcıyı yarıya kadar buzla doldurun.Ekle 1 ¼ ons votka, 1 ¼ ons elma suyu, 1 ons ekşi elma likörü ve ½ ons basit şurup.Kapak çalkalayıcı ve 20 saniye sallayın.Süzün ve dökün bir martini bardağına. Garnitür limon kabuğu veya elma dilimi ile ve tadını çıkarı" },


 
  
];

const Detail = () => {
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return <div>Detay bulunamadı.</div>;
  }

  return (
    <div className='flex gap-8'>
      <div className='w-[2000px] h-[2000px]  ' ><img src={card.image}  /></div>
      <div>
      <h2 className='text-4xl font-bold'>{card.title}</h2>
      
      <p>{card.content}</p>
      <br/>
      <h1  className='py-2 text-3xl font-bold'>Malzemeler:</h1><p className='text-2xl'> {card.malzemeler}  </p>
      <br/>
      <h1 className='py-2 text-3xl font-bold'>Tarif:</h1><p className='text-xl'>{card.detail} </p></div>
     
      
      {/* Kartın detaylarını göstermek için gerekli HTML elemanlarını ekleyin */}
    </div>
  );
};

export default Detail;
