/* global maxes */
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
var $dataMaxes = document.getElementById('data-maxes');

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

function saveMaxes(event) {
  event.preventDefault();
  var formData = new FormData($dataMaxes);
  var benchMax = formData.get('bench-max');
  var benchMeas = formData.get('bench-meas-type');
  var squatMax = formData.get('squat-max');
  var squatMeas = formData.get('squat-meas-type');
  var deadliftMax = formData.get('deadlift-max');
  var deadliftMeas = formData.get('deadlift-meas-type');
  var ohpMax = formData.get('ohp-max');
  var ohpMeas = formData.get('ohp-meas-type');
  if (isNaN(benchMax)) {
    alert('Please input a positive number for Bench');
    return;
  } else if (Number(benchMax) < 1) {
    alert('Please input a positive number for Bench');
    return;
  }
  if (isNaN(squatMax)) {
    alert('Please input a positive number for Squat');
    return;
  } else if (Number(squatMax) < 1) {
    alert('Please input a positive number for Squat');
    return;
  }
  if (isNaN(deadliftMax)) {
    alert('Please input a positive number for Deadlift');
    return;
  } else if (Number(deadliftMax) < 1) {
    alert('Please input a positive number for Deadlift');
    return;
  }
  if (isNaN(ohpMax)) {
    alert('Please input a positive number for Overhead Press');

  } else if (Number(ohpMax) < 1) {
    alert('Please input a positive number for Overhead Press');
  }
  var currentMaxes = {
    maxBench: benchMax,
    benchMeas: benchMeas,
    maxSquat: squatMax,
    squatMeas: squatMeas,
    maxDeadlift: deadliftMax,
    deadliftMeas: deadliftMeas,
    maxOHP: ohpMax,
    ohpMeas: ohpMeas,
    today: new Date(),
    nextTrendId: maxes.nextTrendId
  };
  maxes.nextTrendId++;
  maxes.maxesTrend.unshift(currentMaxes);
}

$maxCalculator.addEventListener('click', openModal);
$closeCalc.addEventListener('click', closeModal);
$calcMaxForm.addEventListener('submit', calculateMax);
$closeCalcResult.addEventListener('click', closeModal);
$exitCalcResult.addEventListener('click', closeModal);
$dataMaxes.addEventListener('submit', saveMaxes);
