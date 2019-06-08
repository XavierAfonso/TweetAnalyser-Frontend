<div style="text-align: justify">  

> Authors       : Dejvid Muaremi, Mentor Reka, Xavier Vaz Afonso    
> Professor     : Nastaran Fatemi   
> Assistants    : Maxime Lovino , Miguel Santamaria   
> Date          : 05.05.2019  

# Tweet Analyser client

__The server can be found [here](https://github.com/XavierAfonso/TweetAnalyser).__

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This web client allows you to identify the feelings that can be found in the replies of a tweet.
Once the user has authenticated himself to the server, he will be able to enter the twitter ID of one or more users for which he want to see the reactions to the last tweets they published.

The results are displayed in the analysis page as a post with a coloured dot that indicates the general feeling.

The colors goes as the following :
- __Red__ The reactions are really bad.
- __Orange__ The reactions ar bad.
- __Grey__ The reactions are neutral.
- __Blue__ The reactions are good.
- __Green__ The reactions are really good.

![View of the analysis page](./img/TweetAnalyser.PNG "View of the analysis page")

It is also possible to look at the details of it on mouse over, the exact number of the pile will be shown.

![Detailed analysis](./img/pres-cli.PNG "Detailed analysis")

## Available Scripts

In the project directory, you can run:

### `npm install`
To install the npm packages, this must be done at least once when you pull the project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
