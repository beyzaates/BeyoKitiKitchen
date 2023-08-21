import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form } from 'formik';


const Iletisim = () => {
  return (
    <>
    <div>


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

    </div>
    <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message:'',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='form'>
        <div > 
        <label htmlFor="firstName">Ad:</label>
        <Field id="firstName" name="firstName" placeholder="Adınızı Giriniz" />
        </div>

        <div>
        <label htmlFor="lastName">Soyad:</label>
        <Field id="lastName" name="lastName" placeholder="Soyadınızı Giriniz" />
        </div>
 
        <div>
        <label htmlFor="email">Email:</label>
        <Field
          id="email"
          name="email"
          placeholder="Email giriniz..."
          type="email"
        />
         </div>

         <div>

         <label htmlFor="message">Mesaj:</label>
         
        <textarea
          className='mesaj'
          id="message"
          name="message"
          placeholder="Mesaj giriniz..."
          type="mesaj"
        />
         </div>

        <div><button className='butis' type="submit">Gönder</button></div>
      </Form>
    </Formik>
    </div>
  
    </>
  )
}

export default Iletisim