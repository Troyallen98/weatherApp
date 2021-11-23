const kelvin = document.getElementById('kelvin');
const zip = document.getElementById('zip');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const visibility = document.getElementById('visibility');
const condition = document.getElementById('condition');
const body = document.getElementById('body');
visibility.style.display = "none";
//let visibility


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
            

        let town = response.data.name;
            city.textContent = town;
        //hello
        
        // handle successnpm get response.data.main.temp
        console.log(response.data.name);
    })
    .catch(function (error) {
            alert ("Invalid Zip")
        console.log(error);
    })
    
  }) 
  
  

  