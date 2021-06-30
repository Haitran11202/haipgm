var boxHTMLCollection = document.getElementsByClassName('box');
var box1Element = document.querySelector('.box .item:first-child');
var box2Element = document.querySelector('.box .item:nth-child(2)');
var allItemElements = document.querySelectorAll('li');
var box1ItemElements = document.querySelectorAll('.box:first-child .item');
var box2ItemElements = document.querySelectorAll('.box:nth-child(2) .item');

var boxHTMLCollection = document.getElementsByClassName('box');
var box1Element = document.querySelector('.box:first-child');
var box2Element = document.querySelector('.box:nth-child(2)');
var allItemElements = document.getElementsByTagName('li');
var box1ItemElements = document.querySelectorAll('.box:first-child .item');
var box2ItemElements = document.querySelectorAll('.box:nth-child(2) .item');
