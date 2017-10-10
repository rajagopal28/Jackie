import BaseService from './base-service';

class DocterService extends BaseService {
  static login(params, cb) {
    super.postData('doctors/signin.json', {user: params}, cb,
      () =>{
        console.log('Doctor Logged in!!');
      });
  }
}

export default DocterService;
