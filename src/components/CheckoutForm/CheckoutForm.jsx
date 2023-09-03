import React, { useState } from 'react'
import invoice from '../../assets/cuenta.png'
import './CheckoutForm.css'

const CheckoutForm = ({onConfirm}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const handleConfirm = (event) => {

    event.preventDefault();

    const userData = {
      name,
      phone,
      email
    
    };
    onConfirm(userData);
    
  };


  return (
    < >
<article  className="card">
  <div className="image-container">
    <picture>
      <img src={invoice} alt="" className='imgCheck' />
    </picture>
  </div>

  <section className="containerCheck">
    <form onSubmit={handleConfirm}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={name} onChange={({target})=> setName(target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" value={phone} onChange={({target})=> setPhone(target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo:</label>
        <input type="email" id="correo" name="correo" value={email} onChange={({target})=> setEmail(target.value)} />
      </div>

      <div>
      <button type='submit' className='buttonCheck'>Crear orden</button>
      </div>
    </form>
  </section>


</article>



    
    </>
  )
}

export default CheckoutForm