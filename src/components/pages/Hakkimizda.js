import React from 'react'
import { Link } from 'react-router-dom'


const Hakkimizda = () => {
  return (
    
    <>


<div className='bg-pink-200 py-3 px-5 '>
         <nav className='items-center '>
        <ul className='flex text-bold items p-3 gap-12 justify-left '>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          
          <li>
            <Link to="/hakkimizda">Hakkimizda</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>

        
        </ul>
      </nav>
      
      
    </div>
    <div className='bg-pink-200 py-9 px-10' >
      <div className='hakkimizda'>

Beyo Kiti Kitchen, sevdiklerini mutlu etmek için mutfağa girenlerin, tek başına olsa bile yaptığı 
yemeğin lezzetli olduğunu görünce kendiyle gurur duyanların, 
mutfağı daha fazla keşfetmesini sağlayan bir bilgiyi dört bir yana paylaşmak isteyenlerin,
  yeri geldiğinde kendine daha fazla vakit ayırmak için pratik tarif peşinde koşanların,
  herkesin bütçesine göre bir tarif olduğunu bilenlerin, 
  yemek yaparken günlük hayatın zorluklarını bir çırpıda unutanların ve bunların 
  hepsinden mutlak keyif alanların sitesi...
Her gün milyonlarca kişiye dokunan Beyo Kiti Kitchen, web sitesi,
mobil uygulaması ve sosyal medya hesaplarıyla "Bugün ne pişirsem?" diye düşünenlerin 
de hafta sonu kahvaltıya nereye gitsek diyenlerin de "Pilav lapa olursa ne yapılır?
" diye çözüm arayanların da hayatını kolaylaştırıyor. Hepsi denenmiş,
adım adım fotoğraflı ve stüdyoda şeflerimiz tarafından üretilmiş videolu tarifleriyle mutfakta
kötü sürprizlere yer bırakmıyor.
Siz de   Beyo Kiti Kitchen'a üye olarak beğendiğiniz, "Ben bunu yaparım" dediğiniz tarifleri, 
tarif defterinize ekleyebilir, dilediğinizde onlara tek dokunuşla ulaşabilir,s
dahası şahane tariflerinizi bizimle paylaşıp adınızla Yemek.com'da yayınlanmasını sağlayabilir,
en güzeli de mutfağınıza giren bir tarifimiz olursa bizlere haber verebilirsiniz.
Ayrıca "Mutlaka gitmem lazım" dediğiniz mekan önerilerini, öğretici, ilham verici içerikleri,
tarif listelerini favorilerinize ekleyebilir, beğendiğiniz yazarları takip edebilir, 
tarifleri puanlayabilir ve yorum bırakabilirsiniz.
Her gün onlarca yenisi eklenen onbinlerce tarifimizle, 
yemek yapmaktan ve yemek yemekten keyif alan herkese soframızda yer var.

İyi ki varsınız, hoş geldiniz!


<br/>

<br/>

<br/>

<Link to="/"><img  className='hak-img ' src='logom.png'  /> </Link> 

</div>
    </div>
    </>
  )
}

export default Hakkimizda