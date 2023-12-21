
//funciones de Fecha
let fecha = new Date();
// Agregar 3 días
fecha.setDate(fecha.getDate() + 2);
// Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
let fechaMin = fecha.toISOString().split('T')[0];
// Asignar valor mínimo
document.querySelector('#fecha_solicitada').min = fechaMin;


var elDate = document.getElementById('fecha_solicitada');
var elForm = document.getElementById('elForm');
var elSubmit = document.getElementById('elSubmit');
var birthday = document.getElementById('fechaCumple');
var motivo = document.getElementById('motivo').value;


function limitarFechasSegunCumpleaños() {
    let fechaSolicitada = new Date(document.getElementById('fecha_solicitada').value);
    let fechaCumple = new Date(document.getElementById('fechaCumple').value);    

    if (fechaCumple.getUTCMonth >= 0 && fechaCumple.getUTCMonth() <= 5) {
        
        if (fechaSolicitada.getUTCMonth() < 0 || fechaSolicitada.getUTCMonth() > 5) {
            document.getElementById('fecha_solicitada').value = ''; // Limpiar el campo de fecha
            alert('Solo puedes seleccionar fechas dentro del primer semestre.');
        }
    } else {
        // Cumpleaños en el segundo semestre
        if (fechaSolicitada.getUTCMonth() < 6 || fechaSolicitada.getUTCMonth() > 11) {
            document.getElementById('fecha_solicitada').value = ''; // Limpiar el campo de fecha
            alert('Solo puedes seleccionar fechas dentro del segundo semestre.');
        }
    }
}


function cambiarMotivo() {
    let motivoSeleccionado = document.getElementById('motivo').value;
    if (motivoSeleccionado === '0') {
        limitarFechasSegunCumpleaños();
    }
}

function sinweekend() {
    var day = new Date(elDate.value).getUTCDay();
    // Días 0-6, 0 es Domingo 6 es Sábado
    elDate.setCustomValidity(''); // limpiarlo para evitar pisar el fecha inválida
    if (day == 0 || day == 6) {
        alert('fin de semana no disponible, por favor seleccione otro día');
    } else {
        elDate.setCustomValidity('');
    }
}



function obtenerfechafinf1() {
    cambiarMotivo();
    sinweekend();

}





// Función para validar si una fecha está dentro de los 7 días hábiles antes o después del cumpleaños




//Funciones de Hora
var jornada = document.getElementById("jornada")
var hora = document.getElementById("hora_cub")
var hora_s = document.getElementById("hora_reg")
var elForm = document.getElementById("elForm")
var motivo = document.getElementById("motivo")
motivo.addEventListener("change", () => {
    let elementoElegido = motivo.options[motivo.selectedIndex].value
    if (elementoElegido == "0") {
        jornada.value = "1";
        jornada.disabled = true;
        hora.disabled = true
        hora_s.disabled = true
        hora.value = '00:00';
        hora_s.value = '23:59';
        document.getElementById('fecha_solicitada').value = '';
        function esDiaHabil(fecha) {
            // Día de la semana de la fecha ingresada (0: domingo, 1: lunes, ..., 6: sábado)
            const diaSemana = fecha.getDay();
            return diaSemana >= 1 && diaSemana <= 5; // Lunes (1) a Viernes (5) son días hábiles
        }

        // Función para verificar si la fecha ingresada es válida
        function validarFecha() {
            const fechaCumpleInput = document.getElementById("fechaCumple").value;
            const fechaCumple = new Date(fechaCumpleInput);
            const fechaHoy = new Date();
            const cumpleanio = new Date(fechaHoy.getFullYear(), fechaCumple.getMonth(), fechaCumple.getDate());

            // Asegurarse de que el año del cumpleaños sea el mismo que el año actual o el próximo año
            if (fechaCumple.getMonth() < fechaHoy.getMonth() || (fechaCumple.getMonth() === fechaHoy.getMonth() && fechaCumple.getDate() < fechaHoy.getDate())) {
                cumpleanio.setFullYear(cumpleanio.getFullYear() + 1);
            }

            // Calcular los 7 días hábiles antes y después del cumpleaños
            let diasHabilesAntes = [];
            let diasHabilesDespues = [];
            let fechaAux = new Date(fechaCumple);

            while (diasHabilesAntes.length < 7 || diasHabilesDespues.length < 7) {
                fechaAux.setDate(fechaAux.getDate() - 1); // Restar un día
                if (esDiaHabil(fechaAux)) {
                    if (diasHabilesAntes.length < 7) {
                        diasHabilesAntes.unshift(new Date(fechaAux));
                    }
                    if (diasHabilesDespues.length < 7) {
                        diasHabilesDespues.push(new Date(fechaAux));
                    }
                }
            }

            // Habilitar o deshabilitar los días en el input de tipo date
            const inputFecha = document.getElementById("fecha_solicitada");
            inputFecha.min = diasHabilesAntes[0].toISOString().slice(0, 10);
            inputFecha.max = diasHabilesDespues[diasHabilesDespues.length - 1].toISOString().slice(0, 10);
            inputFecha.value = inputFecha.min; // Establecer la fecha seleccionada como el mínimo permitido
        }

        // Llamar a la función al cargar la página para bloquear las fechas iniciales
        window.onload = validarFecha;

    }

    else {
        hora.value = "00:00";
        hora_s.value = "23:59";
        jornada.disabled = false;
        jornada.disabled = false;
        jornada.value = "1";

    }
})

jornada.addEventListener("change", () => {
    let elementoElegido = jornada.options[jornada.selectedIndex].value
    if (elementoElegido == "0.5") {
        hora.disabled = false
        hora_s.disabled = false
        hora.value = "";
        hora_s.value = "";

    }
    else if (elementoElegido == "0.25") {
        hora.disabled = false
        hora_s.disabled = false
        hora.value = "";
        hora_s.value = "";
    }

    else {
        hora.disabled = true
        hora_s.disabled = true
        hora.value = "00:00";
        hora_s.value = "23:59";
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", function (event) {
        // Cambiar los elementos con atributo 'disabled' a 'readonly' antes de enviar el formulario
        const elementosDeshabilitados = formulario.querySelectorAll('[disabled]');
        elementosDeshabilitados.forEach(function (elemento) {
            elemento.removeAttribute('disabled');
            elemento.setAttribute('readonly', 'readonly');
        });

        // Evitar que se despliegue el select de motivo y jornada al hacer clic
        const selectMotivo = document.getElementById("motivo");
        const selectJornada = document.getElementById("jornada");
        const selectFecha = document.getElementById("fecha_solicitada");
        

        selectMotivo.style.pointerEvents = "none";
        selectJornada.style.pointerEvents = "none";
        selectFecha.style.pointerEvents = "none";

        // Prevenir desplegar opciones al hacer clic en los select de motivo y jornada
        selectMotivo.addEventListener("click", function (event) {
            event.preventDefault();
        });

        selectJornada.addEventListener("click", function (event) {
            event.preventDefault();
        });
        selectFecha.addEventListener("click", function (event) {
            event.preventDefault();
        });
    });
});






