# Jackie
A react native based app for health care assistance [Proposal](https://github.com/rajagopal28/healthcare-server/blob/master/proposal.md)

The related web repository can be viewed ==> [Web](https://github.com/rajagopal28/healthcare-server)

Download the Mobile App [Here](https://file.ac/h-50abi7Tj0/com.jackie.ai.apk)
## Problem at hand
Our major objective is to create an environment that helps us be independent and be healthy. Being independent makes us feel empowered all the time. People tend to forget things more often. But when it comes to health we got to be vigilant. Diabetic people need constant attention and care when it comes to health checks and medications. Level-2 Diabetes often required periodic insulin intake to keep glucose level balanced. They should also maintain a timely and proper diet that goes hand in hand with their medication schedules. We live in a busy world where we cannot be around all the time. With that being said we can deep dive into our proposed solution.

## The proposed solution
The proposed solution is to have a multi-platform environment that helps you take care of yourself. We intend to build a personal assistant based ecosystem that helps you keep track of your health by monitoring your body vitals viz., glucose, pressure, pulse and temperature, perform tasks like book appointments, view or remind you about your booked appointments, keep track of you medicine prescriptions, intake and personal medicine inventory management in a more nurturing and enjoyable way.


## Proposed architecture
![Mobile Block](https://file.ac/h-50abi7Tj0/image01.png)
This entire application has 3 essential components
- The centralized healthcare server which holds patient data such as vital information, medicine intake logs, appointments, prescriptions etc.
- The mobile app + wearable component - with this combo we can collect user information such as vitals, medicine intake activities, reminders on appointments and medicine intakes etc.
- The Alexa skill - which is essentially coupled with the data back-end to personally serve people in managing their vitals, appointments and medicine intake.


## Major User cases
As part of this we build this Mobile application
- That notifies you about medicine inventory alerts
- That notifies you about upcoming appointments
- That keeps track of your vitals
- That notifies doctors when vital levels are abnormal

### Home:
![Home](https://file.ac/h-50abi7Tj0/image300.png)
### User Login:
![User Login](https://file.ac/h-50abi7Tj0/image301.png)
### User Home:
![User Home](https://file.ac/h-50abi7Tj0/image302.png)
### Doctor Appointments:
![Doctor Appointments](https://file.ac/h-50abi7Tj0/image303.png)
### Out Patients:
![Out Patients](https://file.ac/h-50abi7Tj0/image304.png)
### Vitals Input:
![Vitals Input](https://file.ac/h-50abi7Tj0/image305.png)
### Vitals Logs:
![Vitals Logs](https://file.ac/h-50abi7Tj0/image306.png)
### Medicines To Take:
![Medicines To Take](https://file.ac/h-50abi7Tj0/image307.png)
### Log medicine intake:
![Log medicine intake](https://file.ac/h-50abi7Tj0/image308.png)
### User Logout:
![User Logout](https://file.ac/h-50abi7Tj0/image309.png)
![User Logout](https://file.ac/h-50abi7Tj0/image310.png)
### Doctor Login:
![Doctor Login](https://file.ac/h-50abi7Tj0/image311.png)
### Doctor Home:
![Doctor Home](https://file.ac/h-50abi7Tj0/image312.png)
### Doctor Notifications:
![Doctor Notifications](https://file.ac/h-50abi7Tj0/image313.png)
### Out Patients:
![Out Patients](https://file.ac/h-50abi7Tj0/image314.png)
### Doctor Notifications:
![Doctor Notifications](https://file.ac/h-50abi7Tj0/image315.png)
![Doctor Notifications](https://file.ac/h-50abi7Tj0/image316.png)
![Doctor Notifications](https://file.ac/h-50abi7Tj0/image317.png)
## Technical Nuances
## Mobile:
* **React Native** was chosen because of its capabilities to develop hybrid apps that support both android and iOS with the same code base.
* It also helped us big time in bringing some of the native capabilities that are more specific to the android and iOS platforms. We had several developer friendly benefits that come with react-native.
* The setup was so easy to reload the code changes without even building the app continuously. It also provides platform specific styling and content that can be co-exist but will be chosen in the run time.
* React native uses flex styles that help us easily align the components without bothering about the complicated layouts and grids that usually slow down the development with requirement of UI development skills.
* **GCM mobile:** We required push notification support which was obtained in a quick whiff by the inclusion of react-native-push-notification plug-in.  
## IoT and Wearables:
* **Wearable:** We have just started with the wearable development. So far we have found that it completely requires native code and it works in both pull and push modes in which the data is transmitted to the mobile app or the google server as such which holds the user fitness data as part of it google fit applications.
* **Connected Devices:** Regarding IoT, we intend to first integrate with glucose meter as this application was primarily intended for diabetic patients. We have not actively started development but we have a deep research and identified the requirements to chose the type of device required and also about the aurdino boards and development setup that we need to integrate the required capabilities into the system. So far we also intend to integrate the device through aurdino to the actual mobile device via bluetooth modules.


## Key Learnings
- How to create and publish an alexa skill by leveraging the voice activated technologies in a smooth and effective way.
- React native is adaptive, flexible enough to let both native as well as hybrid code and features by binding them together with their coherant data flows and models.
- Ruby on rails is the quickest script based web application framework that can be developer friendly as well as feature friendly with their ability to scale and balance.

## References
- https://facebook.github.io/react-native/
- https://www.toptal.com/ios/cold-dive-into-react-native-a-beginners-tutorial
- https://facebook.github.io/react-native/docs/handling-text-input.html
- https://facebook.github.io/react-native/docs/navigation.html
- https://reactnavigation.org/docs/navigators/navigation-prop
- https://facebook.github.io/react-native/docs/asyncstorage.html
- http://rationalappdev.com/react-native-list-app-complete-how-to-guide/
- https://code.tutsplus.com/tutorials/get-started-with-layouts-in-react-native--cms-27418
- https://shellmonger.com/2017/05/12/building-a-login-form-in-react-native-with-redux/
