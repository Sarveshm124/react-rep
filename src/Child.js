import React from 'react';

export default function Child (props)
{
    console.log(props)
    return(
        <div>
            <p>my name is {props.na}</p>
            <p>my age is {props.age}</p>
        </div>
    )
}