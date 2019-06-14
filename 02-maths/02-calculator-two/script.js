/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        
        let num1Int = document.getElementById("op-one").value;
        let num2Int = document.getElementById("op-two").value;
        
        num1Int = parseInt(num1Int);
        num2Int = parseInt(num2Int);
        
        switch(operation){
            case "addition":
                console.log(num1Int + num2Int)
                break;
            case "substraction":
                console.log(num1Int - num2Int);
                break;
            case "multiplication":
                console.log(num1Int * num2Int);
                break;
            case "division" :
                console.log(num1Int / num2Int);
                break;
            default:;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
