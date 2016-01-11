import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));



let db;
MongoClient.connect('mongodb://futbolitfutbolito152:iguazo26@ds039095.mongolab.com:39095/hefesoft', (error, database)=>{
   if(error) throw error;
   
   db = database;
   
   app.use('/graphql', GraphQLHTTP({
       schema: schema(db),
       graphiql: true
    }));
   
   
   app.listen(process.env.PORT, process.env.IP, ()=>{
       console.log('Server lisening');
   });
});

app.get('/data/links', (req, res)=>{
    
    db.collection('links').find({}).toArray((err, links) =>{
       if(err) throw err;
       res.json(links);
   });
    
});