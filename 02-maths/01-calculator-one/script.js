/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let num1 = document.getElementById("op-one").value;
        
       let num2 = document.getElementById("op-two").value;
       
       
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);
        
        console.log(num1Int + num2Int);
        
        
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
         let num1 = document.getElementById("op-one").value;
        
       let num2 = document.getElementById("op-two").value;
       
       
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);
        
        console.log(num1Int - num2Int);
        
        
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
         let num1 = document.getElementById("op-one").value;
        
       let num2 = document.getElementById("op-two").value;
       
       
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);
        
        console.log(num1Int * num2Int);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
         let num1 = document.getElementById("op-one").value;
        
       let num2 = document.getElementById("op-two").value;
       
       
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);
        
        console.log(num1Int / num2Int);
    });
})();
