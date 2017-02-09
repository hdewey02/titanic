var csv = require('csvtojson');

var filepath = 'titanicData.csv';

var totalSurvived = 0;
var totalMale = 0;
var totalFemale = 0;
var totalMaleSurvivors = 0;
var totalFemaleSurvivors = 0;

var wealthy = 0;
var wealthyAndSurvived = 0;

var averageAgeOfSurvivors = 0;

csv()
  .fromFile(filepath)

  .on('json', function(obj) {

    // console.log(jsonObj.survived)

    // Gender and Total Passenger Data

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

    /*

    if (obj.survived == '1') {
      if (obj.age !== undefined) {
        averageAgeOfSurvivors = age + averageAgeOfSurvivors;
      }
    }

    */

    // Wealthy Data

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

    //averageAgeOfSurvivors = averageAgeOfSurvivors / totalSurvived;

    var maleSurvivalRatio = totalMaleSurvivors / totalMale;
    var femaleSurvivalRatio = totalFemaleSurvivors / totalFemale;

    console.log('Male Survival Ratio = ' + maleSurvivalRatio.toFixed(2) + ' || Female Survival Ratio = ' + femaleSurvivalRatio.toFixed(2))

    // console.log('Average Age Of Survivors: ' + averageAgeOfSurvivors);

    // console.log(totalSurvived);
    console.log('end');
  })