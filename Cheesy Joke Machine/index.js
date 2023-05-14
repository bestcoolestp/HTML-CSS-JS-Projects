const btnEL = document.getElementById('btn');
const jokeEL = document.getElementById('joke');

const apiKey = "Gu/qs4dP7avxunLCyRjHqw==yvMAc47mTkQmDa2r";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json"
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        jokeEL.innerText = "Loading...";
    btnEL.disabled = true;
    btnEL.innerText = "Loading...";

    const response = await fetch(apiURL, options)
    const data = await response.json();
    btnEL.disabled = false;
    btnEL.innerText = "Get Another Joke";
    jokeEL.innerText = data[0].joke;
    } catch (error) {
        jokeEL.innerText = "An error occurred. Please try again later.";
        btnEL.disabled = false;
        btnEL.innerText = "Get Another Joke";
    }

    
}

btnEL.addEventListener('click', getJoke);