// User Growth Bar Chart
    new Chart(document.getElementById('userGrowthBarChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
                label: 'New Users',
                data: [50, 75, 60, 90, 100, 120],
                backgroundColor: '#1abc9c'
            }]
        }
    });
});
// Credit Utilization Pie Chart
new Chart(document.getElementById('creditUtilizationPieChart'), {
    type: 'pie',
    data: {
        labels: ['Used', 'Available'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#3498db', '#2ecc71'],
        }]
    },
    options: { responsive: true }
});

// Debt-to-Income Doughnut Chart
new Chart(document.getElementById('debtIncomeDoughnutChart'), {
    type: 'doughnut',
    data: {
        labels: ['Debt', 'Income'],
        datasets: [{
            data: [30, 70],
            backgroundColor: ['#e74c3c', '#2ecc71'],
        }]
    },
    options: { responsive: true }
});

// Payment History Line Chart
new Chart(document.getElementById('paymentHistoryLineChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Payment History',
            data: [85, 90, 88, 92, 87, 94],
            borderColor: '#3498db',
            fill: false
        }]
    },
    options: { responsive: true }
});

// User Age Distribution Bar Chart
new Chart(document.getElementById('userAgeDistributionBarChart'), {
    type: 'bar',
    data: {
        labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        datasets: [{
            label: 'User Age Distribution',
            data: [15, 30, 25, 10, 10, 5],
            backgroundColor: '#9b59b6'
        }]
    },
    options: { responsive: true }
});

// Credit Score Levels Pie Chart
new Chart(document.getElementById('creditScoreLevelsPieChart'), {
    type: 'pie',
    data: {
        labels: ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
        datasets: [{
            data: [10, 20, 30, 25, 15],
            backgroundColor: ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6']
        }]
    },
    options: { responsive: true }
});

// User Growth Bar Chart
new Chart(document.getElementById('userGrowthBarChart'), {
    type: 'bar',
    data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [{
            label: 'User ,
            data: [35, 30, 25, 10],
            backgroundColor: ['#27ae60', '#2980b9', '#f39c12', '#c0392b']
        }]
    }
});
