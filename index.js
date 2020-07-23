"use strict";

console.log('Hello World!');
var indexPage = document.querySelector('#index_page');
var bookmarkPage = document.querySelector('#bookmark_page');
var createPage = document.querySelector('#create_page');
var profilePage = document.querySelector('#profile_page');
var indexHeader = document.querySelector('#header1');
var bookmarkHeader = document.querySelector('#header2');
var createHeader = document.querySelector('#header3');
var profileHeader = document.querySelector('#header4');
var navHome = document.querySelector('#nav_home');
var navBookmark = document.querySelector('#nav_bookmark');
var navCreate = document.querySelector('#nav_create');
var navProfile = document.querySelector('#nav_profile'); // // index.html bookmarks 
// const bookmarkButton1 = document.querySelector ('#bookmark1') 
// const bookmarkButton2 = document.querySelector ('#bookmark2')
// const bookmarkButton3 = document.querySelector ('#bookmark3')
// const bookmarkButton4 = document.querySelector ('#bookmark4')
// // bookmarks.html bookmarks 
// const bookmarkButton5 = document.querySelector ('#bookmark5') 
// const bookmarkButton6 = document.querySelector ('#bookmark6')
// const bookmarkButton7 = document.querySelector ('#bookmark7')
// const bookmarkButton8 = document.querySelector ('#bookmark8')

navHome.addEventListener('click', function () {
  // index header
  indexHeader.classList.remove('displaynone');
  bookmarkHeader.classList.add('displaynone');
  createHeader.classList.add('displaynone');
  profileHeader.classList.add('displaynone');
});
navHome.addEventListener('click', function () {
  // index page 
  indexPage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navBookmark.addEventListener('click', function () {
  // bookmark header 
  bookmarkHeader.classList.remove('displaynone');
  indexHeader.classList.add('displaynone');
  createHeader.classList.add('displaynone');
  profileHeader.classList.add('displaynone');
});
navBookmark.addEventListener('click', function () {
  // bookmark page 
  bookmarkPage.classList.remove('displaynone');
  indexPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navCreate.addEventListener('click', function () {
  // create header 
  createHeader.classList.remove('displaynone');
  bookmarkHeader.classList.add('displaynone');
  indexHeader.classList.add('displaynone');
  profileHeader.classList.add('displaynone');
});
navCreate.addEventListener('click', function () {
  // create page 
  createPage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  indexPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navProfile.addEventListener('click', function () {
  // profile header 
  profileHeader.classList.remove('displaynone');
  bookmarkHeader.classList.add('displaynone');
  createHeader.classList.add('displaynone');
  indexHeader.classList.add('displaynone');
});
navProfile.addEventListener('click', function () {
  // profile page 
  profilePage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  indexPage.classList.add('displaynone');
});
var bookmarkButton1 = document.querySelector('#bookmark1');
bookmarkButton1.addEventListener('click', function () {
  bookmarkButton1.classList.toggle('bookmark__filled');
});
var bookmarkButton2 = document.querySelector('#bookmark2');
bookmarkButton2.addEventListener('click', function () {
  bookmarkButton2.classList.toggle('bookmark__filled');
});
var bookmarkButton3 = document.querySelector('#bookmark3');
bookmarkButton3.addEventListener('click', function () {
  bookmarkButton3.classList.toggle('bookmark__filled');
});
var bookmarkButton4 = document.querySelector('#bookmark4');
bookmarkButton4.addEventListener('click', function () {
  bookmarkButton4.classList.toggle('bookmark__filled');
});
var bookmarkButton5 = document.querySelector('#bookmark5');
bookmarkButton5.addEventListener('click', function () {
  bookmarkButton5.classList.toggle('bookmark__filled');
});
var bookmarkButton6 = document.querySelector('#bookmark6');
bookmarkButton6.addEventListener('click', function () {
  bookmarkButton6.classList.toggle('bookmark__filled');
}); // Show answer    

function showAnswer1() {
  var content1 = document.getElementById("answerDiv1");

  if (content1.style.display === "none") {
    content1.style.display = "block";
  } else {
    content1.style.display = "none";
  }
}

function showAnswer2() {
  var content2 = document.getElementById("answerDiv2");

  if (content2.style.display === "none") {
    content2.style.display = "block";
  } else {
    content2.style.display = "none";
  }
}

function showAnswer3() {
  var content3 = document.getElementById("answerDiv3");

  if (content3.style.display === "none") {
    content3.style.display = "block";
  } else {
    content3.style.display = "none";
  }
}

function showAnswer4() {
  var content4 = document.getElementById("answerDiv4");

  if (content4.style.display === "none") {
    content4.style.display = "block";
  } else {
    content4.style.display = "none";
  }
}

function showAnswer5() {
  var content5 = document.getElementById("answerDiv5");

  if (content5.style.display === "none") {
    content5.style.display = "block";
  } else {
    content5.style.display = "none";
  }
}

function showAnswer6() {
  var content6 = document.getElementById("answerDiv6");

  if (content6.style.display === "none") {
    content6.style.display = "block";
  } else {
    content6.style.display = "none";
  }
}

 //Show answer button 
     let coll = document.getElementsByClassName("collapsible");
 let i;
 for (i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function() {
     this.classList.toggle("active");
     let content = this.nextElementSibling;
     if (content.style.display === "block") {
       content.style.display = "none";
     } else {
       content.style.display = "block";
     }
   });
 } 
