const kelvin = document.getElementById('kelvin');
const zip = document.getElementById('zip');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const visibility = document.getElementById('visibility');
const condition = document.getElementById('condition');
const body = document.getElementById('body');
visibility.style.display = "none";
//let visibility
let background = [
    {image:"./img/snow.jpeg"},
    {image:"./img/rain.jpeg"},
    {image: "./img/sunnyDay.jpeg"},
    {image: "./img/cloudy.jpeg"},
    {image: "./img/Lightening.jpeg"}

];
function backgroundImg () {
    console.log(condition.textContent);
    switch (condition.textContent) {
        
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
        case "overcast clouds":
            document.body.style.backgroundImage = "url('/img/cloudy.jpeg')"; 
            break;
        case "clear sky":
            document.body.style.backgroundImage = "url('/img/sunnyDay.jpeg')";
            break;
        case "light rain":
        case "moderate rain":
        case "heavy intensity rain":
        case "very heavy rain":
        case "extreme rain":
        case "freezing rain":
        case "light intensity shower rain":
        case "shower rain":
        case "heavy intensity shower rain":
        case "ragged shower rain":
        case "light intensity drizzle":
        case "drizzle":
        case "heavy intensity drizzle":    
        case "light intensity drizzle rain":    
        case "drizzle rain":   
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle": 
             document.body.style.backgroundImage = "url('/img/rain.jpeg')";
             break;
        case "light snow":
        case "Snow":
        case "Heavy snow":
        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
        case "Shower snow":
        case "Heavy shower snow":
            document.body.style.backgroundImage = "url('/img/snow.jpeg')";
            break;
        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "light thunderstorm":
        case "thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
            document.body.style.backgroundImage = "url('/img/Lightening.jpeg')";
            break;
        default: 
            document.body.style.backgroundColor = "aqua";
    } 
};

btn.addEventListener("click", function () {
    console.log(zip.value);
    //defends
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=842f310df546f3f6576c58901e06220a`;
    //let newUrl = url.replace('thing', zip.value);
    
    axios.get(url)
    .then(function (response) {
       visibility.style.display = "block";
        let k = response.data.main.temp;
            kelvin.textContent = k + ' k';
        let f = Math.round(((k-273.15)*1.8)+32);
            fahrenheit.textContent = f + ' f';
        let c = Math.round(k-273.15);
            celcius.textContent = c + ' c';
        let con = response.data.weather[0].description;
            condition.textContent = con;
            backgroundImg ();

        let town = response.data.name;
            city.textContent = town;
        
        
        // handle successnpm get response.data.main.temp
        console.log(response);
    })
    .catch(function (error) {
            alert ("Invalid Zip")
        console.log(error);
    })
    
  }) 
  
  //btn.addEventListener("onclick", function btn() {
    //async valid zip from input
        //get data from input    
            //if valid.. after click
                //Send data "zip" to api
            //if NOT valid.. after click
                //"alert"
                    //get city, temp, condition from AIP
                        //showOutput 
                            //city
                                //replace city.textContent with data
                            //temp                   
                                //function temperature (kelvin, fahrenheit, celcius){. Maybe a for loop to loop through the temperature container
                                    //let k = kelvin;
                                        //c + 273.15 = k

                                            //replace k.textContent with Math conversion

                                    //let f = fahrenheit;
                                        //(c × 9/5) + 32 = f

                                            //replace f.textContent with Math conversion

                                    //let c = celcius;
                                        //c + 0 = c || c = c

                                            //replace c.textContent with Math conversion

                                //} 
                            //condition
                                //replace condition.textContent with data 
                                // **extra** if rain background img rain etc.

//}) 

  