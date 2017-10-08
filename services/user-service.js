import BaseService from './base-service';

class UserService extends BaseService {
  static getUsers(cb) {
    super.getData('users.json', {}, cb,
      () =>{
        console.log('Users Loaded!!');
      });
  }
  static login(params, cb) {
    super.postData('users/signin.json', {user: params}, cb,
      () =>{
        console.log('User Logged in!!');
      });
  }
  static logUserVitals(params, cb) {
    super.postData('user_vital_logs.json', {user_vital_log: params}, cb,
      () =>{
        console.log('User Vitals Added!');
      });
  }
  static getDoctorAppointments(params, cb) {
    super.getData('doctor_appointments.json', params, cb,
      () =>{
        console.log('Doctor Appointments Loaded!!');
      });
  }
  static getOutPatients(params, cb) {
    super.getData('in_patients.json', params, cb,
      () =>{
        console.log('Out Patients Loaded!!');
      });
  }
  static getVitalLogs(params, cb) {
    super.getData('user_vital_logs.json', params, cb,
      () =>{
        console.log('Vital Logs Loaded!!');
      });
  }
  static getPrescribedMedicines(params, cb) {
    super.getData('prescribed_medicines.json', params, cb,
      () =>{
        console.log('Prescribed Medicines Loaded!!');
      });
  }
}

export default UserService;
