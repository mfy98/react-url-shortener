export const urlShortener= () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 5;
    let shortURL = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortURL += characters.charAt(randomIndex);
    }
  
    return shortURL;
  }
  const originalURL = 'https://www.example.com/some/long/url';
  const shortenedURL = urlShortener();
  
