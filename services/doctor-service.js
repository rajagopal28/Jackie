import BaseService from './base-service';

class DocterService extends BaseService {
  static login(params, cb) {
    super.postData('doctors/signin.json', {doctor: params}, cb,
      () =>{
        console.log('Doctor Logged in!!');
      });
  }
  static getDoctorNotifications(params, cb) {
    super.getData('doctor_notifications.json', params, cb,
      () =>{
        console.log('Doctor Notifications Loaded!!');
      });
  }
}

export default DocterService;
