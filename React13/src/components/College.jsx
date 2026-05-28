import React from 'react'
import { Link, Outlet } from 'react-router'
function College() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>

                <h1>College</h1>
                <h3><Link to='/'>Go back to home</Link></h3>
                <Link style={{ margin: '10px' }} to=''>STUDENT</Link>
                <Link style={{ margin: '10px' }} to='departement'>Departement</Link>
                <Link style={{ margin: '10px' }} to='Branch'>Branch</Link>
                 <Outlet/>

            </div>

        </>
    )
}

export default College