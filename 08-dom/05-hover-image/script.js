/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const basic_image = document.querySelector("img").getAttribute("src");
    const alt_image = document.querySelector("img").getAttribute("data-hover");

    let image = document.querySelector("figure img");

    image.addEventListener("mouseover", () => {
        image.src = alt_image
    });

    image.addEventListener("mouseout" , () => {
        
        image.src = basic_image
 });
})();
