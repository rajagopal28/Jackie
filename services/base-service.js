const BASE_URL = 'https://healthcare-server.herokuapp.com/';

class BaseService {
  static getData(path, params, success, done) {
    let queryString = '';
    for(let key in params){
      if(!params.hasOwnProperty(key)) continue;
      if(queryString !== '') {
        queryString += '&';
      }
      queryString += key + '='+params[key];
    }
    console.log(queryString.toString());
    fetch(BASE_URL + path + '?' + queryString, {method: "GET"})
     .then((response) => response.json())
     .then((response) => {
       success(response);
     }).done(() => {
       done();
     });
  }
  static postData(path, body, success, done) {
    fetch(BASE_URL + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
     }).then((response) => response.json())
     .then((response) => {
       success(response);
     }).done(() => {
       done();
     });
  }
}

export default BaseService;
