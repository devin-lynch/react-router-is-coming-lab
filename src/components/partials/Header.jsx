import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            {/* <Link to='/'>Home</Link>{' | '} */}
            <Link to='/houses'>Houses</Link>
            {/* <Link></Link>
            <Link></Link> */}
        </nav>
    )
}