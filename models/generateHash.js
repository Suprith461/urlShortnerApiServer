const crypto = require('crypto');



 function generateShortUrl(longUrl){
     console.log("LongUrl",longUrl)
    const hash = crypto.createHash("md5").update(longUrl).digest('hex')
    return hash.toString().slice(0,6)
}
module.exports = generateShortUrl