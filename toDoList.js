let inputField = document.getElementById("collect");
let add = document.getElementById("addButton");
let itemsContainer = document.getElementById("itemsContainer");



let closeSpan;


let inputText = "";

add.addEventListener("click", function(){

      inputText = inputField.value;

      if(inputText === "" || inputText == null){

          alert("You must add something to the to do list");

      } else {

      let itemDiv = document.createElement("div");
      itemDiv.className = "item";

      

      let resultPara = document.createElement("p");
      resultPara.id = "itemContent";
      let myTextNode = document.createTextNode(inputText);
      resultPara.appendChild(myTextNode);


      itemDiv.addEventListener("click", function(){
         
             this.classList.toggle("tick");
             resultPara.classList.toggle("slide");
    })

      closeSpan = document.createElement("span");
      closeSpan.className = "close";
      closeSpan.id = "closeButton";
      closeSpan.innerHTML = "&times;";

    //   click to close item
      closeSpan.addEventListener("click", function(){
             
                  this.parentNode.parentNode.removeChild(this.parentNode);
      });
      

      itemDiv.appendChild(resultPara);
      itemDiv.appendChild(closeSpan);
      itemsContainer.appendChild(itemDiv);
      inputField.value = "";

      }



});



