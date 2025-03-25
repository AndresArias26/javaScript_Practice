let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // Clear out the input field
    inputEl.value = ""
    // 5. Call the renderLeads() function
    renderLeades()
})

// 4. Wrap the code below in a renderLeades() function

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin
function renderLeades(){
    let listItems = ""
    for(let x = 0; x < myLeads.length; x++){
        // Wrapp the lead in an anchor tag (<a>) inside the <li>. Can I make the link open in a new tab?
        // 2. Add the item to the listItems variable instead of the ulEl. innerHTML
        listItems += "<li> <a href='" +  myLeads[x]  + " ' target='_blank'>" + myLeads[x] + "</a></li>"
        console.log(listItems)
    }
    
    // 3.Render the listItems inside the unordered list using ulEt. innerHML
    ulEl.innerHTML = listItems
    
    // Why we do that, the simple way that 
    // "DOM manipulations has a cost" and if i can just manipulated one time is better than three 
}
