"use strict";

console.log('Hello World!');
var indexPage = document.querySelector('#index_js');
var bookmarkPage = document.querySelector('#bookmark_js');
var createPage = document.querySelector('#create_js');
var profilePage = document.querySelector('#profile_js');
var navHome = document.querySelector('#nav_home');
var navBookmark = document.querySelector('#nav_bookmark');
var navCreate = document.querySelector('#nav_create');
var navProfile = document.querySelector('#nav_profile');
var bookmarkButton1 = document.querySelector('#bookmark1');
var bookmarkButton2 = document.querySelector('#bookmark2');
var bookmarkButton3 = document.querySelector('#bookmark3');
var bookmarkButton4 = document.querySelector('#bookmark4');
navHome.addEventListener('click', function () {
  indexPage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navBookmark.addEventListener('click', function () {
  bookmarkPage.classList.remove('displaynone');
  indexPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navCreate.addEventListener('click', function () {
  createPage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  indexPage.classList.add('displaynone');
  profilePage.classList.add('displaynone');
});
navProfile.addEventListener('click', function () {
  profilePage.classList.remove('displaynone');
  bookmarkPage.classList.add('displaynone');
  createPage.classList.add('displaynone');
  indexPage.classList.add('displaynone');
});