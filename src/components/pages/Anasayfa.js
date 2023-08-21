import React from 'react'

import Footer from '../anasayfa/Footer'
import { Link } from 'react-router-dom'
import '../anasayfa/App.css'
import Card from 'react-bootstrap/Card';




const cards = [
  { id: 1,image: 'visnebrownie.jpg',title: 'Vişneli Brownie', content: 'Çikolatalı ve vişnenin mükkemmel uyumu', },
  { id: 2,image: 'ApplePie.jpg', title: 'Elmalı Turta', content: 'Elma severler için mükkemmel bir tarif'  },
  { id: 3,image: 'chestnut.jpg', title: 'Kestaneli Pasta', content: 'Mükemmel lezzetli kestaneli pasta' },
  { id: 4,image: 'ahud.jpg', title: 'Ahududu Cheesecake',  content: 'En sevilen cheesecake"lerden bi tanesi' },
  { id: 5,image: 'cadi.jpg', title: 'Cadılar Bayramı kek topları', content: 'Hayranlık verici  derecede ürkütücü olan  Halloween Cake Pops'  },
  { id: 6,image: 'roll.jpg', title: 'Tarçınlı Rulo', content: 'Sıcak bir şekilde servis edilen mükemmel bir tatlı', },
  { id: 7,image: 'pistachio.jpg', title: 'Paris Brest', content: 'Bu muhteşem tatlıyı mutlaka denemelisiniz' , },
  { id: 8,image: 'Lasagna.jpg', title: 'Lazanya', content: 'Misafirlerinize hazırlayacağınız en mükemmel tarif', },
  { id: 9,image: 'margarita.jpg', title: 'Mavi Margarita', content: 'Mavi Margarita mükkemmel lezzetli tarifi'},
  { id: 10,image: 'humus.webp', title: 'Humus', content: 'En güzel mezelerden humus tarifi',  },
  { id: 11,image: 'FourCheese.webp', title: 'Dört Peynirli Pizza',content: 'En güzel pizzalardan biri olan 4 peynirli pizza' },
  { id: 12,image: 'martiniapp.jpeg', title: 'Elmalı Martini',content: 'Mükemmel lezzetli AppleMartini yaz aylarının vazgeçilmezi' },
 
  
];

const Anasayfa = () => {
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
    <div>

 

   <div className='container'>
   
      {cards.map(card => (
            <div key={card.id}>
   <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" className='img' src={card.image} />
      <Card.Body>
        <Card.Title className='py-2 text-2xl font-bold'>{card.title}</Card.Title>
        <Card.Text className='pb-7 '>
        {card.content}
        </Card.Text>
        <Link className='button' to={`/detail/${card.id}`}> Detay</Link>
        
      </Card.Body>
    </Card>
    </div>

    ))}
   
    
          
          
        
     
    </div>

   <br/>
   <br/>
       
       
    </div>
        <Footer/>
       
    </>
  )
}

export default Anasayfa