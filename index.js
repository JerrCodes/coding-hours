// intialize the count as 0
let count = 0

// increment the count variable when the button is clicked
function increment(){
    count = count + 1
    countEl.innerText = count
}
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")

// 1. Create a function, save(), which logs out the count when it's called
// 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// += takes into account the paragraph text that was there as well

function save(){
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    // click on save brings back 0
    countEl.textContent = 0
    count = 0
    console.log(count)
}




    
   