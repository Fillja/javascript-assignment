import { useState } from 'react'

const FormPart = () => {

  //Validerings-funktioner med Regex
  const validateName = (value) => {
      if(/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]{2,}$/.test(value))
        return false
      return true
  }

  const validateEmail = (value) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value))
      return false
    return true
  }

  const validateMessage = (value) => {
    if(/^.{2,450}$/.test(value))
      return false
    return true
  }

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  //Extra useState för att bekräfta meddelande efter API har svarat
  const [messageConfirm, setMessageConfirm] = useState('');

  //Validering vid förändring i input
  const handleChange = (e) => {
    
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        setNameError(validateName(e.target.value))
      break;
      case 'email':
        setEmail(e.target.value)
        setEmailError(validateEmail(e.target.value))
      break;
      case 'message':
        setMessage(e.target.value)
        setMessageError(validateMessage(e.target.value))
      break;
    }
  }

  //Validering vid submit av formuläret
  const validate = async (e) => {
    e.preventDefault()

    for (let element of e.target) {
      switch (element.name) {
        case 'name':
          setName(element.value)
          setNameError(validateName(element.value))
        break;
        case 'email':
          setEmail(element.value)
          setEmailError(validateEmail(element.value))
        break;
        case 'message':
          setMessage(element.value)
          setMessageError(validateMessage(element.value))
        break;
      }
    }
 
    try {
      if(!nameError && !emailError && !messageError){
        console.log('skicka till api')

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
          setMessageConfirm('Your message has been sent. Thank you for contacting Crito!')
        }
        else {
          setMessageConfirm('Your form is invalid!')
        }
  
      }
    } catch (error){
      console.log(error)
    }
  }

  
  return (
    <form onSubmit={validate} noValidate>
      {/* Labels blir error-message med röd färg om error är true */}
      <label htmlFor="form-name" className={nameError ? 'error': ''}>Name{nameError? ' has to be at least 2 characters long.' : ''}</label><br></br>
      <input 
        id="form-name" 
        type="text" 
        name="name" 
        placeholder="Name*" 
        value={name} 
        onChange={(e) => handleChange(e)}/><br></br>

      <label htmlFor="form-email" className={emailError ? 'error': ''}>Email{emailError? ' has to be valid.' : ''}</label><br></br>
      <input 
        id="form-email" 
        type="email" 
        name="email" 
        placeholder="Email*" 
        value={email} 
        onChange={(e) => handleChange(e)}/>
      <br></br>

      <label htmlFor="form-message" className={messageError ? 'error': ''}>Your message{messageError? ' has to be between 2 and 450 characters long.' : ''}</label><br></br>
      <textarea 
        id="form-message" 
        type="text" 
        name="message" 
        placeholder="Your Message*" 
        value={message} 
        onChange={(e) => handleChange(e)}/>
      <br></br>

      <button type="submit" className="btn-yellow">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
      {/* Span som bekräftar success/fail från API */}
      <span>{messageConfirm}</span>
    </form>
  )
}

export default FormPart