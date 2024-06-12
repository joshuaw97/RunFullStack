import Link from 'next/link'


export default function Navbar() {

    return (
        <nav>
            <h1>Run Tracker</h1>
            <Link href="/">Home</Link>
            <Link href="/weather">Weather</Link>
            <Link href="/database">Database</Link>
        </nav>
        


    )




}