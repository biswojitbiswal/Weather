const apikey ="cff9288e985a156d4a20b5f4be9ee3f7";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const inputt = document.querySelector("input");
const serchbtn = document.querySelector("button");
const wheather = document.querySelector(".wheather");
const show = document.querySelector(".show");
const icon = document.querySelector(".icon");
const Close = document.querySelector(".close");


async function checkwheather(city){
    let res = await fetch(url + `&q=${city}` + `&appid=${apikey}`);
    // console.log(res.status)
    if(res.status == "404"){
        wheather.style.display="none";
        // document.querySelector("#info").style.display="none";
        document.querySelector(".error").style.display="block";
        setInterval(()=>{
            document.querySelector(".error").style.display="none";
            // window.location.reload();
        },2000)
        
    } else {
        let data = await res.json();
        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =data.wind.speed + " " + "km/h";
        


        if(data.weather[0].main == 'Clouds'){
            icon.src = "img/clouds.png";
        } else if (data.weather[0].main == 'Clear'){
            icon.src = "img/clear.png";
        } else if(data.weather[0].main == 'Rain'){
            icon.src = "img/rain.png";
        } else if(data.weather[0].main == 'Mist'){
            icon.src = "img/mist.png";
        } else if(data.weather[0].main == 'Drizzle'){
            icon.src = "img/drizzle.png";
        } else {
            icon.src = "img/snow.png";
        }
        
        document.querySelector(".wheather").style.display="block";
        // document.querySelector("#info").style.display="flex";
        document.querySelector(".error").style.display="none";
    }

    // inputt.addEventListener('click', () => {
    //     inputt.value="";
    // });
}

serchbtn.addEventListener('click', () => {
    checkwheather(inputt.value);
    
})


Close.style.display ="none";
function Clear()
{
    inputt.value="";
}

setInterval(()=>
{
    if(inputt.value!="") 
    {
        Close.style.display="block";
    }
    else 
    {
        Close.style.display = "none";
    }
},100)