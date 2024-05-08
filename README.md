# COMS 3102

Created the backend of my midterm keeper app project. Functionality: the data doesn’t go away upon refreshing since I added the backend and database. I also added an edit mode to edit any note.

Technologies: used React, Node, MongDB, Mongoose, Express, Visual Studio Code to carry out project. 

Backend: the backend has a models and routes folder, containing note.js and notes-routes.js respectively. Note.js (models) defines the database schema using Mongoose. It defines the structure of the note object to be stored in the database. Notes-routes.js defines routes for handling create, update, delete operations on notes.

Frontend: Most notably, App.jsx which interacts with the backend to manage the notes. It uses axis for making http requests to the backend.

addNote function: sends a post request to the backend to add a new note and then updates the notes state.
- when the add button is pressed, it sends a post request to the backend server for processing
- The function then gets a response from the server, and if the server's response is successful the note is added both to the ui and the database

deleteNote: sends a delete request to the backend to delete an existing note
-  takes the id parameter which specifies exactly which note to be deleted
-  when the delete button of a note is pressed, it sends a delete request to the backend server for processing
-  function processes the server's response to the delete function, if successful the given note is deleted from the database and UI

Frontend Connection
post: - Receives the post request from the App.jsx file, proccesses then if successful, it sends a response to the App.jsx's addNote function (allowing for the note and its contents to be displayed to the user)
delete: - Receives the delete parameter from the App.jsx file with the id. Since the note to be deleted is also delted from the database, we must check and use the ObjectId function to delete the specified note from the database. If the deletion is successful, it sends a response back to the frontend server which then removes the deleted note from the list and UI.


Followed Shivam’s tutorial, a big thank you to the TA’s for helping me with this project!

 https://www.youtube.com/playlist?list=PLCKLPJHmXyU_VXHlXJNoiteyidITvZXMX


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
