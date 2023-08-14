question1 = {
  question: "Who is the president of Nigeria",
  options: ["Tinubu", "Obi", "Atiku"],
  answer: 0,
};
question2 = {
  question: "Who is the president of USA",
  options: ["Tinubu", "Trump", "Biden"],
  answer: 2,
};
question3 = {
  question: "Who is the prime minister of UK",
  options: ["Tinubu", "Sunak", "Atiku"],
  answer: 1,
};
question4 = {
  question: "Who is the governor of Lagos",
  options: ["Tinubu", "Obi", "Sanwo Olu"],
  answer: 2,
};
question5 = {
  question: "Who is the governor of Edo",
  options: ["Tinubu", "Obi", "Obaseki"],
  answer: 2,
};

questions = [question1, question2, question3, question4];
for (let index = 0; index < questions.length; index++) {
  document.write(index + 1 + ". " + questions[index].question + "<br/>");
}
