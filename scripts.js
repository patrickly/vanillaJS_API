/* var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //Begin accessing JSON data here
    //console.log(this.response);
    var data = JSON.parse(this.response);
    // console.log(data);
    //console.log("status: " , request.status);
    
    if(request.status >= 200 && request.status < 400){
        data.forEach(movie => {
            // log each movie's title
            console.log(movie.title);
        });
    } else {
        console.log('error');
    }
}

request.send(); */

const app = document.getElementById('root');
console.log("app: " + app); // concatenation
console.log("app: " , app); // app is the 2nd argument

const logo = document.createElement('img');
// console.log(logo);
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
console.log(container);
app.appendChild(logo);
app.appendChild(container);