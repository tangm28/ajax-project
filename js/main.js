// var $benchMax = document.getElementById('bench-max');
// var $squatMax = document.getElementById('squat-max');
// var $deadliftMax = document.getElementById('deadlift-max');
// var $ohpMax = document.getElementById('ohp-max');
var $maxCalculator = document.getElementById('open-calc');
var $calcModal = document.getElementById('calc-modal');
var $closeCalc = document.getElementById('close-calc');
var $calcMaxForm = document.getElementById('calc-max');
var $maxResult = document.getElementById('max-result');
var $maxResultModal = document.getElementById('max-result-modal');
var $closeCalcResult = document.getElementById('close-calc-result');
var $exitCalcResult = document.getElementById('exit-calc-result');

function openModal(event) {
  var temp = null;
  try {
    temp = event.target.id;
  } catch (error) {
    temp = event.id;
  }
  if (temp === 'open-calc') {
    $calcModal.style.display = 'block';
  }
  if (temp === 'max-result-modal') {
    $maxResultModal.style.display = 'block';
  }
}

function closeModal(event) {
  var close = event.target;
  while (close.style.display !== 'block') {
    close = close.parentElement;
  }
  close.style.display = '';
}

function calculateMax(event) {
  event.preventDefault();
  var formData = new FormData($calcMaxForm);
  var calcWeight = formData.get('calc-weight');
  var calcRep = formData.get('calc-rep');
  var max = Number(calcWeight) * (1 + Number(calcRep) / 30);
  if (isNaN(calcWeight)) {
    alert('Please input a positive number for Weight');
    return;
  } else if (Number(calcWeight) < 1) {
    alert('Please input a positive number for Weight');
    return;
  }
  if (isNaN(calcRep)) {
    alert('Please input a positive number for Reps');

  } else if (Number(calcRep) < 1) {
    alert('Please input a positive number for Rep');
  }
  $maxResult.textContent = max - (max % 5) + formData.get('weight-meas-type');
  closeModal(event);
  openModal($maxResultModal);
}

$maxCalculator.addEventListener('click', openModal);
$closeCalc.addEventListener('click', closeModal);
$calcMaxForm.addEventListener('submit', calculateMax);
$closeCalcResult.addEventListener('click', closeModal);
$exitCalcResult.addEventListener('click', closeModal);
