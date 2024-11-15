document.addEventListener('DOMContentLoaded', function () {
    // Credit Utilization Pie Chart
    new Chart(document.getElementById('creditUtilizationPieChart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Used', 'Available'],
            datasets: [{
                label: 'Credit Utilization',
                data: [60, 40],
                backgroundColor: ['#e74c3c', '#3498db']
            }]
        }
    });

    // Debt-to-Income Doughnut Chart
    new Chart(document.getElementById('debtIncomeDoughnutChart').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Debt', 'Income'],
            datasets: [{
                label: 'Debt-to-Income Ratio',
                data: [30, 70],
                backgroundColor: ['#f39c12', '#2ecc71']
            }]
        }
    });

    // Payment History Line Chart
    new Chart(document.getElementById('paymentHistoryLineChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Payment History',
                data: [10, 20, 15, 25, 30, 35],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                fill: true
            }]
        }
    });

    // User Age Distribution Bar Chart
    new Chart(document.getElementById('userAgeDistributionBarChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['18-25', '26-35', '36-45', '46+'],
            datasets: [{
                label: 'User Age Distribution',
                data: [25, 40, 20, 15],
                backgroundColor: ['#9b59b6', '#3498db', '#f1c40f', '#e74c3c']
            }]
        }
    });

    // Credit Score Levels Pie Chart
    new Chart(document.getElementById('creditScoreLevelsPieChart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Excellent', 'Good', 'Fair', 'Poor'],
            datasets: [{
                label: 'Credit Score Levels',
                data: [35, 30, 25, 10],
                backgroundColor: ['#27ae60', '#2980b9', '#f39c12', '#c0392b']
            }]
        }
    });

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
