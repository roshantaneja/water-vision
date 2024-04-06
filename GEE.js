Map.centerObject(studyarea, 10);

var SFCCvis = {bands: ['B8', 'B4', 'B3'], max: 3000};

////////Sentinel-2 Data 2020////////
var S2024 = ee.ImageCollection('COPERNICUS/S2_HARMONIZED')
                  .filterDate('2024-03-01', '2024-03-31')
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .filterBounds(studyarea);
print(S2024, 'S2 Data 2020');

var listS2024dataset=S2024.toList(S2024.size());
print(listS2024dataset, 'Data list_2024');

var img1 = ee.Image(listS2024dataset.get(7)).clip(studyarea);

Map.addLayer(img1, SFCCvis, 'SFCC Image1');

//Cloudfree scenes: 0, 1, 2, 7, 8, 

var imgcollection = ee.ImageCollection([listS2024dataset.get(0), 
listS2024dataset.get(1), listS2024dataset.get(2), listS2024dataset.get(3),
listS2024dataset.get(4), listS2024dataset.get(5), listS2024dataset.get(6),
listS2024dataset.get(7), listS2024dataset.get(8), listS2024dataset.get(9),
listS2024dataset.get(10), listS2024dataset.get(11), listS2024dataset.get(12),])
.select(['B2','B3','B4','B5','B6','B7','B8','B8A','B11','B12'])
print(imgcollection, 'imgcollection')


// ////Image stacking
var stackCollection = function(imgcollection) {
  var first = ee.Image(imgcollection.first()).select([]);
  var appendBands = function(image, previous) {
    return ee.Image(previous).addBands(image);
  };
  return ee.Image(imgcollection.iterate(appendBands, first));
};

var image_stack = stackCollection(imgcollection);
print(image_stack, 'Image Stack');

Map.addLayer(image_stack, SFCCvis, "imageStack");


// ////// Image Classification

// // Class Merging

// var polygons=Forest.merge(Cropland).merge(Fallow).merge(Waterbody).merge(Sand);

// print(polygons, 'Training data');



// var sample = polygons.randomColumn();

// var trainingsample = sample.filter('random <= 0.75');

// var validationsample = sample.filter('random > 0.75');

// print(trainingsample, 'Training sample');

// print(validationsample, 'Validation sample');





// var training = image_stack.sampleRegions({

//     collection: trainingsample,

//     properties: ['Class'],

//     scale: 20

// });

// print(training, 'Training data Band values');



// var validation = image_stack.sampleRegions({

//     collection: validationsample,

//     properties: ['Class'],

//     scale: 20

// });





// //RF Classifier Model Building

// //ee.Classifier.smileRandomForest(numberOfTrees, 

// //variablesPerSplit, minLeafPopulation, bagFraction, maxNodes, seed)

// var RFclassifier = ee.Classifier.smileRandomForest(200).train(training, 'Class');



// var Classified = image_stack.classify(RFclassifier).clip(studyarea);

// //print(Classified, 'Classified');



// var Palette = [

//   'green', //Forest

//   'yellow', //Cropland 

//   '#a89e32', //Fallow

//   'blue', //Waterbody

//   'grey', //Sand

// ];

// Map.addLayer(Classified, {palette: Palette, min: 1, max: 5}, 'Classified map');



// //// Accuracy Assessment

// // Get a confusion matrix and overall accuracy for the training sample.

// var trainAccuracy = RFclassifier.confusionMatrix();

// print('Training error matrix', trainAccuracy);

// print('Training overall accuracy', trainAccuracy.accuracy());



// // Get a confusion matrix and overall accuracy for the validation sample.

// validation = validation.classify(RFclassifier);

// var validationAccuracy = validation.errorMatrix('Class', 'classification');

// print('Validation error matrix', validationAccuracy);

// print('Validation accuracy', validationAccuracy.accuracy());





// ///// Variable Importance

// var explain = RFclassifier.explain();

// print(explain, 'Explain');



// //Variable Importance of RF Classifier

// var variable_importance = ee.Feature(null, ee.Dictionary(explain).get('importance'));



// // Chart of Variable Importance of RF Classifier

// var chartTitle = 'Random Forest: Bands Variable Importance';

// var chart =

//     ui.Chart.feature.byProperty(variable_importance)

//       .setChartType('BarChart')

//       .setOptions({

//         title: chartTitle,

//         legend: {position: 'none'},

//         hAxis: {title: 'Importance'},

//         vAxis: {title: 'Bands'}

//       });

// // Chart: Location and Plot

// chart.style().set({

//   position: 'bottom-left',

//   width: '400px',

//   height: '400px'

// });

// Map.add(chart);





// ////// Export

// Export.image.toDrive({

//   image: Classified,

//   description: 'RF_Classified_map',

//   region: studyarea,

//   scale: 20,

//   fileFormat: 'GeoTIFF',

//   maxPixels: 1e9,

// });




//https://code.earthengine.google.com/73aa2cc676bdca3f0c866472b3097d60