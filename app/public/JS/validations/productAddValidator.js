let qs = (elemento) => {
    return document.querySelector(elemento);
}

window.addEventListener('load', () => {

    let $inputName = qs('#name');
    let $inputBrand = qs('#brand');
    let $inputCategory = qs('#category');
    let $inputPrice = qs('#price');
    let $inputDiscount = qs('#discount');
    let $inputDescription = qs('#description');
    let $form = qs('#form');
    let $imgPreview = qs('#img-preview');
    
    let $nameErrors = qs('#nameErrors');
    let $brandErrors = qs('#brandErrors');
    let $categoryErrors = qs('#categoryErrors');
    let $priceErrors = qs('#priceErrors');
    let $discountErrors = qs('#discountErrors');
    let $descriptionErrors = qs('#descriptionErrors');

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
    let regExDNI = /^[0-9]{7,8}$/;
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener("blur", () => {

        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerText = "El nombre es obligatorio";
                $inputName.classList.add("is-invalid")
                break;
            case $inputName.value.length < 3:
                 $nameErrors.innerText = 'El nombre debe tener entre 3 y 20 caracteres';
                 $inputName.classList.add("is-invalid")
                break;

            case $inputName.value.length > 20:
                    $nameErrors.innerText = 'El nombre debe tener entre 3 y 20 caracteres';
                    $inputName.classList.add("is-invalid");
                   break;    

            default:
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerText = "";
                break;
        }
    })

    $inputBrand.addEventListener('blur', () => {
        switch (true) {
            case !$inputBrand.value.trim():
            $brandErrors.innerText = 'Debes indicar la marca'
            $inputBrand.classList.add("is-invalid");
            break;

            default:
                $inputBrand.classList.remove("is-invalid");
                $inputBrand.classList.add("is-valid");
                $brandErrors.innerText = "";
                break;
        }
    })

    $inputCategory.addEventListener('blur', () => {
       if (!$inputCategory.value.trim()) {
        $categoryErrors.innerHTML = 'Debes indicar la categoría';
        $inputCategory.classList.add('is-invalid');
       } else {
        $inputCategory.classList.remove('is-invalid');
        $inputCategory.classList.add('is-valid');
        $categoryErrors.innerHTML = '';
       }
    })

    
     $inputDescription.addEventListener('blur', () => {
        switch (true) {
            case !$inputDescription.value.trim():
            $descriptionErrors.innerText = 'La descripción es obligatoria'
            $inputDescription.classList.add('is-invalid');
            break;

            case $inputDescription.value.length < 5:
            $descriptionErrors.innerText = 'La descripción debe tener mínimo 5 caracteres'
            $inputDescription.classList.add('is-invalid');
            break;

            default: 
            $inputDescription.classList.remove("is-invalid");
                $inputDescription.classList.add("is-valid");
                $descriptionErrors.innerText = "";
                break;
        }
    })
    
    $inputPrice.addEventListener('blur', () => {
        switch (true) {
            case $inputPrice.value.trim():
            $priceErrors.innerText = 'Debes indicar un precio y que sea mayor a 0'
            break;

            default: 
            $inputPrice.classList.remove('is-invalid');
            $inputPrice.classList.add('is-valid');
            $priceErrors.innerText = '';
            break;
        }
    })

    $inputDiscount.addEventListener('blur', () => {
        switch (true) {
            case (!$inputDiscount.value.trim()):
            $discountErrors.innerText = 'Debes ingresar un valor en descuento';
            break;

            case $inputDiscount.value.length < 100:
            $discountErrors.innerText = 'El descuento no puede ser mayor a 100%'
            break;

            default:
                $inputDiscount.classList.remove('is-invalid');
                $inputDiscount.classList.add('is-valid');
                $discountErrors.innerText = '';
                break;
        }
    })

    $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const FORM_ELEMENTS = event.target.elements;

        for (let index = 0; index < FORM_ELEMENTS.length - 1; index++) {
            const element = FORM_ELEMENTS[index];
            if(element.value === "" && element.type !== "file") {
                element.classList.add("is-invalid")
            }
           
        }

        let elementosConErrores = document.querySelectorAll(".is-invalid");
        let errores = elementosConErrores.length > 0; 

        if(errores) {
            submitErrors.innerText = "El formulario no puede ser enviado vacio"
        } else {
            $form.submit()
        }
     })


})