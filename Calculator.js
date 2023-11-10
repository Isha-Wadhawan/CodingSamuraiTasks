let input = document.getElementById("inputBox")

let buttons = document.querySelectorAll('.num, .op')

let string =  "";

let arr = Array.from(buttons)

const calculate=(e)=>{
    if(e.target.value == "="){
        try {
               string = eval(string);
               input.value = string;
          } 

        catch (error) {
            input.value="";
            input.value += "Invalid Input"
            input.style.display = "block"
          }
    }

    else if(e.target.value == "Reset")
    {
        string = "";
        input.value = string;
    }
    else if(e.target.value == "Del"){

        string = string.substring(0, string.length-1);
        input.value = string; 
    }
    else{
         string += e.target.value;
         input.value = string;
    }
   
}

arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        calculate(e);
    })
})



