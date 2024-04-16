
let Button = document.getElementById('submit-button');
let firstNameInput = document.getElementById('first-name-input')
let firstNameError = document.getElementById('first-name-error');
let emptyFirstName = document.getElementById('empty-first-name');

let password = document.getElementById('password')
let passwordError = document.getElementById('password-error');
let emptyPassword = document.getElementById('empty-password');

let eye = document.querySelector('.fa-eye');

eye.addEventListener('click',function(){
  password.type = 'text';
})


function first(){
  if(firstNameInput.value == '' ){
    emptyFirstName.classList.remove('hide');  
  }else if(firstNameInput.value == Number){
    firstNameError.classList.remove('hide');
  }
}
function passwords(){
  if(password.value == '' ){
    emptyPassword.classList.remove('hide');  
  }else if(password.value != Number){
    passwordError.classList.remove('hide');
  }else if(password.value.length !== 8 ){
    passwordError.classList.remove('hide');

  }
}



Button.addEventListener('click', function(e){
  e.preventDefault();
  first()
  passwords()

})

