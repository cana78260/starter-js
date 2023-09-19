import * as express from "express";

// Express server creation
// const app = express();
// const port = 8080;

// First route
// app.get("/hello", (req, res) => {
//   res.send({ message: "Hello World !" });
// });
// app.get("/test", (req, res) => {
//   res.send({
//     test: "cette réponse provient de la route /test",
//     message: "ceci est un test !",
//   });
// });

// app.get("/heros", (req, res) => {
//   const donneesDeTest = [
//     { name: "Chuck", power: 1000, life: 1000 },
//     { name: "Coco", power: 18, life: 18 },
//     { name: "Titi", power: 1, life: 1 },
//   ];

//   res.send({
//     test: "cette réponse provient de la route /hero",
//     message: donneesDeTest,
//   });
// });

// app.get("/cana", (req, res) => {
//   res.send({
//     test: "cette réponse provient de la route /cana",
//     message: "On joue ce soir face à Qarabagh !",
//   });
// });



// Bind express server on port 3004
// app.listen(port, () => {
//   console.log(
//     `Express server has started on port ${port}. Open http://localhost:${port}/hello to see results`
//   );
// });
//----------------------------------------------------------------------------------------------------

// function deleteKeys< T extends object,
                      
//                       K extends keyof T = keyof T>(target:T, keys?:K[]): Omit<T,K>{

//                         const copy = {...target}
//                         for (const key of keys ?? Object.keys(target))
                      
//                           delete copy[key as keyof T]
                         
                     
//                          return copy;
//                       }
   
// const myObject = {foo: 'hello', bar: 'world'}

// console.log(deleteKeys(myObject, ["foo"]));
// console.log(deleteKeys(myObject));

/*const person = {
   '0':'qux',
  1:'qux'
}*/

//person[1]
  // constructor(){
  //   this.foo = "foo";
  // }

// const animal = new Animal(Math.random())


// const obj1 = new MyClass();
// obj1.foo = 'coucou';
// obj1.foo  = undefined;

// console.log(obj1)
// delete obj1.foo;

// console.log(obj1.foo)

// function smash (words: String[]){

//    let answer: String = "";

//    for (let word of words) {
//      console.log("word" + word);
//      answer += word + " ";
//      console.log("answer" + answer)
     
//    }
  
// }

// smash(["je", "m'appelle", "cana"])



//  function generateChatRoomNames(users: string[]): string[] {
//   let firstLetter:string;
//   let secondLetter:string;
//   let array: string[] = [];
//   let final: string[] = [];


//   users.forEach(function (element, index) {
   
      

//         array = element.split(" ");
     
//         firstLetter = array[0];

//         secondLetter = array[1];
//         if (array !== undefined) {
//           if (users.length == 1) {
//             final.push(
//               firstLetter.charAt(0).toUpperCase() +
//                 firstLetter.substr(1).toLowerCase()
//             );
//             //console.log("final" + final);
//           }
//          else if (users.length == 2) {
//            console.log("final" + firstLetter);

//            final.push(secondLetter);
//            console.log("final" + final);

//            const key = Object.entries(final);
//            const obj = Object.fromEntries(key);
//            console.log("values", Object.values(obj));
//            const trimName = Object.values(obj);
//            const trimName0 = trimName[0].split("");
//             console.log("trimName0" + trimName0[0]);
//           //  const trimName1 = trimName[1].split("");
//           //   console.log("trimName1" + trimName1);
//           //  if (trimName0[0] !== trimName1[1]) {
//           //    console.log("différent");
            
//           //  } else {
//           //    console.log("ok");
//           //  }
//          }
//         }

//     // for (const [key] of Object.entries(resultObj)) {

//     //}
//   });
   
//   return final;
// }

//  generateChatRoomNames(["John Bloggs", "John Smith"]);