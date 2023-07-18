const form = document.getElementById("form");


form.onsubmit = function(e) {
    e.preventDefault();
    const link = form.elements.link.value;
    const title = form.elements.title.value;
    insertItem(link, title);
}


// JavaScript function to create and insert new HTML
function insertItem(link, text) {

    // Create a new div element 
    const newDiv = document.createElement("div");
    newDiv.id = text;
  
    newDiv.innerHTML += '<a href=' + link + '>' + text + '</a>';
    newDiv.innerHTML += '<button type="button" id="removeBtn">' + "Remove Link" + '</button>';
    document.body.appendChild(newDiv);

    // Get reference to button
    const btn = document.getElementById("removeBtn");

    // Add click handler
    btn.onclick = function() {
        deleteItem(text);
    }
}

pageButton = function(page){
    document.location.href = page;
    
}

// document.getElementById("wishlistButton").onclick = function(e) {  
//     e.preventDefault();
//     pageButton("./wishlists.html");
// }

// document.getElementById("itemButton").onclick = function(e) {  
//     e.preventDefault();
//     pageButton("./items.html");
// }

// document.getElementById("homeButton").onclick = function(e) {  
//     e.preventDefault();
//     pageButton("./index.html");
// }


function deleteItem(id){
    const div = document.getElementById(id);
    if (div) {
      div.remove(); 
    }
}