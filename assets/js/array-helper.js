/*
 * Find an object in an array by a given property
 */
Array.prototype.findByProperty = function(propertyName, propertyValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][propertyName] === propertyValue) {
      return this[i];
    }
  }

  return null;
};
