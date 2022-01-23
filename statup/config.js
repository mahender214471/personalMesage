module.exports = async () => {
    if(!process.env.mongoPath){console.log(`mongo connection string not found`)}
    if(!process.env.cookiePrivateKey){console.log(`jwt private key not found`)}
}