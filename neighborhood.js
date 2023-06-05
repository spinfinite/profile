console.log("Hello Neighborhood")

const randomPlaceButton = document.querySelector('#random')

let placeArray = ['Webster Hall', 'Mamouns', 'Nazca', 'Hruska']

const randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)]

randomPlaceButton.addEventListener('click', () => {
    alert.randomPlace()
})

//console.log(randomPlace)