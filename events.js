'use strict';

const picArray = [
    {
        'thumbnail': 'http://placekitten.com/320/300',
        'title': 'Image 1',
    },
    {
        'thumbnail': 'http://placekitten.com/321/300',
        'title': 'Image 2',
    },
    {
        'thumbnail': 'http://placekitten.com/319/300',
        'title': 'Image 3',
    },
];

// innerHTML version ***********************
/*
for (let item of picArray) {
    const html = `<li><img src="${item.thumbnail}"></li>`;
    document.querySelector('ul').innerHTML += html;
}


const links = document.querySelectorAll('li');

for (let link of links) {
    link.addEventListener('click', (evt) => {
        console.log(evt.target);
        // TODO
        // print the title property of selected item to console
    });
}
*/

// DOM object version ****************************
for (let item of picArray) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.thumbnail;
    li.appendChild(img);
    li.addEventListener('click', (evt) => {
        console.log(evt.target);
        // TODO
        // print the title property of selected item to console
    });
    document.querySelector('ul').appendChild(li);
}
