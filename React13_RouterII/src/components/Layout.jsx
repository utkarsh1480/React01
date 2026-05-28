import { Outlet, useNavigation } from 'react-router'
import Headers from "./Header/Header"
import Footer from "./Footer/Footer"

function Layout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'

    console.log("STATE:", navigation.state) // 👈 check console

    return (
        <>
            {/* Loading bar MUST be before Headers */}
            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-[9999] bg-black" />
            )}

            <Headers />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout