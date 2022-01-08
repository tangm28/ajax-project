/* exported maxes */
var previousMaxes;

var maxes = {
  maxesTrend: [],
  todayDate: new Date(),
  nextTrendId: 1
};

function saveDataB4Unload(event) {
  localStorage.setItem('maxes-local-storage', JSON.stringify(maxes));
}
previousMaxes = localStorage.getItem('maxes-local-storage');
if (previousMaxes !== null) {
  maxes.maxesTrend = JSON.parse(previousMaxes).maxesTrend;
  maxes.nextTrendId = JSON.parse(previousMaxes).nextTrendId++;
}
window.addEventListener('beforeunload', saveDataB4Unload);
