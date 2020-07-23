import { get } from "./util"

export function card() {


let bookmarkButton1 = document.querySelector('#bookmark1')
bookmarkButton1.addEventListener('click', () => {
    bookmarkButton1.classList.toggle('bookmark__filled')
})

let bookmarkButton2 = document.querySelector('#bookmark2')
bookmarkButton2.addEventListener('click', () => {
    bookmarkButton2.classList.toggle('bookmark__filled')
})    

let bookmarkButton3 = document.querySelector('#bookmark3')
bookmarkButton3.addEventListener('click', () => {
    bookmarkButton3.classList.toggle('bookmark__filled')
})  

let bookmarkButton4 = document.querySelector('#bookmark4')
bookmarkButton4.addEventListener('click', () => {
    bookmarkButton4.classList.toggle('bookmark__filled')
})  


let bookmarkButton5 = document.querySelector('#bookmark5')
bookmarkButton5.addEventListener('click', () => {
bookmarkButton5.classList.toggle('bookmark__filled')
})  

let bookmarkButton6 = document.querySelector('#bookmark6')
bookmarkButton6.addEventListener('click', () => {
    bookmarkButton6.classList.toggle('bookmark__filled')
}) 

const answerQuestion1 = get('#answer1')
const answerQuestion2 = get('#answer2')
const answerQuestion3 = get('#answer3')
const answerQuestion4 = get('#answer4')
const answerQuestion5 = get('#answer5')
const answerQuestion6 = get('#answer6')

const buttonAnswer1 = get('#button-answer1')
const buttonAnswer2 = get('#button-answer2')
const buttonAnswer3 = get('#button-answer3')
const buttonAnswer4 = get('#button-answer4')
const buttonAnswer5 = get('#button-answer5')
const buttonAnswer6 = get('#button-answer6')

buttonAnswer1.addEventListener('click', answerToggle(buttonAnswer1, answerQuestion1))
buttonAnswer2.addEventListener('click', answerToggle(buttonAnswer2, answerQuestion2))
buttonAnswer3.addEventListener('click', answerToggle(buttonAnswer3, answerQuestion3))
buttonAnswer4.addEventListener('click', answerToggle(buttonAnswer4, answerQuestion4))
buttonAnswer5.addEventListener('click', answerToggle(buttonAnswer5, answerQuestion5))
buttonAnswer6.addEventListener('click', answerToggle(buttonAnswer6, answerQuestion6))

function answerToggle(button, answer) {
    return () => {
        answer.classList.toggle('hidden')

        if(button.textContent === 'Show answer') {
            button.textContent = 'Hide answer'
        } else {
            button.textContent = 'Show answer'
        }
        return(button, answer)
        }
    }

}
// const cardList = getAll('.answer')
// cardList.forEach(setupCard)

// function setupCard(card) {
//   addToggleLogic(card)
// }

// function addToggleLogic (card) {
//   const button = card.querySelector('answerbutton')
//   const body = card.querySelector('.answerdiv')
//   button.addEventListener('click', () => body.classList.toggle('hidden'))
// }

// function getAll(selector) {
//   return document.querySelectorAll(selector)
// }

// let answerButton = get('#answerButton1')
//  answerButton.addEventListener('click', () => {
//  function 
// )

// function showAnswer1() {
//    let content1 = document.getElementById("answerDiv1");
//    if (content1.style.display === "none") {
//      content1.style.display = "block";
//    } else {
//      content1.style.display = "none";
//    }
//    } 
    
//    function showAnswer2() {
//    let content2 = document.getElementById("answerDiv2");
//    if (content2.style.display === "none") {
//      content2.style.display = "block";
//    } else {
//      content2.style.display = "none";
//    }
// }
    
//    function showAnswer3() {
//    let content3 = document.getElementById("answerDiv3");
//    if (content3.style.display === "none") {
//      content3.style.display = "block";
//    } else {
//      content3.style.display = "none";
//    }
//    } 
    
//    function showAnswer4() {
//    let content4 = document.getElementById("answerDiv4");
//    if (content4.style.display === "none") {
//      content4.style.display = "block";
//    } else {
//      content4.style.display = "none";
//    }
//    } 
    
    
//    function showAnswer5() {
//    let content5 = document.getElementById("answerDiv5");
//    if (content5.style.display === "none") {
//      content5.style.display = "block";
//    } else {
//      content5.style.display = "none";
//    }
//    } 
    
    
//    function showAnswer6() {
//    let content6 = document.getElementById("answerDiv6");
//    if (content6.style.display === "none") {
//      content6.style.display = "block";
//    } else {
//      content6.style.display = "none";
//    }
//    } 



