/* 
    CIT281 Project 4
    Sam Rutherford
*/
const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  data,
} = require("./p4-module.js");

fastify.get("/cit/question", function (request, reply) {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", statusCode: 200, questions: getQuestions(data) });
});

fastify.get("/cit/answer", function (request, reply) {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ error: "", statusCode: 200, answers: getAnswers(data) });
});

fastify.get("/cit/questionanswer", function (request, reply) {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: "",
      statusCode: 200,
      question_answers: getQuestionsAnswers(data),
    });
});

fastify.get("/cit/question/:number", function (request, reply) {
  const { number } = request.params;
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getQuestion(number).error,
      statusCode: 200,
      questions: getQuestion(number).question,
      number: getQuestion(number).number,
    });
});

fastify.get("/cit/answer/:number", function (request, reply) {
  const { number } = request.params;
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getAnswer(number).error,
      statusCode: 200,
      answers: getAnswer(number).answer,
      number: getAnswer(number).number,
    });
});

fastify.get("/cit/questionanswer/:number", function (request, reply) {
  const { number } = request.params;
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
      error: getQuestionAnswer(number).error,
      statusCode: 200,
      question: getQuestionAnswer(number).question,
      answer: getQuestionAnswer(number).answer,
      number: getQuestionAnswer(number).number,
    });
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
