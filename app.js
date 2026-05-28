//Lecture 01
// lets suppose we want to create a h1 element 
// const h1 = document.createElement('h1');
// h1.style.backgroundColor = 'orange';
// h1.style.color = 'black';
// h1.style.fontSize = '30px';
// h1.id = 'first';
// h1.className = 'ele1';
// h1.textContent = 'Hello Coder Army';
// document.getElementById('root').appendChild(h1);
// 1. Repetitive code
// 2. Hard to maintain
// 3. Error - prone
// 4. Not reusable

// Solution 01

// const React = {
//     createElement: (tags, props, children) => {
//         const element = document.createElement(tags);
      
//         for (const key in props) {
//             if (key == 'style') {
//                 Object.assign(element.style , props[key])
//             } else {
//                 element[key] = props[key];
//             }
//         }
       
//         element.textContent = children;
//         return element;
//     }
// }
// const element = React.createElement('h1', {
//     style: { backgroundColor: "orange", color: "black", fontSize: "30px" },
//     id: "first"
// }, "hello Coder Army"
// );
// import React from "react";
// import ReactDOM from "react-dom/client";


// const element = <h1>Hello Coder Army</h1>

// React.createELement("h1",null,"Hello Coder Army")
// React.createELement(null,"h1","Hello COder Army");


// ReactDOM.createRoot(document.getElementById('root')).render(element);
// document.getElementById('root').appendChild(element);
// Lecture 02
// function Header() {
//     return <h1>Election Commission of India</h1>;
// }

// function Main() {
//     return <h1>This is Main Part</h1>;
// }

// function Footer() {
//     return <h1>This is Footer Part</h1>;
// }

// function App() {
//     return (
//         <>
//             <Header />
//             <Main />
//             <Footer />
//         </>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// setInterval(function () {
//     for (let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }, 5000)
// setTimeout(function () {
//     for (let i = 0; i < 1000000000000000000000000000; i++) {
//         console.log(i);
//         console.log("Test")
//     }
// }, 1000)
