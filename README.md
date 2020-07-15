# 'Oddam w dobre ręce' - application
A responsive app enabling the registered users to give unnecessary items to trusted institutions. This project is the part of the Coders Lab course.

![Project screenshot](/src/assets/project_screen.jpg)

# Live demo
somelink

# Features
* Responsive Web Design (RWD) modes:
  * mobile (down to 300px width)
  * tablet
  * desktop
* Grouped list of institutions as tabs with pagination
* Contact form
* Authorization dialogs:
  * sign in
  * sign up
  * sign out
* Stepper form (shows progress through numbered steps) containing i.a.:
  * customized checkboxes and selects
  * selecting toggle buttons
  * date and time pickers
* Smooth scrolling and animations
* Loading screen stretched over sections downloading data from Firebase (until elements load)

# Information
* The app is a result of the 'Portfolio Lab' workshop as the part of the Coders Lab course.
* This project was made as a **mapping of an existing UX project** and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Front-end was created with React and back-end is handled by Firebase.
* For more details see the 'Technologies' section.

# Technologies
* Redux
* Redux Thunk
* Redux Form
* React, based on:
  * Hooks
  * JSS
  * HOCs
* React Router
* React Material-UI
* React Fetch (to send contact form to Coders Lab's API)
* React Scroll
* Firebase
* HTML
* Fonts:
  * OpenSans
  * Merriweather

# Download and Install
* Use the link from the 'Clone or download' button to download the project.
* In the project directory, type:
```
npm i
```
to install necessary dependencies.
* Run:
```
npm start
```
to start the app in the development mode.
* Open http://localhost:3000 to view it in the browser.