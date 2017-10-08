const BASE_URL = 'https://healthcare-server.herokuapp.com/';
class BaseService {
  static getData(path, params, success, done) {
    fetch(BASE_URL + path, {method: "GET"})
     .then((response) => response.json())
     .then((response) => {
       success(response);
     }).done(() => {
       done();
     });
  }
}

export default BaseService;
