'use strict'
//Com o ECMAScript6 ele ja usa const e let ao inves de var
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'), 
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    } 
}

