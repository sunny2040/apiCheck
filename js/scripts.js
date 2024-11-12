// Credit Data Chart (Bar Chart)
const ctxBar = document.getElementById('creditDataChart').getContext('2d');
const creditDataChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Credit Score Data',
      data: [650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 800
      }
    }
  }
});

// Credit Check Pie Chart
const ctxPie = document.getElementById('creditCheckPieChart').getContext('2d');
const creditCheckPieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Excellent', 'Good', 'Average', 'Poor'],
    datasets: [{
      data: [30, 40, 20, 10],
      backgroundColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
