let btnDOM = document.getElementById("btn");
let jokeDOM = document.getElementById("joke");

let apiKey = "TC0A9oPf90UCZGI8thQMLQ==RSnbn4djtIknIo5l";

let options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

let apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeDOM.innerText = "Updating...";
    btnDOM.dissabled = true;
    btnDOM.innerText = "Loading";
    let response = await fetch(apiURL, options);
    let data = await response.json();

    btnDOM.dissabled = false;
    btnDOM.innerText = "Tell Me A Joke";

    jokeDOM.innerText = data[0].joke;
  } catch (error) {
    jokeDOM.innerText = "An error Happened, try again later";
    btnDOM.dissabled = false;
    btnDOM.innerText = "Tell Me A Joke";
    console.log(error);
  }
}
btnDOM.addEventListener("click", getJoke);
