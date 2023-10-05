import '../../page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'

const faqs = () => {
    return(
        <>
            <div className="container">
                <div className="container bg-info" id="banner-cool">
                    <br/>
                </div>
                <br/>
                <div className="container" id="divisions-main">
                    <h2>Frequency Asked Questions</h2>
                    <hr/>
                    <ul>
                        <li>
                                <h3>What is this group for?</h3>
                            <p style={{"textAlign": "justify"}}>
                                BASE CORE is dedicated to helping students be able to understand the knowledge they've recieved in class by applying them directly to real world projects so that it may be able to seen and understood direcrtly in practice rather than only from the theoratical sides of knowledge.
                            </p>
                        </li>
                        <li>
                                <h3>When does this group meet?</h3>
                            <p style={{"textAlign": "justify"}}>
                                BASE CORE meets two times each week, on Monday and Friday, at the times of 17.30 to 18.30 WIB
                            </p>
                        </li>
                        <li>
                                <h3>Are there rules for this group?</h3>
                            <p style={{"textAlign": "justify"}}>
                                <Link href="https://docs.google.com/document/d/1Hj3I9hb7jh7lQe-hzEv6Qg6S2ooE0jXMXhBXzp5IPPA/edit">Yes there are!</Link>
                            </p>
                        </li>
                        <li>
                                <h3>Does this group provide certificates?</h3>
                            <p style={{"textAlign": "justify"}}>
                                This group provides certificates in the event of full participation as according to the rules laid out <Link href="https://docs.google.com/document/d/1Hj3I9hb7jh7lQe-hzEv6Qg6S2ooE0jXMXhBXzp5IPPA/edit">here</Link>.
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )

}

export default faqs;