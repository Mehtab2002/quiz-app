const quizData = [
  {
    question: "Q1: What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink and Text Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Q2: Which device is used to convert digital signals into analog for transmission?",
    options: ["Router", "Switch", "Modem", "Bridge"],
    answer: "Modem"
  },
  {
    question: "Q3: Which programming language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Q4: Choose the correct plural form of 'mouse':",
    options: ["mouses", "mices", "mice", "mouse"],
    answer: "mice"
  },
  {
    question: "Q5: What is a synonym of the word 'beautiful'?",
    options: ["Ugly", "Pretty", "Harsh", "Sad"],
    answer: "Pretty"
  },
  {
    question: "Q6: What is the capital city of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Bursa"],
    answer: "Ankara"
  },
  {
    question: "Q7: Which country shares the longest border with Pakistan?",
    options: ["Afghanistan", "India", "China", "Iran"],
    answer: "India"
  },
  {
    question: "Q8: Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "Q9: What is H2O commonly known as?",
    options: ["Hydrogen", "Water", "Oxygen", "Salt"],
    answer: "Water"
  },
  {
    question: "Q10: Which part of the plant conducts photosynthesis?",
    options: ["Roots", "Flowers", "Stem", "Leaves"],
    answer: "Leaves"
  }
];



function details(question, option) {

  let d = document.querySelector(".question")

  d.innerHTML = "";

  d.insertAdjacentHTML("afterbegin", `<div><p>${question}</p></div>
    <div class="options">

        <div><input type="radio" name="question" value = "${option[0]}"> <label for="radio">a: ${option[0]}   </label></div>
        <div><input type="radio" name="question" value = "${option[1]}"> <label for="radio">b: ${option[1]}    </label></div>
        <div><input type="radio" name="question" value = "${option[2]}"> <label for="radio">c: ${option[2]}        </label></div>
        <div><input type="radio" name="question" value = "${option[3]}"> <label for="radio">d: ${option[3]} </label></div>

    </div>`)


}

window.onload = () => {
  details(quizData[0].question, quizData[0].options)
const allNumbers = document.querySelectorAll(".number div");
// Set current question number to blue
allNumbers[0].style.backgroundColor = "#4361ee";
allNumbers[0].style.color = "white";
}



let selected = [];
let count = 0;

document.querySelector(".next button").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="question"]:checked');

  if (selectedOption) {
    selected[count] = selectedOption.value;

    if (count == 9) {
      document.querySelector(".submit button").style.display = "block"
    }
    if (count < 9) {
      count++;

const allNumbers = document.querySelectorAll(".number div");

// Reset all to white
allNumbers.forEach(num => num.style.backgroundColor = "rgb(233, 236, 239)");
allNumbers.forEach(num => num.style.color = "#6c757d");
// Set current question number to blue
allNumbers[count].style.backgroundColor = "#4361ee";
allNumbers[count].style.color = "white";
      details(quizData[count].question, quizData[count].options);
    }

  } else {
    alert("Please select an option.");
  }
});




document.querySelector(".previous button").addEventListener("click", () => {
  const allNumbers = document.querySelectorAll(".number div");
  if (count > 0) {
    count--;
// Reset all to white
allNumbers.forEach(num => num.style.backgroundColor = "rgb(233, 236, 239)");
allNumbers.forEach(num => num.style.color = "#6c757d");
// Set current question number to blue
allNumbers[count].style.backgroundColor = "#4361ee";
allNumbers[count].style.color = "white";
    // Load previous question
    details(quizData[count].question, quizData[count].options);

    // Wait for DOM to update, then set checked value
    setTimeout(() => {
      const radios = document.querySelectorAll('input[name="question"]');
      radios.forEach((radio) => {
        if (radio.value === selected[count]) {
          radio.checked = true;
        }
      });
    }, 0);
  }
});



function submit() {

  let arr = []


  let correct = 0;
  let incorrect = 0;


  for (let i = 0; i < quizData.length; i++) {

    if (selected[i] == quizData[i].answer) {
      correct++;
    } else {

      incorrect++;

    }

    // console.log("Q"+i+" correct answer: "+quizData[i].answer+" your answer: "+selected[i])

  }

  for (let i = 0; i < quizData.length; i++) {


    arr.push({
      question: quizData[i].question,
      answer: quizData[i].answer,
      chose: selected[i], correct, incorrect
    })
  }

localStorage.setItem("Result", JSON.stringify(arr))

window.location.href = "result.html"

}