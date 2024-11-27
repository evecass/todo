function ValidateForm() {
    let nombre = document.getElementById('Nombre').value;
    let fecha = document.getElementById('Fecha').value;
    let nt = document.getElementById('NumeroTelefonico').value;
    let correo = document.getElementById('Correo').value;
    let file = document.getElementById('formFile').value;
  
    if (nombre == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (fecha == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (nt == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (correo == "") {
        alert('Este campo es requerido');
        return false;
    }

    if (file == "") {
        alert('Este campo es requerido');
        return false;
    }

    return true;
}
