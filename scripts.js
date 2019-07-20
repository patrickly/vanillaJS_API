const app = document.getElementById('root');


const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

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
            //console.log(movie.title);
            //console.log(movie.description);
            //console.log(movie.description);

            const card = document.createElement('div');
            card.setAttribute('class','card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;
            //console.log(h1);

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...z`; // added a temporary z character 
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            // template literals

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);


        });
    } else {
        //console.log('error');
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();

