const user = prompt('Ingrese su usuario');
const pass = parseInt(prompt('Ingrese su clave'));

{
   alert(`Señor ${user} bienvenido confirme sus datos`)
 };


 let user1 = prompt('Por favor ingrese su usuario');

 let password = prompt('Por favor ingrese su contraseña');

for ( let i=0; i<3; i=i+1){



if(pass == password && user == user1){
   alert(`Usuario y contraseña correcta Bienvenido ${user}`)
   
}



else {(pass ==! password || user ==! user1)
   alert(`constaseña y/o usuario incorrecto , ingrese nuevamente sus datos, le quedan ${3-(i+1)} intentos`)

   user1 = prompt('Por favor ingrese su usuario');

   password = prompt('Por favor ingrese su contraseña');

}}
