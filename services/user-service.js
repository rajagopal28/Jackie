import BaseService from './base-service';

class UserService extends BaseService {
  static getUsers(cb) {
    super.getData('users.json', {}, cb,
      () =>{
        console.log('Users Loaded!!');
      });
  }
  static getDoctorAppointments(cb) {
    super.getData('doctor_appointments.json', {}, cb,
      () =>{
        console.log('Doctor Appointments Loaded!!');
      });
  }
}

export default UserService;
