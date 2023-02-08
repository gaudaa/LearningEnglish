import { Outlet } from "react-router-dom"
import {Header} from "./header/header"

export const Navigationcontainer = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}