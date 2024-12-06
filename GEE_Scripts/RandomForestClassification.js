// Define your area of interest (AOI) around Maasai dwellings.
// var aoi = ee.Geometry.Polygon([
//   [[36.0, -3.25], [36.5, -3.25], [36.5, -3.75], [36.0, -3.75], [36.0, -3.25]]
// ]);

// Define the time range to query imagery.
var start = '2023-01-01';
var end = '2023-12-31';

// Load and filter Sentinel-2 imagery over the AOI and time range.
var s2 = ee.ImageCollection('COPERNICUS/S2_HARMONIZED')
  .filterBounds(aoi)
  .filterDate(start, end)
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20)) // Filter out cloudy images
  .select(['B2', 'B3', 'B4', 'B8']); // Select Blue, Green, Red, and NIR bands

// Calculate median to reduce cloud effects and improve classification results.
var medianImage = s2.median().clip(aoi);

// Display the image.
Map.centerObject(aoi, 12);
Map.addLayer(medianImage, {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Sentinel-2 RGB');







// Training data - define classes (e.g., 0 for non-dwelling, 1 for dwelling).
// Load or create points/polygons with labeled classes for supervised classification.
// var dwelling = ee.FeatureCollection([
//   ee.Feature(ee.Geometry.Point([36.2, -2.6]), {class: 1}), // Dwelling
//   // Add more dwelling points
// ]);

// var nonDwelling = ee.FeatureCollection([
//   ee.Feature(ee.Geometry.Point([36.3, -3]), {class: 0}), // Non-dwelling
//   // Add more non-dwelling points
// ]);





// Merge collections into a single training dataset.
var trainingData = dwelling.merge(nonDwelling);

// Extract bands as input features for the classifier.
var trainingSample = medianImage.sampleRegions({
  collection: trainingData,
  properties: ['class'],
  scale: 10
});

// Initialize a Random Forest classifier.
var classifier = ee.Classifier.smileRandomForest(10).train({
  features: trainingSample,
  classProperty: 'class',
  inputProperties: ['B2', 'B3', 'B4', 'B8']
});

// Classify the image.
var classified = medianImage.classify(classifier);

// Display the classification result.
Map.addLayer(classified, {min: 0, max: 1, palette: ['blue', 'red']}, 'Dwelling Classification');

// Export the classified image.
Export.image.toDrive({
  image: classified,
  description: 'MaasaiDwellingClassification',
  scale: 10,
  region: aoi,
  maxPixels: 1e8
});
