function checkAnswers() {
  let form = event.target.closest("form");
  let correct = 0;
  const answers = {
    quiz1: ["c", "b", "c"],
    quiz2: ["b", "a", "a"]
  };
  let id = form.id;
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value
  ];

  userAnswers.forEach((ans, i) => {
    if (ans === answers[id][i]) correct++;
  });

  form.querySelector("#result").innerText = `Respuestas correctas: ${correct} de 3`;
}
