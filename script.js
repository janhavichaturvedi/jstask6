function sortString(string) {
  var sortedString = string.toLowerCase().split("").sort().join("");
  return sortedString;
}

// Example usage
var string = "webmaster";
var sortedString = sortString(string);
console.log(sortedString);
