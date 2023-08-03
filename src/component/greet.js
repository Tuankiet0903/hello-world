import React from 'react';

// function Greet(){
//     return <h1>Hello Kietnehihi</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName} :3</h1>
            {props.children}
        </div>
    ) 
}

export default Greet