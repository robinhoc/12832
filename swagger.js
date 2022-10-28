const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointFiles = ['./app-lab01.js']

swaggerAutogen(outputFile, endpointFiles)