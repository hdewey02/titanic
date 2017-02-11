var csv = require('csvtojson');
nn = require('nearest-neighbor');

var filepath = 'titanicData.csv';

/*
var totalSurvived = 0;
var totalMale = 0;
var totalFemale = 0;
var totalMaleSurvivors = 0;
var totalFemaleSurvivors = 0;

var wealthy = 0;
var wealthyAndSurvived = 0;

var averageAgeOfSurvivors = 0;
*/

var items = [];

csv()
  .fromFile(filepath)

  .on('json', function(obj) {

    items.push(obj);

    /*
    console.log(obj);

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

    // Wealthy Data

    if (obj.fare > 50) {
      wealthy++;
      if (obj.survived == 1) {
        wealthyAndSurvived++;
      }
    }

    */

    // totalSurvived = JSON.parse(obj.survived) + totalSurvived;
  })
  .on('done', function(err){
    if (err) throw err;

    var query = { 
      survived: '0',
      sex: 'male',
      age: '14.5',
      sibsp: '3',
      fare: '50' 
    };

    var fields = [
      { name: "survived", measure: nn.comparisonMethods.number, max: 1 },
      { name: "age", measure: nn.comparisonMethods.number, max: 100 },
      { name: "sex", measure: nn.comparisonMethods.word }, 
      { name: "sibsp", measure: nn.comparisonMethods.number, max: 4 },
      { name: "fare", measure: nn.comparisonMethods.number, max: 600 },
    ];


    nn.findMostSimilar(query, items, fields, function(nearestNeighbor, probability) {
      console.log(query);
      console.log(nearestNeighbor);
      console.log(probability);
    });









    //averageAgeOfSurvivors = averageAgeOfSurvivors / totalSurvived;

    // var maleSurvivalRatio = totalMaleSurvivors / totalMale;
    // var femaleSurvivalRatio = totalFemaleSurvivors / totalFemale;

    // console.log(items);

    // console.log('Male Survival Ratio = ' + maleSurvivalRatio.toFixed(2) + ' || Female Survival Ratio = ' + femaleSurvivalRatio.toFixed(2))

    // console.log('Average Age Of Survivors: ' + averageAgeOfSurvivors);

    // console.log(totalSurvived);

    /*
 
    var items = [
      { name: "Bill", age: 10, pc: "Mac", ip: "68.23.13.8" },
      { name: "Alice", age: 22, pc: "Windows", ip: "193.186.11.3" },
      { name: "Bob", age: 12, pc: "Windows", ip: "56.89.22.1" }
    ];
     
    var query = { name: "Bob", age: 12, pc: "Windows", ip: "68.23.13.10" };
     
    var fields = [
      { name: "name", measure: nn.comparisonMethods.word },
      { name: "age", measure: nn.comparisonMethods.number, max: 100 },
      { name: "pc", measure: nn.comparisonMethods.word }, 
      { name: "ip", measure: nn.comparisonMethods.ip }
    ];
     
    nn.findMostSimilar(query, items, fields, function(nearestNeighbor, probability) {
      console.log(query);
      console.log(nearestNeighbor);
      console.log(probability);
    });

    */

    console.log('end');
  })





/* 

{ 
  survived: '0',
  sex: 'female',
  age: '14.5',
  sibsp: '1',
  fare: '14.4542' 
}

*/