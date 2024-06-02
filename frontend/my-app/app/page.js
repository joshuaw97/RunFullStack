import Link from 'next/link'
 

export const metadata = {
  title: 'Run Tracker',
}

export default function Page() {
  return <Link href="/weather">Weather</Link>
}
