//selecting ul
var listContainer = document.getElementById("listContainer")
//selecting the input
var inputBox = document.querySelector("input") 

function add(){
    var createListItem = document.createElement("li")
    createListItem.innerHTML = inputBox.value + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick = 'Delete(event)'><i class='fa-solid fa-xmark'></i></button>"
    listContainer.insertAdjacentElement("beforeend",createListItem)
    createListItem.style.paddingTop = "20px"
    createListItem.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
    createListItem.style.display = "flex"
    createListItem.style.justifyContent = "space-between"
    createListItem.style.marginRight = "40px"
}

//function Delete(event){
//    event.target.parentElement.remove()
//}

function Delete(event) {
    var listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  }
