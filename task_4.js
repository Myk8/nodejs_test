/*●	Lehessen törölni egy felhasználót az azonosítója alapján. */


const {MongoClient,ObjectId }=require('mongodb')
const uri = require('./atlas_uri')
console.log(uri)

const client = new MongoClient(uri)
const dbname = "Mybase"
const collection_name="account"

const accountCollection =client.db(dbname).collection(collection_name)




// Connect to the database
const connectToDatabase = async () => {
try{
    await client.connect();
    console.log('Connected to the '+ dbname +'database');
}catch (err){
    console.error('Error connecting to the database:'+err);
}
};

//DELETE the person by my choiche
const documenttoDelete={_id: new ObjectId("6503190bd005e7e6f3e0fbc4")}   


const main = async () =>{
    try{
        await connectToDatabase();
let result= await accountCollection.deleteOne(documenttoDelete)
result.deletedCount --> 1
?console.log("No document deleted")
: console.log("Deleted one document")

    } catch (err){
        console.error('Error deleting documents: '+ err);
    } finally{
        await client.close();
    }
    
    }
    
    main(); 
    