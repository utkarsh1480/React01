import React from 'react'
const Child = React.memo(({ number }) => {
    console.log("Sum render");
    function calculateSum() {
        
       
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;

        
    }
    const total = calculateSum()
   
    return (
        <>
            <h1>This is our Math Libraray</h1>
            <h2>Sum: {total}</h2>
        
        </>
    )
})

// function Child() {
//     console.log("Child component rendered")
//     function calculateSum() {
//         let sum = 0;
        
//         for (let i = 1; i <= 1000; i++) {
//             sum += i;
//         }
//         return sum;
// }

//     const total = calculateSum();

//     return (
//         <>
//             <h1>This is our Math Libraray</h1>
//             <h2>Sum: {total}</h2>
//         </>
//     );
// }

export default Child