import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
    return(
        <div className="header">
            <Link to="home" style={{textDecoration: 'none'}}><h1 className='logo'>Logo</h1></Link>
            <div className='logsign'>
                <Link to="login"><button className='log'>Login</button></Link>
                <button className='sign'>Sign up</button>
            </div>
        </div>
    )
}