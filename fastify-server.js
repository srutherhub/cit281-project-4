/* 
    CIT 281 Lab 05
    Sam Rutherford
*/

const fastify = require("fastify")();

let students = [
  {
    id: 1,
    last: "John",
    first: "Johnson",
  },
  {
    id: 2,
    last: "Mike",
    first: "Mikeson",
  },
  {
    id: 3,
    last: "Barry",
    first: "Barryson",
  },
];

//Getting Student by the id, takes in string, changes it to int
function getStudentById(id){
  const studentId = parseInt(id);
  for (student of students){
    if (student.id === studentId){
      return student
    }
  }
}
//console.log(getStudentById("3"))

//Find next id number
function findMaxId(){
  let arr = [];
  for (student of students){
    arr.push(student.id);
  }
  let max = Math.max(...arr);
  let nextId = max + 1;
  //console.log(nextId);
  return nextId;
}
//console.log(findMaxId());

//append new student to students array
function appendStudent(obj){
  students.push(obj);
  return students;
}
console.log()

fastify.get("/cit/student", function (request, reply) {
    // home route
    reply
      .code(200) // status code
      .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
      .send(students); // we need to send back the student array
  });

  fastify.get("/cit/student/:id", function (request, reply) {
    // home route
    const {id} = request.params;
    if(getStudentById(id) == undefined){
      reply
        .code(404)
        .header("Content-Type","text/html")
        .send("Student with that id does not exist")

    }else {
    reply
      .code(200) // status code
      .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
      .send(getStudentById(id)); // we need to send back the student array
  }
  });

  fastify.get("/cit/*", (request, reply) => {
    reply
      .code(200) // updat the status code accordingly
      .header("Content-Type", "text/tex; charset=utf-8")
      .send("comeback later, we might have it");
  });

  fastify.post("/cit/student", function (request, reply) {
    // home route
    const newStudentObj = request.body; // {first: "", last: ""}
    let nextId = {id:findMaxId()};
    let newStudent = Object.assign(nextId,newStudentObj)
    //console.log(newStudent);
    reply
      .code(200) // status code
      .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
      .send(appendStudent(newStudent)); // we need to send back the updated student arry
  });


  const listenIP = "localhost"; // localhost:8080
const listenPort = 8080;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});