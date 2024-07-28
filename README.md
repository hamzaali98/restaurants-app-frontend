# Restaurants Nearby

This project allows users to view nearby restaurants (within a 5km radius). Users can view restaurant details and see
them on a map.

## Key Components

- **The application is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**
- **Integration with Redux-Saga**: The project uses Redux-Saga for state management to handle side effects in a
  predictable and manageable way.
- **Nearby Restaurants**: Users can view restaurants within a 5km radius.
- **Restaurant Details**: Users can view detailed information about each restaurant.
- **View on Map**: Users can view the restaurant location on Google Maps.

## Requirements

- **Node.js**: Version 18 or higher is required. You can download it from
  the [official Node.js website](https://nodejs.org/).

## Steps to Run the Project Locally

### 1. Install Project Dependencies

In the project directory, run `npm install`.\
This will install all the packages used by the project and their dependencies.

### 2. Get a Google Maps API key

In order to get a Google Maps API key:

- Navigate to [Google Cloud Console](https://console.cloud.google.com/)
- Create an API key that can access the following APIs:
    - Maps JavaScript API
    - Places API

### 3. Add the API Key to the Project

In the root directory of the project, create a `.env` file.\
In the `.env` file, assign the **API key** generated to a variable `REACT_APP_API_KEY`.

```env
REACT_APP_API_KEY="XXXXXXXXXXXXX"

```

### 4. Start the Backend Server

Navigate to the `backend` directory in the project.\
Run `node server.js` or `npm run start-server` to start the backend server.

The backend server will start on [http://localhost:5000](http://localhost:5000).


### 5. Start the App

Run `yarn start` or `npm start` to run the app.

The server will start on [http://localhost:3000](http://localhost:3000).

Allow the webpage <strong>location access</strong> when prompted by the browser, in order to view <strong>restaurants
nearby</strong>.
