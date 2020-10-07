## Infection Map
### React client with mapbox and mock server

Install client dependencies:

    cd client and npm i

Install server dependencies:

    cd server && npm i
    
To generate mock data(in server directory):

    npm run generate-data
    
In client directory add .env file with

    REACT_APP_MAPBOX_TOKEN={your_mapbox_token}
    
Run server(in server directory):

    npm start
    
Run client(in client directory):

    npm start