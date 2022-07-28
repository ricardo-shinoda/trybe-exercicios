const endPoint = 'https://api.exchange.host/latest?base=';

const fetchCurrency = (moeda) => {
    fetch(`${endPoint}${moeda}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

fetchCurrency('BRL')