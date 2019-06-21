/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function petit(tab){
console.log(tab)

        let min = tab[0];

        for(i=0 ; i < 10 ; i ++){
            if(min > tab[i])
                min = tab[i];
        }
        return min;
    }

    function grand(tab){
        console.log(tab)

        let max = tab[0];

        for(i=0 ; i < 10 ; i ++){
            if(max < tab[i])
                max = tab[i];
        }
        return max;
    }
    function addition(tab){
        console.log(tab)
        
        let sum = 0;

        for(i=0 ; i < 10 ; i ++){
           sum = tab[i] + sum;
        }
        return sum;
    }

    function moyenne(tab){
        console.log(tab)
                
        let average = addition(tab) / tab.length
            
        return average;
    }
        

    document.getElementById("run").addEventListener("click",() => {
        let tableau = [];
        for(i=0 ; i < 10 ; i++){
            let ole = Math.floor(Math.random() * 100 + 1);
            document.getElementById("n-" + (i+1)).textContent = ole;
            tableau.push(ole);

        }



        document.getElementById("min").textContent = petit(tableau);
        document.getElementById("max").textContent = grand(tableau);
        document.getElementById("sum").textContent = addition(tableau);
        document.getElementById("average").textContent = moyenne(tableau);

        
        

    });
        
})();