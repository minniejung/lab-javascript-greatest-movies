// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(arr => arr.director);
  return allDirectors;
}; 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howManySteven = movies.filter(arr => arr.director === 'Steven Spielberg' && arr.genre.includes('Drama'));
  return howManySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  // const noScoreMovies = movies.filter(arr => arr.score === '');

  const sumScore = movies.reduce((acc, currentMovie) => acc += currentMovie.score, 0);
  const aveScore = sumScore / movies.length; 
  return Number(aveScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter(movies => movies.genre.includes('Drama'));
  if (dramas.length === 0) return 0;

  const sumDramas = dramas.reduce((acc, currentMovie) => acc += currentMovie.score, 0);
  const aveDramas = sumDramas / dramas.length; 
  return Number(aveDramas.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let clone = movies.map(movies => ({...movies}));
  movies.sort((a, b) => a.year - b.year);
  return clone;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const list = movies.sort((a, b) => a.title - b.title);
  return list; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
