// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map(film => film.director);
  return allDirectors;
}; 
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const howManySteven = movies.filter(film => film.director === 'Steven Spielberg' && film.genre.includes('Drama'));
  return howManySteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (!movies.length) return 0;

  const sumScore = movies.reduce((sum, currentMovie) => {
    if (currentMovie.score) return sum += currentMovie.score; 
    else return sum;
  }, 0);

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
  const newList = [...movies];
  newList.sort((filmA, filmB) => {
    if (filmA.year === filmB.year) {

      if(filmA.title < filmB.title) return -1;
      else if (filmA.title > filmB.title) return 1;
      else return 0;
    }

    else return filmA.year - filmB.year
  });

  return newList;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const abcList = [...movies];

  abcList.sort((filmA, filmB) => {
      if(filmA.title < filmB.title) return -1;
      else if (filmA.title > filmB.title) return 1;
      else return 0;
    });
  
  const firstTwentyList = abcList.map(abcList => abcList.title);
  return Object.values(firstTwentyList).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const hToMin = [...movies];

  
  return hToMin;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null;

  const bestYear = [...movies];

  return "The best year was " + year + "with an average score of " + aveScore;
}



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
