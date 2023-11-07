import { useState } from 'react'
// import ValidateName from '@scripts/ValidateName';
// import ValidateEmail from '@scripts/ValidateEmail';
// import ValidateMessage from '@scripts/ValidateMessage';

const FormPart = () => {


  const validateName = () => {
    let formName = document.getElementById('form-name')

    if(/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]{2,}$/.test(name)){
      formName.classList.add('success');
      formName.classList.remove('error');
      document.getElementById('name-error').innerHTML = '';
      
      return true
    }    
    else {
      formName.classList.add('error');
      formName.classList.remove('success');
      document.getElementById('name-error').innerHTML = errorMessages.nameError

      return false
    }
  }

  const validateEmail = () => {
    let formEmail = document.getElementById('form-email')

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)){
      formEmail.classList.add('success');
      formEmail.classList.remove('error');
      document.getElementById('email-error').innerHTML = '';

      return true
    }    
    else {
      formEmail.classList.add('error');
      formEmail.classList.remove('success');
      document.getElementById('email-error').innerHTML = errorMessages.emailError

      return false
    }
  }

  const validateMessage = () => {
    let formMessage = document.getElementById('form-message')
    
    if(/^.{2,450}$/.test(message)){
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      document.getElementById('message-error').innerHTML = '';

      return true
    }    
    else {
      formMessage.classList.add('error');
      formMessage.classList.remove('success');
      document.getElementById('message-error').innerHTML = errorMessages.messageError

      return false
    }
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const errorMessages = {
    nameError: 'You must provide a valid name of at least 2 characters.', 
    emailError: 'You must provide a valid email.', 
    messageError: 'Your message has to be at least 2 characters and a maximum of 450 characters.'
  }

  const validate = async () => {

    validateName(name)
    validateEmail(email)
    validateMessage(message)

    try {
      if(validateName() && validateEmail() && validateMessage() === true){

        const json = JSON.stringify({
          name: name,
          email: email,
          message: message
        })
  
        const res = await fetch("https://win23-assignment.azurewebsites.net/api/contactform", {
          method: "post",
          headers : {
            "Content-Type": "application/json"
          },
          body: json
        })
  
        if(res.status === 200){
          document.getElementById('message-confirm').innerHTML = "Thank you for contacting Crito, your message has been sent."
          document.getElementById('message-confirm').classList.add('api-success')
        }
        else {
          document.getElementById('message-confirm').innerHTML = "Something went wrong, please try again."
          document.getElementById('message-confirm').classList.add('api-error')
        }
  
      }
    } catch (error){
      console.log(error)
    }
  }

  // const charCounter = () => {
  //   const counter = document.getElementById('char-counter');
  
  //   if(message < 2){
  //     counter.innerHTML = ' ';
  //   }
  //   else{
  //     counter.innerHTML = `${message.length}/450 characters.`;
  //   }
  
  //   if(message.length > 450){
  //     counter.classList.add('error-span')
  //   }
  //   else{
  //     counter.classList.remove('error-span')
  //   }

  //   onChangeCapture={() => {charCounter()}}
  // }
  
  return (
    <form onSubmit={() => {event.preventDefault()}} noValidate>
      <label htmlFor="form-name">Name</label><br></br>
      <input id="form-name" type="text" placeholder="Name*" value={name} onBlur={() => {validateName()}} onChange={(e) => setName(e.target.value)}/><br></br>
      <span className="error-span" id="name-error"></span>

      <label htmlFor="form-email">Email</label><br></br>
      <input id="form-email" type="email" placeholder="Email*" value={email} onBlur={() => {validateEmail()}} onChange={(e) => setEmail(e.target.value)}/><br></br>
      <span className="error-span" id="email-error"></span>

      <label htmlFor="form-message">Your Message</label><br></br>
      <textarea id="form-message" type="text" placeholder="Your Message*" value={message} onBlur={() => {validateMessage()}} onChange={(e) => setMessage(e.target.value)}/><br></br>
      {/* <span id="char-counter"></span> */}
      <span className="error-span" id="message-error"></span>

      <button type="submit" className="btn-yellow" onClick={() => {validate()}}>Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
      <span id="message-confirm"></span>
    </form>
  )
}

export default FormPart