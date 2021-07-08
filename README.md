# Learning Server Rendered React Application with Express 

## Thanks to [Daniel Stern](https://github.com/danielstern/) for creating this Plural Sight course [Redux Playlist](https://app.pluralsight.com/library/courses/server-rendering-react-components)

### Overview
This simple application serves a server-rendered React application to the client. The application is made up of only a single component, but has full interactivity.
* It's an Express server that fetches the Q&A and then updates the upvotes with the +/- button
* Data is coming from in memory JSON Object
* In client using `ReactDom.hydrate()` to enable functionality/interactivity on the client side.

### Usage
To preview the app, first install the necessary dependencies:

`npm install`

Then, build the client code and start the server with one step using

`npm start`

The application should now be visible at `http:localhost:7777`.