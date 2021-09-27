// Select the section with an id of container without using querySelector.

const container = document.getElementById('container')

// Select the section with an id of container using querySelector.

const section = document.querySelector('#container')

// Select all of the list items with a class of “second”.

const liSecond = document.getElementsByClassName('second')

// Select a list item with a class of third, but only the list item inside of the ol tag.

const liThird = document.getElementsByClassName('third')
const olThird = liThird[1]

// Give the section with an id of container the text “Hello!”.

section.innerText = "Hello!"

// Add the class main to the div with a class of footer.

const divall = document.querySelectorAll('div')
const divfoot = divall[1]
divfoot.classList.add('main')

// Remove the class main on the div with a class of footer.

divfoot.classList.remove('main')

// Create a new li element.

const newli = document.createElement('li');

// Give the li the text “four”.

newli.innerText = "four"

// Append the li to the ul element.

const ul = document.querySelector('ul')
ul.append(newli);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.

function backgroundColor() {
    const olli = document.querySelectorAll('ol');

    for (let li of olli) {
        li.classList.add('green');
    }
}

backgroundColor();

// Remove the div with a class of footer

divfoot.remove();



