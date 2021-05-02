import Service from '@ember/service';
import fetch from 'fetch';
import ENV from 'jomb-ember/config/environment';

export default class BookDetailerService extends Service {
  search(query) {
    if (!query) return;

    let url = `${ENV.APP.GOOGLE_API_URL}?q=${encodeURIComponent(query)}&key=${ENV.APP.GOOGLE_API_KEY}`;
    
    return fetch(url).then(res => {
      return res.json();
    });
  }
}
