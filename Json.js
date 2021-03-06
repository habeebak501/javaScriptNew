/**
*@fileName:Json.js
*@createBy:habeeb
*@date:
*@purpose:To Show Standard Coding Convention
*/

/**
*@Json file
*/
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};
document.write(JSON.stringify(collection[2468])+"<br>");
document.write(JSON.stringify(collection[2548])+"<br>");
document.write(JSON.stringify(collection[1245])+"<br>");
document.write(JSON.stringify(collection[5439])+"<br>");
document.write(collection[2468]["tracks"]+"<br>");
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop !== 'tracks') {
    collection[id][prop] = value;
  } else {
    collection[id][prop].push(value);
  }


  return collection;
}

var result = update(2468, "artist", "ABBA");
document.write(result[2468]["artist"]+"<br>");
var result1=update(2468,"tracks","india"+"<br>");
document.write(JSON.stringify(collection[2468])+"<br>");
document.write("................................");
