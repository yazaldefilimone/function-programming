//Higher Order Function
function ajaxCall(callback){
  callback('it is data!');
}


function getUsers(callback){
  ajaxCall(function(data){
    callback(data);
  })
}


getUsers(function(data){
  console.log(data);
})



//simplificando
const ajaxCallSimplify = callback =>  callback('it is data!');

const  getUsersSimolify = callback => ajaxCallSimplify(data => callback(data));

getUsersSimolify(data => console.log(data));


