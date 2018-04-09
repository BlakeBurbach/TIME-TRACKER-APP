TimeTrackerApp.controller('ReportsController', ['TimeTrackerService', function(TimeTrackerService){
    console.log('ReportsController loaded');
    let self = this;


    // Information from the projects table from database to use in charts
    self.projectList = TimeTrackerService.projectList;

    // First chart to display the relationship of total hours worked for each client
    self.makeChart = function () {
        console.log('in makeChart');
        // make project data into an array to be easily looped over
        let projectList = self.projectList.list

        // loop over client's name to differentiate between each client
        let clientArray = projectList.map((e, i) => {
            return e.client; 
        })

        // loop over total time to use total time data
        let hoursArray = projectList.map((e, i) => {
            return e.total_time; 
        })
    
        let ctx = angular.element( document.querySelector( '#myChart' ) );
        let myChart = new Chart(ctx, {
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
    // Second chart to display the relationship of total earnings from each client
    self.makeSecondChart = function(){
        console.log('in makeSecondChart');
        // make project data into an array to be easily looped over
        let projectList = self.projectList.list

        // loop over just the client's names for differentiation
        let clientArray = projectList.map((e, i) => {
            return e.client; 
        })
        // loop over total earnings to just use total_earnings data
        let moneyArray = projectList.map((e, i) => {
            return ('$', e.total_earnings); 
        })
    
        let ctx = angular.element( document.querySelector( '#mySecondChart' ) );
        let mySecondChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: clientArray,
                datasets: [{
                    label: 'Total Earnings by Client',
                    data: moneyArray,
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