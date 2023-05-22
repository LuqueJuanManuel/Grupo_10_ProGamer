const qs = (element) => {
    return document.querySelectorAll(element);
    
}
window.addEventListener('load',() => {
    
    let $inputRol = qs('#UsersRols'),
    $RolError = qs('#RolError'),
    $formRol = qs('#formRol'),
    $formRolError = qs('#formRolError');
    /* console.log( $formRol) */
    
for (let i = 0; i < $inputRol.length; i++) {

    const userId = $inputRol[i].dataset.userId;
    $inputRol[i].addEventListener('blur', () =>{
        
        switch (true) {
            case !$inputRol[i].value.trim():
                $RolError[i].innerText = `El campo Roles del usuario ${userId} es obligatorio!!  `;
                $inputRol[i].classList.add('is-invalid');
                break;
            case $inputRol[i].value < 0 || $inputRol[i].value > 2:
                $RolError[i].innerText = `El campo Roles del usuario ${userId} tiene que ser entre 0 y 2.  `;
                $inputRol[i].classList.add('is-invalid');
                break;
            
            default:
                $inputRol[i].classList.remove('is-invalid');
                $RolError[i].innerText = '';
                break;
        }
    })
    $formRol[i].addEventListener('submit', (event) => {
        event.preventDefault()
        const elementErrors = document.querySelectorAll(".is-invalid");
        
        const ERRORES = elementErrors.length > 0;
        console.log(ERRORES)
        if (ERRORES) {
            $formRolError[i].innerText = ` Hay errores en el usurario con Id :  ${userId}`;
        }else{
            $formRol[i].submit()
        }
    })
}
});