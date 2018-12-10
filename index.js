// Code your solution here:
function driversWithRevenueOver(array,revenue){
  return array.filter(function(element){
    return element.revenue > revenue
  })
}

function driverNamesWithRevenueOver (array, revenue) {
  return driversWithRevenueOver(array, revenue)
    .map(function (element) {
      return element.name;
    });
}

function exactMatch(array, obj) {
  key = Object.keys(obj)[0];
  return array.filter(function (element) {
    return element[key] === obj[key]
  })
}

function exactMatchToList(array, obj){
  filtered = exactMatch(array, obj)
    return filtered.map(function (element){
      return element.name
    })
}
