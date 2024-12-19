import { City } from "./graph.mjs";

// setup
const atlanta = new City("Atlanta");
const boston = new City("Boston");
const chicago = new City("Chicago");
const denver = new City("Denver");
const elPaso = new City("El Paso");

atlanta.addRoute(boston, 100);
atlanta.addRoute(denver, 160);
boston.addRoute(chicago, 120);
boston.addRoute(denver, 180);
chicago.addRoute(elPaso, 80);
denver.addRoute(chicago, 40);
denver.addRoute(elPaso, 140);
elPaso.addRoute(boston, 100);

function dijkstraShortestPath(startCity, endCity) {
  const minPriceTable = { [startCity.name]: 0 };
  const visitedCities = {};
  let unvisitedCities = [startCity];
  const prevCityTable = {};
  let currentCity = startCity;

  while (unvisitedCities.length > 0) {
    visitedCities[currentCity.name] = true;
    unvisitedCities = unvisitedCities.filter((city) => city !== currentCity);

    for (const adjacentCity of currentCity.routes.keys()) {
      const priceToAdjacent = currentCity.routes.get(adjacentCity);
      const priceThroughCurrentCity =
        priceToAdjacent + minPriceTable[currentCity.name];

      // plan to visit if not visited yet
      if (!visitedCities[adjacentCity.name] && !unvisitedCities[adjacentCity]) {
        unvisitedCities.push(adjacentCity);
      }

      // update lowest price and prev city when price lower
      if (
        !minPriceTable[adjacentCity.name] ||
        priceThroughCurrentCity < minPriceTable[adjacentCity.name]
      ) {
        minPriceTable[adjacentCity.name] = priceThroughCurrentCity;
        prevCityTable[adjacentCity.name] = currentCity.name;
      }
    }

    // visit city with lowest price
    let lowestPrice = Infinity;
    for (let city of unvisitedCities) {
      if (minPriceTable[city.name] < lowestPrice) {
        lowestPrice = minPriceTable[city.name];
        currentCity = city;
      }
    }
  }

  let cityName = endCity.name;
  let shortestPath = [cityName];
  while ((cityName = prevCityTable[cityName])) {
    shortestPath.unshift(cityName);
  }

  return shortestPath;
}

console.log(dijkstraShortestPath(atlanta, elPaso));
