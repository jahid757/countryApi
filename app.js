fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        displayCountries(data)
    })

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')


    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = "country"
        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Show More</button>
        `;
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    })
}




const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => renderCountryInfo(data[0]))
}

function renderCountryInfo(country){
    console.log(country);
    const countryDetail = document.getElementById('countryDetail');
    countryDetail.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">
    `
}
