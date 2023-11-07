import React from 'react'

const ValidateName = () => {
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

export default ValidateName