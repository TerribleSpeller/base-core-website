import './page.module.css'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'

export default function Custom404() {

    return (
      <div className="container">
        <br/>
        <center><h1>404 - Page Not Found</h1></center>
        <center><Link href="/">Return to Home Page</Link></center>
      </div>
    )
  }