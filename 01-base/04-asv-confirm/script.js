/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    var Confirm = 0;
    do{
    var age = prompt ('Quel est votre âge ?');
    var sexe = prompt ('Quel est votre sexe ?');
    var ville = prompt ('De quelle ville venez-vous ?');
    var Confirm = confirm( "Votre âge = "+ age + "\nVotre sexe = "+ sexe + "\nVotre ville = "+ ville + "\n\nCes infos sont-elles correctes ?")
    if (Confirm==true) {
        alert("Merci pour vos informations !");
    }
    }
    while(!confirm);
    
})();
