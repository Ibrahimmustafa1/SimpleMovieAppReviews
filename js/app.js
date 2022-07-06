// var myHttp = new XMLHttpRequest();

// myHttp.open("GET", "https://jsonplaceholder.typicode.com/posts")
// myHttp.send();
// var allposts;
// myHttp.addEventListener("readystatechange", function ()  {
//     if (myHttp.readyState == 4) {
//         allposts = JSON.parse(myHttp.response)
//        display();
//     }
// })

// function display(){
//     var cartonna = ` `;
//     for (var i = 0; i < allposts.length; i++) {
//         cartonna += ` 
//          <div class="col-md-4">
//          <h4>${allposts[i].title}</h4>
//          <p>${allposts[i].body}</p>
//         </div>`
//     }
//     document.getElementById("cont").innerHTML=cartonna;
// }
let cont=document.getElementById("cont")
let movie = document.getElementById("movie");
var idx;
idx=JSON.parse(localStorage.getItem("idx"));
let myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://api.themoviedb.org/3/trending/movie/day?api_key=f1aca93e54807386df3f6972a5c33b50");
myHttp.send();
let trendMovies = [];
if(localStorage.getItem("movies")!=null)
trendMovies=JSON.parse(localStorage.getItem("movies"))
function start(){
myHttp.addEventListener("readystatechange", () => {
    if (myHttp.readyState == 4)
        trendMovies = JSON.parse(myHttp.response).results;
        localStorage.setItem("movies",JSON.stringify(trendMovies));
         displayMovies();

})
}


function displayMovies() {
    let cartona = ` `
    for (let i = 0; i <trendMovies.length; i++) {
        cartona += ` 
     
               <div class="col-xl-3 col-lg-4 col-md-6 card-movie">
              
               <div class="poster w-100 position-relative overflow-hidden">
                 <img src="https://image.tmdb.org/t/p/w500${trendMovies[i].poster_path}" alt="" class="w-100">
                 <div class="layer">
                 <i class="fas fa-star"></i>
                 <h4>${trendMovies[i].vote_average}</h4>
                 <h4>${trendMovies[i].popularity}</h4>
                <a class="btn btn-success mt-4" href="html/movie.html" onclick=sendidx(${i})>viewDetails</a>   
                 </div>
                 </div>
                 <h4>${trendMovies[i].title}</h4>
                 <p>${trendMovies[i].release_date}</p>
               
              </div>`
     
    }
cont.innerHTML = cartona;
}

function sendidx(i){
    idx=i;
    localStorage.setItem("idx",JSON.stringify(idx));
}

function Search(){
    let cartona = ` `;
  for(let i=0;i<trendMovies.length;i++){
      if( trendMovies[i].title.includes(search.value)){
        cartona += ` 
     
        <div class="col-xl-3 col-lg-4 col-md-6 card-movie">
        <div class="brdr">
        <div class="poster w-100 position-relative overflow-hidden">
          <img src="https://image.tmdb.org/t/p/w500${trendMovies[i].poster_path}" alt="" class="w-100">
          <div class="layer">
          <i class="fas fa-star"></i>
          <h4>${trendMovies[i].vote_average}</h4>
          <h4>${trendMovies[i].popularity}</h4>
          <a class="btn btn-success mt-4" href="html/movie.html">viewDetails</a>
          </div>
          </div>
          </div>
          <h4>${trendMovies[i].title}</h4>
        
        
       </div>`
      }

  }
  cont.innerHTML = cartona;
}

function moviedetails() {
    let cartona = ` <div class="col-md-3">
    <div class="movie-img">
    <img src="https://image.tmdb.org/t/p/w500${trendMovies[idx].poster_path}" alt="" class="w-100">
    </div>
</div>
<div class="col-md-6">
    <h2>${trendMovies[idx].title}</h2>
    <h2>${trendMovies[idx].vote_average} <i class="fas fa-star"></i></h2>
    <p>${trendMovies[idx].release_date}</p>
</div>

<div class="row mt-4">
    <div class="col-md-12 pl-4">
        <h1>Decription :</h1>
        ${trendMovies[idx].overview}
    </div>`
    movie.innerHTML = cartona;
console.log(idx)
}