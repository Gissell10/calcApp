class Calculator{

  constructor(inputOperantText, outputOperantText){
    this.inputOperantText = inputOperantText;
    this.outputOperantText = outputOperantText;
    this.clear();
  }

  clear(){
    this.inputOperant= " ";
    this.outputOperant= " ";
    this.operation = undefined;
  }
  delete(){
    this.outputOperant = this.outputOperant.toString().slice(0,-1);
  }
  addnumbers(number){
    if(number === (".") && this.outputOperant.includes("."))return;
    this.outputOperant = this.outputOperant.toString()+ number.toString();
  }

  selectOperation(operation){
    if(this.outputOperant === " ")return;
    if(this.inputOperant !== " "){
      this.compute();
    }
    this.operation = operation; 
    this.inputOperant = this.outputOperant;
    this.outputOperant = " ";
  }

  compute(){
    let computer;
    const input = parseFloat(this.inputOperant);
    const output = parseFloat(this.outputOperant);
    if(isNaN(input)|| isNaN(output))return;
    switch (this.operation){
    case "+" :
      computer = input + output;
      break
    case "-" :
      computer = input - output;
      break
    case "/" :
      computer = input / output;
      break
    case "*" :
      computer = input * output;
      break
    default:
      return;
    }
    this.outputOperant = computer;
    this.operation = undefined;
    this.inputOperant = " ";
  }

  updatedisplay(){
   this.outputOperantText.innerText = this.outputOperant;
   if(this.operation != null){
    this.inputOperantText.innerText = 
    `${this.inputOperant} ${this.operation} ${this.outputOperant}`
   } else{
    this.inputOperantText.innerText = " ";
   }
  }
}

let numberButtons = document.querySelectorAll("[data-number]");
let operatorButtons = document.querySelectorAll("[data-operation]");
let resetButton = document.querySelector("[data-reset]");
let equal = document.querySelector("[data-equal]");
let del = document.querySelector("[data-del]");
let inputOperantText = document.querySelector("[data-input]");
let outputOperantText = document.querySelector("[data-output]");


const calculator = new Calculator(inputOperantText, outputOperantText);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.addnumbers(button.innerText);
    calculator.updatedisplay();
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.updatedisplay();
  });
});

equal.addEventListener("click", ()=>{
  calculator.compute();
  calculator.updatedisplay();
})
resetButton.addEventListener("click", ()=>{
  calculator.clear();
  calculator.updatedisplay();
})

del.addEventListener("click", ()=>{
  calculator.delete();
  calculator.updatedisplay();
})

