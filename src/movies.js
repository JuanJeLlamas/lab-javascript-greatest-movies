// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let directores = []
  directores =  moviesArray.map(  (element) =>element.director ) 
    

return directores
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    moviesArray.filter (    (pelicula) =>{ 
        if(pelicula.director ==='Steven Spielberg' && pelicula.genre.includes('Drama')   ) {count++}
    }
    

    ) 
    return count





}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }    
      let total = moviesArray.reduce((acc, pelis) => {
        if (pelis.score !== undefined) {
          return acc + pelis.score
        } else {
          return acc
        }
      }, 0) 
      let media = total / moviesArray.length
      let recorte = media.toFixed(2)
      return Number(recorte)
    
     
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

   
          
      let dramatotal = moviesArray.reduce((acc, pelis) => {
        if ( pelis.genre.includes('Drama') && pelis.score !== undefined  ) {
          return acc + pelis.score
        } else {
          return acc
        }
      }, 0)
      
    
  let dramedia = dramatotal / moviesArray.length
  let simplitwo = dramedia.toFixed(2) 
   
  
  return Number(simplitwo)
    
    }





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 
function orderByYear(moviesArray) {

    pelisArr = structuredClone(moviesArray)
    pelisArr.sort( (elem2, elem1) => {
       
        if (elem2.year < elem1.year) {
          return -1
        } else if (elem2.year > elem1.year) {
          return 1
        } else { 
          return -1
        }
      } )
      return pelisArr
      





}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   
    pelisArr = structuredClone(moviesArray)
    let count = 0;
pelisArr.sort( (el2 , el1 ) => { 
    
    if(count <= 20 && el1.title > el2.title) {
        count++; return 1;
    } else if (count <= 20 && el1.title < el2.title) {
       count++;
        return -1;
    } else { return 0}


});


return pelisArr


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

let arrayMinutes = structuredClone( moviesArray);
arrayMinutes.forEach( (element, index) => {
    
  
    if (element.duration) {
      console.log("la respuesta a la vida y a todo")
    }
  
    // el forEach nunca espera un return 
    // no hace falta return en forEach
  
  } )
  
  console.log(algo) // undefined




}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
