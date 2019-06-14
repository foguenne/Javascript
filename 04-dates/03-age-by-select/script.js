/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
 

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        let day = parseInt(document.getElementById("dob-day").value);
        let month = parseInt (document.getElementById("dob-month").value);
        let year = parseInt (document.getElementById("dob-year").value);
        

        console.log(day);
        console.log(month);
        console.log(year);
        
        let today = new Date();
        console.log(today);
        
        console.log(today.getFullYear());
        
       let age = today.getFullYear() - year;
        
        if(month > (today.getMonth()+1)){
            age = age -1; 
        }
        else if(month == (today.getMonth()+1)){
             if(day > today.getDate()){
                 age = age -1;
             }
            }
        console.log(age);
        
    });
    })();
