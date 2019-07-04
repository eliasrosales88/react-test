import  React from 'react';


const person = (props) =>{
    return (
        <div>
            <p>Soy {props.name} persona y tengo {props.age} años</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;