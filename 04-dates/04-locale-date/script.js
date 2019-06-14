/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour:'numeric', minute: 'numeric'};
    let dateToday = new Date();
    console.log(dateToday);
    
    let result = dateToday.toLocaleDateString('fr-FR', options);
    
    
    let date = document.getElementById("target").innerHTML = result;
    
  
    
})();
