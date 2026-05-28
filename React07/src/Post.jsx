import React from 'react'
import { useState } from 'react'

const Post = React.memo(({ props }) => {
    function Post() {
        console.log("Post component rendered");
        
       
        return (
            <>
                <h1>hello {props.name} you are {props.age} year old</h1>
                
             
            </>
        )
    }
        let a = Post()
        return (
           a 
        )
}
)
export default Post