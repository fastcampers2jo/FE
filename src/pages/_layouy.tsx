import { Suspense } from "react"
import { Outlet } from "react-router-dom"

const Layout = ()=>{
    return(
        <div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Layout;