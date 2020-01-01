const path = require('path');

module.exports = (env) => {
    console.log(env)
    return {
        entry: {
            bundle: './src/app.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    }
}