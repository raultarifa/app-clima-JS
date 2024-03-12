
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key='7c26983c059e4f6fb9415d457591ef11'

let difKelvin = 273.15

//let ciudad = "Londres"

//Añadimos al boton, el "click" para que inicie la busqueda
document.getElementById('bottonBusqueda').addEventListener('click',() =>{ 
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}


function mostrarDatosClima(data){
    //console.log(data)
    const divDatosClima= document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre= data.name
    const temperatura = data.main.temp - difKelvin
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    //ahora creamos los elementos,es decir, los H2,Parrafos......

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const   temperaturaCiudad = document.createElement('p')
    temperaturaCiudad.textContent = `La temperatura es : ${Math.floor(temperatura)}ºC`

    const iconociudad = document.createElement('img')
    iconociudad.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionCiudad = document.createElement('p')
    descripcionCiudad.textContent = `La descripción metereológica es: ${descripcion}`

    // Ahora añadimos los elementos ya creados al Div correspondiente
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaCiudad)
    divDatosClima.appendChild(iconociudad)
    divDatosClima.appendChild(descripcionCiudad)

} 
