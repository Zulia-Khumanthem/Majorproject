import React, {useState} from 'react'
import './ContactUs.css'
import axios from 'axios';
export default function ContactUs() {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        axios.post('http://localhost:3003/form',{firstname, lastname, email, phone, message})
        .then(result => alert("Submitted", result))
        .catch(err => console.log(err))
    }
  return (
    <div className='container' id='ContactUs'>
      <div className="box-1">
      <h1>Contact <span>Us</span></h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="forms">
                <div className="form1">
                    <div className="form">
                        <label htmlFor="">First Name</label>
                        <input type="text" name='firstname' onChange={(e) =>setFirstname(e.target.value)}autoComplete='off'required />
                    </div>
                    <div className="form">
                        <label htmlFor="">Last Name</label>
                        <input type="text" onChange={(e) =>setLastname(e.target.value)} name='lastname' autoComplete='off'required />
                    </div>
                </div>
                <div className="form2">
                    <div className="form">
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={(e) =>setEmail(e.target.value)} name='email' autoComplete='off' required />
                    </div>
                    <div className="form">
                        <label htmlFor="">Phone</label>
                        <input type="text" onChange={(e) =>setPhone(e.target.value)} name='phone' autoComplete='off' required />
                    </div>
                </div>
                <label htmlFor="">Your message</label>
                <textarea onChange={(e) =>setMessage(e.target.value)} name='message' autoComplete='off' id="" cols="47" rows="5" ></textarea>
            </div>
            <div className="buttons">
                <div className="btn1">
                    <button type='submit'>Submit</button>
                </div>
                <div className="btn2">
                    <button type='reset'>Reset</button>
                </div>
            </div>
        </form>
      </div>

      <div className="box-2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7243.220029723453!2d93.93753654308398!3d24.808804111851824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927abba7f4ddd%3A0xb07673c3fdf9fc40!2sKangla%2C%20Imphal%2C%20Manipur%20795001!5e0!3m2!1sen!2sin!4v1708535684317!5m2!1sen!2sin" allowfullscreen="" loading="lazy" title="hello" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
