/**
  @module utils
*/

/**
  Collection utilities.

  @class Collection
  @static
*/
var Collection = lib.Collection = {};

/**
  Remove all instances of an object from an array.

  @method removeAll
  @param {Array} buffer  Collection of objects
  @param {any}   item    Item to remove from collection
*/
Collection.removeAll = function (buffer, item) {
  var index = buffer.indexOf(item);
  if (index < 0) { return; }

  for (var i = buffer.length - 1; i >= index; i --) {
    if (buffer[i] === item) {
      buffer.splice(i, 1);
    }
  }
};
