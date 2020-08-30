"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
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
exports.default = pool;
