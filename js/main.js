// var $benchMax = document.getElementById('bench-max');
// var $squatMax = document.getElementById('squat-max');
// var $deadliftMax = document.getElementById('deadlift-max');
// var $ohpMax = document.getElementById('ohp-max');
var $maxCalculator = document.getElementById('open-calc');
var $calcModal = document.getElementById('calc-modal');
var $closeIcon = document.querySelector('.fa-times');
var $calcMaxForm = document.getElementById('calc-max');

function openModal(event) {
  if (event.target.id === 'open-calc') {
    $calcModal.style.display = 'block';
  }
}

function closeModal(event) {
  if ($calcModal.style.display === 'block') {
    $calcModal.style.display = '';
  }
}

function calculateMax(event) {
  event.preventDefault();
  var formData = new FormData($calcMaxForm);
  if (isNaN(formData.get('calc-weight'))) {
    alert('Please input a positive number for Weight');
    return;
  } else if (Number(formData.get('calc-weight') < 1)) {
    alert('Please input a positive number for Weight');
    return;
  }
  if (isNaN(formData.get('calc-rep'))) {
    alert('Please input a positive number for Reps');

  } else if (Number(formData.get('calc-rep') < 1)) {
    alert('Please input a positive number for Rep');
  }
}

$maxCalculator.addEventListener('click', openModal);
$closeIcon.addEventListener('click', closeModal);
$calcMaxForm.addEventListener('submit', calculateMax);
