// import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    // const [data, setData] = useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/utkarsh1480')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [data])
    const data = useLoaderData()
    return (

        <>
            <div className='text-center bg-gray-600 text-white text-3xl p-3'>Github Followers: {data.followers}
                
                <img className='h-80 ml-100 rounded-full ' src={data.avatar_url} alt="Avatar" />
        </div>
          
        </>
    )
}

export default Github

export const GithubLoader = async () => {
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // await delay(2000);
    await new Promise(resolve => setTimeout(resolve, 2000)) // 👈 2 second delay
    const response = await fetch('https://api.github.com/users/utkarsh1480');
    return response.json();
}