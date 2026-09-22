//Write your Javascript code here
console.log("Shoppinglist")

//task 1

function createLi(className, id, text) 
{
    let newLi = document.createElement("li");

    newLi.setAttribute("class", className);
    newLi.setAttribute("id", id);

    let textNode = document.createTextNode(text);
    newLi.appendChild(textNode);

    return newLi;
}

let testLi = createLi("healthy", "five", "Banana");
console.log(testLi);

// TASK 2

function appendLi(listId, liElement)
 {
    let list = document.getElementById(listId);

    list.appendChild(liElement);
}
appendLi("list", testLi);
