"use strict";
//                                          Instanciation
// export class MyClass {
//   private myBaz?: string;
//   protected myFoo?: string;
//   public myBar?: string;
// }
// const myRebaz = new MyClass;
// myRebaz.myBar = "9";
//------------------------------------------------------------------
//              classe abstraite et héritage
// abstract class Animal {
//     constructor(readonly dna:number){}
// }
// abstract class GrosAnimal extends Animal{
//     constructor(readonly taille:number){
//         super(9)
//     }
// }
// class Dog extends GrosAnimal{
//     constructor(readonly race:string){
//         super(Math.random())
//     }
// }
// const dog = new Dog('bully')
// console.log(dog.race);
// console.log(dog.dna);
// console.log(dog.taille);
// const str = 'coucou';
// for (let s of str){
//     console.log(s)
// }
//--------------------------------------------------------------------
//                              getters et setters
// class Personn {
//   private _email?: string;
//   get Email(): string | undefined {
//     return this._email;
//   }
//   set Email(email: string | undefined){
//     if (email === undefined) {
//       delete this._email;
//       return;
//     }
//     if (!isEmail(email)) {
//       throw Error(`${email} is not a valid adress`);
//     }
//     this._email = email;
//   }
// }
// const test = new Personn;
//---------------------------------------------------------------
//                  Les types
// type MyObject = {
//     foo: string
//     bar: string
//     baz: string
// }
// type MyObjectKeys = keyof MyObject  // => les clés de MyObject
//  -----------------------------------------Utilisation de Set-------------
// const baz:string[] = ['baz']
// let bur = [...baz,'bur']
// console.log(bur)
// const set = new Set();
// set.add(1);
// set.add('lur');
// const o = { a: 1, b: 2 };
// set.add(o);
// console.log(set);
//-------------------------------    exemples avec des objets       -----------------------------------
// const obj:Object = { prop1: 1, prop2: 22, prop3: 3 };
// console.log(Object.values(obj));
// for (const key in obj){
//     // console.log(obj[key]);
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj).map(x => x%2==0? true:false));
// console.log(Object.entries(obj).map((x) => (x.includes("prop3") ? true : false)))
// const obj2 = Object.entries(obj).map(([key, value]) =>[key, value*2])
// console.log(obj2)
// const newObj = Object.fromEntries(
//   Object.entries(obj).map(([key, value]) => [key, value * 2])
// );
// console.log(newObj);
//-------------------------------------    ex de programmation fonctionnelle(ici on se passe des boucles)     -----------------------------------
// console.log([...Array(10).keys()]);
// console.log([...Array(10).keys()].map(i => i*2)
//                         // .filter(i => i%4===0)
//                         .reduce((acc, cur)=>acc+cur,0));
// const words = ['hello','world',1, '!']
// console.log(words.reduce((acc, cur)=>acc+' ' +cur,''))
//-----------------------------------       Manipulation de prototypes------------------------------------------
// Array.prototype.double= function(){      2) elle n'existe pas, js vérifie au niveau du prototype           
//     return this.map(i=>i*2);
// }
// const arr: Array = [1, 2, 3];
// console.log(arr.double());           1)il vérifie sur l'objet si la méthode existe
//--------------------------------  types function----------------------------------------------------------
// class Foo {
// }
// const foo = new Foo()
// console.log(typeof foo.constructor);
// console.log(foo.constructor.name);
//---------------       Asynchronisme js-----------------------------
// const start = Date.now();
// let i = false;
// setTimeout(()=>{
//     i= true
//  console.log(i)   
// },3000)
// while(Date.now()-start<=6000){}
// console.log(i)
//=====> le traitement est séquentiel en js et le callback est effectué après la boucle d'évènement(A la prochaine boucle d'évènements) donc à la fin de la boucle (L150) => false puis true s'affiche tout de suite après[Au prochain tour de boucle]
//En principe il faut respecter les propriétés
//En programmation évènementielle voir le module node Events qui propose des méthodes asynchrones
//------------------------- erreur traitée dans une promesse        --------------------------
// Promise.reject(Error('woops'))              //Dans node, l'érreur coupe le programme
// setTimeout(()=>console.log('10 secondes'), 10000)  //L'erreur traitée dans le 2ème tour de boucle interrompt le processus et squeeze le setTimeout 
//NB: la gestion des erreurs synchrones se fait avec un bloc try/catch => avec throw err
// try{
//     throw Error('woops')
// }catch(err){
// console.log(err.message)
// }finally{}
//-----------------------------  return implicite       ------------------------------------------
// const add =  (x:number,y:number) => x+y     //retur implicite
// const add2 = (x: number, y: number) => { return x + y}; // return obligatoire avec brackets
//---------------------------------  Promise.all       ------------------------------------------
// Promise.all([
//   fetch("http://mo-api.com/users/1"),
//   fetch("http://mo-api.com/users/2"),
//   fetch("http://mo-api.com/users/3"),
// ])
// .then(([user1, user2, user3])=>{
//     //promesses résolues
// })
// .catch(err=>{
//     //err si 1 promesse no résolue
// });
// Promise.all([
//   Promise.reject(Error("1")).catch((err) =>
//     Promise.reject({ error: err, index: 0 })
//   ),
//   Promise.reject(Error("2")).catch((err) =>
//     Promise.reject({ error: err, index: 1 })
//   ),
// ]).then(()=> console.log('terminé'))
// .catch(err =>{console.log(`La promesse rejetée est la ${err.index} (${err.error.message})`)
// });
//On répercute l'erreur afin de lui attribuer un index et ainsi déterminer laquelle a été levée
//----------------------------------  ex avec async      -------------------------------------------
// async function asyncFunc() {
//     return  1           //Promesse implicite
// }
// //équivaut à:
// function asyncFunc2(){
//     return Promise.resolve(1);
// }
// async function getUserId(id:number) {
//     try{
//         const user = await fetch(`http://mon-api.com/users/${id}`);
//         const settings = await fetch(`http://mon-api.com/settings/${user.settingsId}`);
//         return settings
//     }catch(err){
//         return null;
//     }
// }
//-------------------------------------------------------------
const fs = require("fs");
//import { promisify } from 'util'
//import { readFile } from 'fs'
// const preadFile = prmisify(readFile);
// preadFile('package.json','utf-8' )
// .then(data: string  => console.log(data))
// .catch(err:string  => console.error(err))
//        
// 
function pileReadFile(path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
pileReadFile('package.json', 'utf-8')
    .then(data => {
    console.log(data);
})
    .catch(err => {
    console.error(err);
});
