var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


  function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

/*$(document).ready(function () {
  $('#producto').val('100');
  $('#plazos').val('1');
  $('#presupuesto').val(parseInt($('#plazo').val())*20 + parseInt($('#producto').val()));
  $('input[type="checkbox"]').prop('checked', false);
})

function presupuestoFinal() {
  let producto = parseInt($('#producto').val());
  let plazos = parseInt($('#plazos').val());
  let extras = 0;

  $('input[type="checkbox"]:checked').each(function () {
    extras +- parseInt($(this).val());
  });

let presupuesto = producto + (plazos * 20) + extras;

$('#presupuesto').val(presupuesto);
}*/

function calcularSuma() {
  // Obtener los valores de los campos del formulario
  const valor1 = parseFloat(document.getElementById('producto').value) || 0;
  const valor2 = parseFloat(document.getElementById('plazos').value) || 0;
 

  // Obtener los valores de los checkboxes si están seleccionados
  const checkbox1 = document.getElementById('check1');
  const checkbox2 = document.getElementById('check2');
  const checkbox3 = document.getElementById('check3');
  const checkbox4 = document.getElementById('check4');
  const checkbox5 = document.getElementById('check5');

  const checkboxValue1 = checkbox1.checked ? parseFloat(checkbox1.value) : 0;
  const checkboxValue2 = checkbox2.checked ? parseFloat(checkbox2.value) : 0;
  const checkboxValue3 = checkbox3.checked ? parseFloat(checkbox3.value) : 0;
  const checkboxValue4 = checkbox4.checked ? parseFloat(checkbox4.value) : 0;
  const checkboxValue5 = checkbox5.checked ? parseFloat(checkbox5.value) : 0;

  // Calcular la suma de los valores
  const suma = valor1 + (valor2 * 20) + checkboxValue1 + checkboxValue2 + checkboxValue3 + checkboxValue4 + checkboxValue5;

  // Mostrar la suma en el input con id 'suma'
  document.getElementById('suma').value = suma;
}