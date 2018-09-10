/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (i=0; i < preferences.length; i++) {
      var firstLoveNumber = preferences[i];
      var firstLoveIndex = firstLoveNumber - 1;
      if (i === firstLoveIndex) {
          continue;
      }
      var secondLoveNumber = preferences[firstLoveIndex];
      var secondLoveIndex = secondLoveNumber - 1;
      if (firstLoveIndex === secondLoveIndex) {
          continue;
      }
      var thirdLoveNumber = preferences[secondLoveIndex];
      var thirdLoveIndex = thirdLoveNumber - 1;
      if (secondLoveIndex === thirdLoveIndex) {
          continue;
      }
      if (i === thirdLoveIndex) {
          count++;
      }
  }
  return count/3;
};
