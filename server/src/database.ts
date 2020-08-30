import mysql from 'promise-mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);
// pool.then(function(p){
//     return  p.getConnection().then(connection =>{
//         p.releaseConnection(connection);
//         console.log('DB is connected');
//     })
//
// }).then(function(){

    // here the query is executed
//})

//TODO update connection method
//Now we're using promise-mysql@3.3.1
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;