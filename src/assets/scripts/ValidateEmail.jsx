import React from 'react'

const ValidateEmail = () => {
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

export default ValidateEmail