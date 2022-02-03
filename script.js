let weather ={
    apiKey:"3c72bb8fecd3b114a49c466e8534bfaf",
    fetchWeather:function(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            +city
            +'&units=metrics&appid=' 
            +this.apiKey
            )
        .then(response => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name} = data;
        // const {desription} = data.weather[0].main;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {main} = data.weather[0];

        // console.log(name,  desription, temp, humidity, speed);
        document.querySelector('.city').innerText= 'Weather in ' + name;
        // document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
        // document.querySelector('.main').innerText = main;
        document.querySelector('.temp').innerText = temp + ' K';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + 'km/h';
    },
    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }

};
document
    .querySelector('.search button')
    .addEventListener('click', () => { 
    weather.search();
    });

//Enter on search
document.querySelector('.search-bar').addEventListener('keyup', (e) => {
    if (e.key === 'Enter')
    {
        weather.search();
    }
});
weather.fetchWeather('Kisumu');