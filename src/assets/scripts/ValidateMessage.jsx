import React from 'react'

const ValidateMessage = () => {
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

export default ValidateMessage