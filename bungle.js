(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Izhevsk');
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d6e481919bcce169184f16536bb64bd8&units=metric')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);
            document.querySelector('.city')
            .innerText = weather.name;
            document.querySelector('.date')
            .innerText = new Date;
            document.querySelector('.tempValue').innerText = Math.round(weather.main.temp) + " ° ";
            document.querySelector('.feels_like').innerText = "feels like " + Math.round(weather.main.feels_like)  + " ° ";
            document.querySelector('.weather').innerText = weather.weather[0].description;
            document.querySelector('.humidity').innerText = "humidity " + weather.main.humidity + " % ";
            document.querySelector('.visibility').innerText = "visibility " + weather.visibility + " m ";
        })
        .catch(err => console.log(err));
}
},{}]},{},[1]);
