let count = 0;
const para = document.createElement('p');
const button = document.createElement('button')
para.innerText = `Counter : ${count}`
button.innerText = 'Increment';

button.addEventListener('click', () => {
    count++;
    console.log(count);
    para.innerText = `Counter : ${count}`
})
const root = document.getElementById('root');
root.append(para, button)
