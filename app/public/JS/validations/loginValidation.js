const qs = (element) => {
    return document.querySelector(element);
}

window.addEventListener("load", () => {

    let $inputEmail = qs("#email"),
    $emailError = qs("#emailError"),
    $iconEmail = qs("#iconEmail"),
    $inputpass = qs("#password"),
    $passError = qs("#passwordError"),
    $iconPass = qs("#iconPass"),
    $inputCheck =qs("#check"),
    $form = qs ("#loginForm"),
    $loginError = qs("#loginError")
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    /* regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; */
    regExPass = /.{6,12}$/;

    $inputEmail.addEventListener("blur", () => {
        $inputEmail.classList.remove('is-valid');
        $iconEmail.classList.remove("estadoEmail-correcto" , "fa-check-circle");
        $iconEmail.classList.add("fa-times-circle");
        switch (true){
            case !$inputEmail.value.trim():
                $emailError.innerText = 'El campo es obligatorio';
                $inputEmail.classList.add('is-invalid');
                $iconEmail.classList.add("estadoEmail-incorrecto");
                break;
            case ! regExEmail.test($inputEmail.value):
                $emailError.innerText = 'Debe ingresar un mail válido';
                $inputEmail.classList.add('is-invalid');
                $iconEmail.classList.add("estadoEmail-incorrecto");
                break;
            default:
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $iconEmail.classList.remove("estadoEmail-incorrecto" , "fa-times-circle");
                $iconEmail.classList.add("estadoEmail-correcto", "fa-check-circle");
                $emailError.innerText = '';
                break;
        }
    })

    $inputpass.addEventListener("blur", () => {
        $inputpass.classList.remove('is-valid');
        $iconPass.classList.remove("estadoEmail-correcto" , "fa-check-circle");
        $iconPass.classList.add("fa-times-circle");
        switch (true){
            case !$inputpass.value.trim():
                $passError.innerText = 'El campo es obligatorio';
                $inputpass.classList.add('is-invalid');
                $iconPass.classList.add("estadoEmail-incorrecto");
                break;
            case !regExPass.test($inputpass.value):
                $passError.innerText = 'Debe ingresar un mail válido';
                $inputpass.classList.add('is-invalid');
                $iconPass.classList.add("estadoEmail-incorrecto");
                break;
            default:
                $inputpass.classList.remove('is-invalid');
                $inputpass.classList.add('is-valid');
                $iconPass.classList.remove("estadoEmail-incorrecto" , "fa-times-circle");
                $iconPass.classList.add("estadoEmail-correcto", "fa-check-circle");
                $passError.innerText = '';
                break;
        }
    })
    $form.addEventListener("submit", (event) => {
        event.preventDefault()
        const FORM_ELEMENTS = event.target.elements;

        for (let i = 0; i < FORM_ELEMENTS.length - 1; i++) {
            const element = FORM_ELEMENTS[i];
            
            if (element.value === "" && element.type !== "checkbox" && element.type !== "submit") {
                console.log(element)
                element.classList.add("is-invalid")
            }
            
        }

        const elementErrors = document.querySelectorAll(".is-invalid");
        const ERRORES = elementErrors.length > 0;
        if (ERRORES) {
            $loginError.innerText = "Hay errores en el proceso del logueado";
        }else{
            $form.submit()
        }
    })

})