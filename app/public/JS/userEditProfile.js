

const w = window;
const d = document;
const qs = (element) => {
    return document.querySelector(element);
   };

w.addEventListener("load", () => {
   

    let $inputName = qs("#name"),
        $nameErrors = qs("#nameErrors"),
        $inputLastname = qs("#lastname"),
        $lastnameErrors = qs("#lastnameErrors"),
        $email = qs("#email"),
        $emailErrors = qs("#emailErrors"),
        $pass = qs("#pass"),
        $passErrors = qs("#passErrors"),
        $pass2 = qs("#pass2"),
        $pass2Errors = qs("#passErrors")
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,//dato alfabetico
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,//dato mail
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;//dato contraseña

        $inputName.addEventListener("blur", () => {
            switch (true) {
                case !$inputName.value.trim():
                    $nameErrors.innerText = "El nombre es obligatorio";
                    $inputName.classList.add("is-invalid"); 
                    break;
                case $inputName.value.length < 3:
                    $nameErrors.innerText = "El nombre tiene que tener mas de 2 caracteres";
                    $inputName.classList.add("is-invalid"); 
                    break;
                case !regExAlpha.test($inputName.value):
                    $nameErrors.innerText = "Nombre invalido";
                    $inputName.classList.add("is-invalid");
                    break;
                default:
                    $inputName.classList.remove("is-invalid");
                    $inputName.classList.add("is-valid");
                    $nameErrors.innerText = "";
                    break;
            }
        })
        $inputLastname.addEventListener('blur', () => {
            switch (true) {
                case !$inputLastname.value.trim():
                    $lastnameErrors.innerText = 'El campo apellido es obligatorio'
                    $inputLastname.classList.add('is-invalid')
                    break;
                    case $inputLastname.value.length < 3:
                    $lastnameErrors.innerText = "El apellido tiene que tener mas de 2 caracteres";
                    $inputLastname.classList.add("is-invalid"); 
                    break;
                case !regExAlpha.test($inputLastname.value):
                    $lastnameErrors.innerText = 'Debes ingresar un apellido válido'
                    $inputLastname.classList.add('is-invalid')  
                    break; 
                default:
                    $inputLastname.classList.remove('is-invalid');
                    $inputLastname.classList.add('is-valid');
                    $lastnameErrors.innerText = ''
                    break;
            }
        })
        $email.addEventListener('blur', () => {
            switch (true) {
                case !$email.value.trim():
                    $emailErrors.innerText = 'El campo email es obligatorio';
                    $email.classList.add('is-invalid')
                    break;
                case !regExEmail.test($email.value):
                    $emailErrors.innerText = 'Debe ingresar un email válido';
                    $email.classList.add('is-invalid')
                    break
                default:
                    $email.classList.remove('is-invalid');
                    $email.classList.add('is-valid');
                    $emailErrors.innerText = ''
                    break;
            }
        })
        $pass.addEventListener('blur', () => {
            switch (true) {
                case !$pass.value.trim():
                    $passErrors.innerText = 'El campo contraseña es obligatorio';
                    $pass.classList.add('is-invalid')
                    break;
                case !regExPass.test($pass.value):
                    $passErrors.innerText = 'La contraseña debe tener: entre 8 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                    $pass.classList.add('is-invalid')
                    break
                default:
                    $pass.classList.remove('is-invalid');
                    $pass.classList.add('is-valid');
                    $passErrors.innerText = ''
                    break;
            }
        })
    $pass2.addEventListener('blur', () => {
            switch (true) {
                case !$pass2.value.trim():
                    $pass2Errors.innerText = 'Debes reingresar la contraseña';
                    $pass2.classList.add('is-invalid')
                    break;
                case $pass2.value != $pass.value:
                    $pass2Errors.innerText = 'Las contraseñas no coinciden';
                    $pass2.classList.add('is-invalid')
                    break;
                default:
                    $pass2.classList.remove('is-invalid');
                    $pass2.classList.add('is-valid');
                    $pass2Errors.innerText = ''
                    break;
            }
        })
})