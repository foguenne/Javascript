/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        var color = '#';
        var letters = '0123456789ABCDEF';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
           
    }
         document.body.style.backgroundColor = color;
            console.log(color);    
        
        
    });
})();
