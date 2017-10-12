# Jackie
A react native based app for health care assistance
[Proposal](https://github.com/rajagopal28/healthcare-server/proposal.md)
The related web repository can be viewed ==> [Web](https://github.com/rajagopal28/healthcare-server)
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


## Technical Nuances
- The mobile application we built in React Native also took a considerable amount of effort as it significantly tried to mimic real-world interactions by being close to the users in all their activities.


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
