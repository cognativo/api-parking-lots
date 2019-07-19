const mongoose = require('mongoose')
 
const CONNECTION_URL = "mongodb+srv://usr-bd-lots:AyGfRE4OurEnyJyl@cluster0-54w6g.gcp.mongodb.net/condominio?retryWrites=true";
const DATABASE_NAME = "condominio";

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true } );
 
const configDb = mongoose.connection;
configDb.on('error', console.error.bind(console, 'connection error:'));
configDb.once('open', function() {
  // we're connected!
  console.log("Connected to MongoDB database")
});
 
module.exports = configDb;