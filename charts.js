var ctx = document.getElementById('myChart').getContext('2d');
var earnig = document.getElementById('earnig').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Youtube', 'Facebook', 'Instagram'],
        datasets: [{
            label: 'Taffic Sorce',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
        responsive : true,
    }
});

var earnig = new Chart(earnig, {
    type: 'bar',
    data: {
        labels: ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 3000, 5400, 1220, 3600, 4800, 4578, 2556, 8545,4587,6412],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        responsive : true,
    }
});