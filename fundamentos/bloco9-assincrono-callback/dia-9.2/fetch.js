const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json()) // receive de return if sucessfully
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo de errado não está certo \n${error}`));  // receive de error if not sucessfully
    // ir error all THEN are passed without checking

}

fetchJoke();