'use strict';

const images = [
    { 'id': '1', 'url':'./img/colossal.jpg' },
    { 'id': '2', 'url':'./img/eren.jpg' },
    { 'id': '3', 'url':'./img/erennnn.jpg' },
    { 'id': '4', 'url':'./img/esquadrao.jpeg' },
    { 'id': '5', 'url':'./img/femea.jpg' },
    { 'id': '6', 'url':'./img/leviii.jpg' },
    { 'id': '7', 'url':'./img/mikasaa.jpg' },
    { 'id': '8', 'url':'./img/mikasaaa.jpg' },
    { 'id': '9', 'url':'./img/snk.jpeg' },
    { 'id': '10', 'url':'./img/snk2.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);