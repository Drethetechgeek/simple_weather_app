const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

const apiKey = "f860554487a3838d35438f5a84259c46";
const inputVal = input.value;

const url = `https://api.openweathermap.org/data/3.0/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // do something with the data
    })

    .catch(() => {
        msg.txtContent = "Please search for a valid city";
    });

const {main, name, sys, weather} = data;
const icon = `https://openweathermap.org/img/wn/${
    weather[0]["icon"]
}@2x.png`;

const li = document.createElement("li");
li.classList.add("city");
const markup = ` 
<h2 class="city-name" data-name="${name},${sys.country}"> 
<span>${name}</span> 
<sup>${sys.country}</sup> 
</h2> 
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> 
</div> 
<figure> 
<img class="city-icon" src=${icon} alt=${weather[0]["main"]}> 
<figcaption>${weather[0]["description"]}</figcaption> 
</figure> 
`;
li.innerHTML = markup;
list.appendChild(li);
