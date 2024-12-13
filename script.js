//selecting popup-overlay ,popoup-box and button
var popupoverlay=document.querySelector(".popup-overlay")
var popoupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popoupbox.style.display="block"
})
//selecting cancel button
 var cancelpopup=document.getElementById("cancel-popup")
 cancelpopup.addEventListener("click",function(){
    event.preventDefault()
     popupoverlay.style.display="none"
    popoupbox.style.display="none"
 })
 //select container,add-book,book-title-input,book-author-input,book-description-input
 var container=document.querySelector(".container")
 var addbook=document.getElementById("add-book")
 var booktitleinput=document.getElementById("book-title-input")
 var bookauthorinput=document.getElementById("book-author-input")
 var bookdescriptioninput=document.getElementById("book-description-input")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=  `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popoupbox.style.display="none"
   
 })
 function deletebook(event){
      event.target.parentElement.remove()
 }

