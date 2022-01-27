// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const menu = document.querySelector('.menu');

const nav = document.querySelector('nav');

menu.addEventListener('click', () => {

    menu.classList.toggle('open')
    nav.classList.toggle('navbar')
});