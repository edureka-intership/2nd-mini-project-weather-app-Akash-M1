function callWeather(){
    var city= document.getElementById("inpbox").value;
    var url="http://api.weatherapi.com/v1/current.json?key=b716b288e7794ecf94144234222709";
    url=url+"&q="+city+"&aqi=no";
    var fetching=fetch(url, {method: 'GET'});
    fetching.then((response)=>{
        return response.json();
    }).then((data)=>{
        var temp=data.current.temp_c;
        var humidity=data.current.humidity;
        var wind=data.current.wind_kph;
        var condition=data.current.condition.text;
        var icon=data.current.condition.icon;
        document.getElementById("city").innerHTML=city;
        document.getElementById("temp").innerHTML=temp;
        document.getElementById("humid").innerHTML=humidity;
        document.getElementById("wind").innerHTML=wind;
        document.getElementById("cond").innerHTML=condition;
        document.getElementById("condimg").src=icon;
        console.log(data);
    }).catch((error)=>{
        alert("Invalid City Name");
        console.log(`Something went wrong ${error}`);
    });
}
