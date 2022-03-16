if (process.env.NODE_ENV === 'production') {
    // in production - return the prod set of keys
    module.exports = require ('./prod');
} else {
    // in developement = return the dev keys
    module.exports = require ('./dev');
}