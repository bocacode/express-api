const express = require('express')
const { getCars, getSingleCar } = require('./src/cars')

const app = express()

app.get('/cars/:carId', getSingleCar)
app.get('/cars', getCars)

app.get('/hello', (request, response) => {
    response.send('🌎🌎🌎 Hello World! 🌎🌎🌎')
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})