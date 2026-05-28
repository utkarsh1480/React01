// const { createElement } = require("react");

// const h1 = document.createElement('h1');
// h1.style.backgroundColor = 'orange';
// h1.style.color = 'black';
// h1.style.fontSize = '30px';
// h1.id = 'first';
// h1.className = 'ele1';
// h1.textContent = 'Hello Coder Army';
// document.getElementById('root').appendChild(h1);


// const p = document.createElement('h1');
// p.style.backgroundColor = 'green';
// p.style.color = 'black';
// p.style.fontSize = '30px';
// p.id = 'first';
// p.className = 'ele1';
// p.textContent = 'This is paragragp';
// document.getElementById('root').appendChild(p);

// Solution

const React = {
    createElement : function(tag, attribute, children){
       const element = document.createElement(tag);
       for(const key in attribute){
            if(key === 'style'){
                Object.assign(element.style, attribute[key]);
            }
            else {
                element[key] = attribute[key];
            }
        }
       element.textContent = children;
        return element;
    }
}

const ReactDom = {
    render :  function(element, root){
        root.appendChild(element);
    }
};

const root = document.getElementById('root');
const element = React.createElement('tag',   {
        style: {backgroundColor: "orange", color: "black", fontSize: "30px"},
        id: "first",
        className: "ele1"
    }, 'HelloUtkarsh');
ReactDom.render(element,root);
const element2 = React.createElement('tag',   {
        style: {backgroundColor: "orange", color: "black", fontSize: "30px"},
        id: "first",
        className: "ele1"
    }, 'HelloUtkarsh');
ReactDom.render(element2,root);