TimeTrackerApp.controller('ReportsController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('ReportsController loaded');
    let self = this;

    self.generateGraph = false;
    self.projectList = TimeTrackerService.projectList;

    self.makeChart = function () {
        let projectList = self.projectList.list
        console.log(projectList);
        let clientArray = projectList.map((e, i) => {
            return e.client; 
        })
        let hoursArray = projectList.map((e, i) => {
            return e.total_time; 
        })
    
        var ctx = angular.element( document.querySelector( '#myChart' ) );
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: clientArray,
                datasets: [{
                    label: 'Billable Hours by Client',
                    data: hoursArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        
    }
}]);