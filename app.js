var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "Wifi stand for?",
      a:'Wireless Fidelity',
      b: 'Wireless functioning',
      c: 'Wireless function',
      answer: "A"
    },
  {
      question: "what will be the image tag in html ?",
      a: 'image',
      b: 'img',
      c: 'pic',
      answer: "B"
    },
  {
      question: "Email stand for?",
      a: "Electronic Mail",
      b: "Electric mail",
      c: " Elipse mail",
      answer: "A"
    },
  {
      question: "The format of data is called?",
      a: "Semantic",
      b: "Struck",
      c: "Syntax",
      answer: "C"
    }
  ];

function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
  
    pos = 0;
    correct = 0;
    
    return false;
  }

  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;

  
  test.innerHTML = "<h3>"+question+"</h3>";


  
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
}

function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
 
  if(choice == questions[pos].answer){
 
    correct++;
  }
  
  pos++;
  
  renderQuestion();
}

window.addEventListener("load", renderQuestion);