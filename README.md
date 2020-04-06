# Auction-world-MERN
MERN App 

## How to install the app
* Download the zip folder
* Make sure you have mongoDB and npm manager installed on your device.
* Extract the zip folder and go to server directory and do
``npm install`` to install all the node packages required to run the app.
* Now go to client/frontend directory and then again run ``npm install `` to install npm packages required to run frontend(React).
* Open the mongodb server by
`` mongod``
* If you get any error where running ``mongod`` command run 
`` sudo pkill -f mongod ``
then ``mongod`` to kill the previous databases server if opened any.
* Now in order to run React and backend use the following
* First open client/frontend/ and then ``npm start`` to start the react app.
* Create an environmental variables file of name .env 
* Insert 
PORT = 5000
MONGODB = mongodb://localhost:27017/auctionsdatabase
CLOUDINARY_URL=cloudinary://381947556192944:Kn6CZFBU_sGU7dEM8TrU0iTDFlQ@dqxmh2ok3 
inside .env and save.
* IMPORTANT - Since the repository is private and only used by me and team at iris, I have not hidden my keys (they are in server.js file.). If you want you can use your own cloudinary keys to avoid uploading photos to my cloudinary cloud.
* To recieve data from frontend to the server, open server/ folder then run ``node server.js`` or if you have nodemon in your machine run ``nodemon server.js``.
* Now our server is ready to take requests from client and ready to communicate with the database.
* The photos are sent to cloudinary as well as stored in folder named files.


### Implemented tasks given in Codein

* Register/ Login of users
* User authentication using bcrypt.js (5 salt rounds + hashing).
* Product upload.
* Image uploaded by the user is received and then sent to cloudinary to get back URL and storing URL to the database.


### Bugs
* Currently I haven't used any cookies to store data once logged in. 
* App crashes when user go back from localhost:3000/upload to localhost:3000/dashboard.

### References
* React documentation [React.js](https://www.reactjs.org/)
* Cloudinary API [Cloudinary](https://cloudinary.com/documentation/node_integration)
* [User authentication](https://medium.com/silibrain/using-passport-bcrypt-for-full-stack-app-user-authentication-fe30a013604e)

#### PS(These tasks are yet to be done(which I know how to implement))
* Use passport.js to authenticate users and use cookies.
* View products feature.
* Bidding feature.
