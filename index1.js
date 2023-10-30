var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apiKey = "0e44cb30253bcf2f111b0a8ee08575dd";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var namevel = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerHTML = 'Weather of' + '<span>' + namevel + '</span>';
            temp.innerHTML = 'Temperature: ' + '<span>' + convertion(temperature) + '°C' + '</span>';
            description.innerHTML = 'Sky Conditions: ' + '<span>' + descrip + '</span>';
            wind.innerHTML = 'Wind speed: ' + '<span>' + windSpeed + ' km/h' + '</span>';
        })
        .catch(err => alert('You entered the wrong city name'));
})
