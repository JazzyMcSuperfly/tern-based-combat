var heroStats = ['Swings', 'Hits', 'Misses', 'Charisma', 'Volatility'];
// var testHero = [60, 30, 30, 7, 45];

var testHero = [];

if (localStorage) {
  testHero = JSON.parse(localStorage.getItem('heroData'));
}
console.log('hero data is: ' + testHero);

var heroData = {
  labels : heroStats,
  datasets : [
    {
      label : 'Hero Stats',
      backgroundColor : 'white',
      borderColor : 'blue',
      pointBackgroundColor : 'red',
      pointBorderColor : 'black',
      data : testHero
    }
  ]
};

function drawChart() {
  var ctx = document.getElementById('theherostats').getContext('2d');
  heroChart = new Chart (ctx, {
    type: 'radar',
    data: heroData,
    options: {
      responsive : false
    }
  });
};
