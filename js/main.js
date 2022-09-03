const menu = document.querySelector('.btn-group-vertical')
menu.style.flexDirection = "row"

const menuButtons = document.querySelectorAll('.btn-secondary')
menuButtons.forEach(element => {
    element.style.marginRight = "5px"
    element.style.width = "auto"
    element.style.borderRadius = "3px"
})

const header = document.querySelector('.jumbotron')
header.style.textAlign = "end"
header.style.background = "#5A6268"
header.style.color = "#fff"

const headerButton = document.getElementsByClassName("btn-primary")[0]
headerButton.style.background = "#16aa59";
headerButton.style.border = "none"

const cardButton = document.getElementsByClassName("btn-primary")[2]
cardButton.style.background = "#16aa59";
cardButton.style.border = "none"


const newItems = ['Quarto item', 'Quinto item']
const list = document.querySelector('ul')
newItems.forEach(item => {
    let itemToAdd = document.createElement('li')
    itemToAdd.innerHTML = item
    list.appendChild(itemToAdd)
})

const listItem = document.querySelectorAll("li")
console.log(listItem)
listItem[0].classList.remove("active");
listItem[3].classList.add("list-group-item");
listItem[3].classList.add("active");
listItem[4].classList.add("list-group-item");
