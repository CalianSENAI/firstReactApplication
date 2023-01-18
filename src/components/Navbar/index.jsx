import './style.css'

export function Navbar(){
    return(
        <>
            <ul>
                <li className='navLogo'><a href="">Logo Teste</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li className='navContact'><a href="">Contact</a></li>
            </ul>
        </>
    )
}