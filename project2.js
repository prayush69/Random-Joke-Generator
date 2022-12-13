
searchBtn1=document.getElementById('btn');
jokeContainer=document.getElementsByClassName('container');

finalURL='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let getJoke=()=>{
    fetch(finalURL)
    .then(response=>response.json())
    .then(data=>{console.log(data.joke)
    result.innerHTML=`${data.joke}`
    
    })

}

searchBtn1.addEventListener('click',getJoke);




   

   


