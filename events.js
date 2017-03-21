'use strict';

const spyArray = [
    {
        'thumbnail': 'http://placekitten.com/320/300',
        'image': 'http://placekitten.com/768/720',
    },
    {
        'thumbnail': 'http://placekitten.com/321/300',
        'image': 'http://placekitten.com/770/720',
    },
    {
        'thumbnail': 'http://placekitten.com/319/300',
        'image': 'http://placekitten.com/769/720',
    },
];

// innerHTML version ***********************
/*
for (let item of spyArray) {
    const html = `<li><img src="${item.thumbnail}"></li>`;
    document.querySelector('ul').innerHTML += html;
}


const links = document.querySelectorAll('li');

for (let link of links) {
    link.addEventListener('click', (evt) => {
        console.log(evt.target);
        // TODO
        // print the image property of selected item to console
    });
}
*/

// DOM object version ****************************
for (let item of spyArray) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.thumbnail;
    li.appendChild(img);
    li.addEventListener('click', (evt) => {
        console.log(evt.target);
        // TODO
        // print the image property of selected item to console
    });
    document.querySelector('ul').appendChild(li);
}

// class constructor allows missing @returns tag
/**
 * Represents a sum.
 */
class Prefix {
    /**
     * @param {number} num1 The first number.
     * @param {number} num2 The second number.
     */
    constructor(num1, num2) {
        console.log(this);
    }
    get width() {
        return;
    }
}

const p = new Prefix();
