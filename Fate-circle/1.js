// Load google charts
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

var chartData = [['My life', 'My considered thing']];
var addBtn = document.getElementById('addBtn');
addBtn.onclick = function() {
    event.preventDefault();
    let newData = [event.target.parentNode.childNodes[1].value, Number(event.target.parentNode.childNodes[3].value)];
    chartData.push(newData);
    console.log(chartData);
    google.charts.setOnLoadCallback(drawChart);
    event.target.parentNode.childNodes[1].value = '';
    event.target.parentNode.childNodes[3].value = '';
}

// Draw charts and set charts value
function drawChart() {
    data = google.visualization.arrayToDataTable(chartData);
    var options = {'title': 'My spending life-time', 'width': 550, 'height': 380}; // Add chart title and size  
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}