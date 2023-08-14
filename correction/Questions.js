class Question {
  question;
  options;
  answer;

  constructor(question, options, answer) {
    if (question == "") {
      throw new Error("question cannot be empty");
    } else {
      this.question = question;
    }
    if (options.length < 2) {
      throw new Error("the option must be greater than 2");
    } else {
      this.options = options;
    }
    if (options.length <= answer) {
      throw new Error("answer is missing");
    } else {
      this.answer = answer;
    }
  }
}
