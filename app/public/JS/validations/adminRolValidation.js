const qs = (element) => {
    return document.querySelector(element);
}
window.addEventListener('load',() => {
    
    let $inputRol = qs('#UsersRols'),
    $RolError = qs('#RolError'),
    $formRol = qs('#formRol'),
    $formRolError = qs('#formRolError');

    
    const userId = $inputRol.dataset.userId;
    
    $inputRol.addEventListener('blur', () => {
        if ($inputRol.value === null) { 
            $RolError.innerText = 'Las 1 contraseñas no coinciden';
            $inputRol.classList.add('is-invalid');
        }
        if ($inputRol.value === undefined) {
            $RolError.innerText = 'Las 2 contraseñas no coinciden';
            $inputRol.classList.add('is-invalid');
        }
    });

    $inputRol.addEventListener('blur', () =>{
        switch (true) {
            case !$inputRol.value.trim():
                $RolError.innerText = 'El 3 campo es obligatorio';
                $inputRol.classList.add('is-invalid');
                
                break;
            
            default:
                $inputRol.classList.remove('is-invalid');
                $RolError.innerText = '';
                break;
        }
    })
    $formRol.addEventListener('submit', (event) => {
        event.preventDefault()
        const elementErrors = document.querySelectorAll(".is-invalid");
        console.log(elementErrors)
        const ERRORES = elementErrors.length > 0;
        if (ERRORES) {
            $formRolError.innerText = `Hay errores en el usurario con Id :  ${userId}`;
        }else{
            $formRol.submit()
        }
    })
});