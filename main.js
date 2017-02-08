var csv = require('csvtojson');

var filepath = 'titanicData.csv';

var totalSurvived = 0;
var totalMale = 0;
var totalFemale = 0;
var totalMaleSurvivors = 0;
var totalFemaleSurvivors = 0;

var wealthy = 0;
var wealthyAndSurvived = 0;

csv()
  .fromFile(filepath)

  .on('json', function(obj) {

    // console.log(jsonObj.survived)

    if (obj.sex == 'male') {
      totalMale++;
      if (obj.survived == '1') {
        totalMaleSurvivors++;
      }
    } else if (obj.sex == 'female') {
      totalFemale++;
      if (obj.survived == '1') {
        totalFemaleSurvivors++;
      }
    }

    if (obj.fare > 50) {
      wealthy++;
      if (obj.survived == 1) {
        wealthyAndSurvived++;
      }
    }

    totalSurvived = JSON.parse(obj.survived) + totalSurvived;
  })
  .on('done', function(err){
    if (err) throw err;

    var maleSurvivalRatio = totalMaleSurvivors / totalMale;
    var femaleSurvivalRatio = totalFemaleSurvivors / totalFemale;

    //console.log('Male Survival Ratio = ' + maleSurvivalRatio.toFixed(2) + ' || Female Survival Ratio = ' + femaleSurvivalRatio.toFixed(2))

    // console.log(totalSurvived);
    console.log('end');
  })