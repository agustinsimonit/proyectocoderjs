// Vinculo a la API restcountries y creamos los botones para cada pais.

$("#botonPaisArg").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/arg',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisArg").fadeOut("4000")
        }
    })
})

$("#botonPaisCol").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/col',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisCol").fadeOut("4000")
        }
    })
})

$("#botonPaisBra").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/bra',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name}- <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisBra").fadeOut("4000")
        }
    })
})

$("#botonPaisChi").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/chl',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisChi").fadeOut("4000")
        }
    })
})

$("#botonPaisEsp").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/esp',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisEsp").fadeOut("4000")
        }
    })
})

$("#botonPaisUsa").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/usa',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisUsa").fadeOut("4000")
        }
    })
})

$("#botonPaisMex").click(() => {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha/mex',
        dataType: 'json',
        success: function(apiResponse) {
        let divClima = document.getElementById("apiClima")
        let showInfoPais = document. createElement("div")
        showInfoPais.innerHTML = `
            <h4>Pais: ${apiResponse.name} - <img src="${apiResponse.flag}" width="40px"></h4>  
            <p>Codigo: ${apiResponse.alpha3Code}</p>
            <p>Capital: ${apiResponse.capital}</p>
            <p>Ubicacion: ${apiResponse.region} - ${apiResponse.subregion}</p>
            <p>Poblacion: ${apiResponse.population}</p>
            <p>Moneda: ${apiResponse.currencies.code} - ${apiResponse.currencies.name}</p>
            <p>Idioma: ${apiResponse.languages.nativeName}</p>
        `
        divClima.appendChild(showInfoPais)
        $("#botonPaisMex").fadeOut("4000")
        }
    })
})




