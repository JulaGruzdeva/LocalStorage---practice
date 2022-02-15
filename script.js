'use strict';

const checkbox = document.querySelector('#checkbox');
const wrapper = document.querySelector('.wrapper');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')){
    checkbox.checked = true;
}
if (localStorage.getItem('bg')==='changed'){
    wrapper.style.backgroundColor = '#AFEEEE'

}
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
})

change.addEventListener('click', ()=>{
    if (localStorage.getItem('bg')==='changed'){
        localStorage.removeItem('bg')
        wrapper.style.backgroundColor = '#fff'

    }else{
        localStorage.setItem('bg', 'changed');
        wrapper.style.backgroundColor = '#AFEEEE'
    }
})

const person = {
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person)
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));