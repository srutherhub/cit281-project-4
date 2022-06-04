/* 
    CIT281 Project 4
    Sam Rutherford
*/

const { data } = require("./p4-data.js");
//console.log(data);

function getQuestions(arr) {
  let questions = [];
  for (item of arr) {
    questions.push(item.question);
  }
  return questions;
}
//console.log(getQuestions(data));

function getAnswers(arr) {
  let answers = [];
  for (item of arr) {
    answers.push(item.answer);
  }
  return answers;
}
//console.log(getAnswer(data));

function getQuestionsAnswers(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  return newArr;
}
//console.log(getQuestionsAnswers(data));

function getQuestion(number = "") {
  let obj = {
    question: "",
    number: "",
    error: "",
  };
  num = parseInt(number);
  error = `Question number must be larger than 0 and less than or equal to ${data.length}`;

  if (num <= 0 || num > data.length) {
    obj.error = error;
    return obj;
  } else {
    obj.number = num;
    obj.question = getQuestions(data)[num - 1];
    return obj;
  }
}
//console.log(getQuestion("1"));

function getAnswer(number = "") {
  let obj = {
    answer: "",
    number: "",
    error: "",
  };
  num = parseInt(number);
  error = `Answer number must be larger than 0 and less than or equal to ${data.length}`;
  if (num <= 0 || num > data.length) {
    obj.error = error;
    return obj;
  } else {
    obj.number = num;
    obj.answer = getAnswers(data)[num - 1];
    return obj;
  }
}
//console.log(getAnswer("1"));

function getQuestionAnswer(number = "") {
  let obj = {
    question: "",
    answer: "",
    number: "",
    error: "",
  };
  num = parseInt(number);
  error = `Number must be larger than 0 and less than or equal to ${data.length}`;
  if (num <= 0 || num > data.length) {
    obj.error = error;
    return obj;
  } else {
    obj.question = getQuestions(data)[num - 1];
    obj.number = num;
    obj.answer = getAnswers(data)[num - 1];
    return obj;
  }
}
//console.log(getQuestionAnswer("3"));

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
    /* 
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions(data) });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers(data) });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers(data) });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer(data) },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer(data) },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }
*/

  module.exports = {
      getQuestions,
      getAnswers,
      getQuestionsAnswers,
      getQuestion,
      getAnswer,
      getQuestionAnswer,
      data,
  }