class UrlShortener { 
  constructor() {
    this.shortUrls = new Map();
    this.longUrls = new Map()
  }
  
  shorten(url) {
    let shortUrl = this.longUrls.get(url);
    if (shortUrl) return shortUrl;
  
    shortUrl = this.createShortUrl();
    this.longUrls.set(url, shortUrl);
    this.shortUrls.set(shortUrl, url);
    return shortUrl; 
  }
  
  redirect(url) {
    return this.shortUrls.get(url);
  }
  
  createShortUrl() {
    let url = "";
    do {
      url = "short.ly/" + this.getRandomString(4);  
    } while (this.shortUrls.get(url))
    return url;
  }
  
  getRandomString(len) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let randomStr = '';
    for (let i = 0; i < len; i++) {
      randomStr += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return randomStr;
  }
}