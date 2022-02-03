window.onload = function() {
    

    createNumbers ()
}


window.onload = onload  //1.Every time the page loads it wil load the function above


//2.We need to programatically create a bingo board numbered from 1-76


const createNumbers = function () {

    //3.TODO: create the 76 numbers
     let numbersBingo = 76

     //4.Let's get the div containing the numbers
     let numbersContainerNode = document.getElementById('numbers-container')


     //5.Let's customize it: for loop 75 times
     
     for (let numberOfNumber = 1; numberOfNumber<= numbersBingo; numberOfNumber++) {
         //6. In each iteration of the for loop we:
         //6.1 Create the div

        let numberDivNode = document.createElement('div')

        //6.2 We customize it : we add the .number class
        numberDivNode.innerText = numberOfNumber
        numberDivNode.classList.add("number")
        

        //6.3 We attach it in the DOM
        numbersContainerNode.appendChild(numberDivNode)
     }

}

