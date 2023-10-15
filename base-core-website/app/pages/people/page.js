import '../../page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'

const people = () => {
    return(
        <>
            <div className="container">
                <div className="container bg-info" id="banner-cool">
                    <br/>
                </div>
                <br/>
                <div className="container" id="divisions-main-people">
                    <h2>Administrative Staff</h2>
                    <ul>
                        <li>Jonathan Edwards Telaumbanua 2602165303 - General Head</li>
                        <li>Samantha Grace Tjong Fernandez 2602133106 - Public Secretary</li>
                        <li>Andrean Karim 2602247493 - Public Treasurer</li>
                        <li>Adji Putra Nugraha Kusuma 2602094490 -  Head of Robotic Teaching</li>
                        <li>Nicholas Ananda Khosasi 260210225 - Vice Head of  Robotic Teaching</li>
                        <li>Leonard Litanius 2602130230 - Head of Automotive Research</li>
                        <li>Muhammad Deno Wijaya 2602249366 - Primary Vice Head of Automotive Research</li>
                        <li>Patrick Miki Leslie 2602115210 - Secondary Vice Head of Automotive Research</li>
                    </ul>
                    <h2>Members</h2>
                    <h3>Robotic Research Division</h3>
                    <ul>
                        <li>Christopher Ariel 2602088802</li> 
                        <li>Allen Ferdinand Tan 2602088821</li> 
                        <li>Ricky Kosasi 2602130224</li>
                        <li>Edriel Marvel Ang 2602115223</li> 
                        <li>Alvin Winarta 2602185803</li> 
                    </ul>
                    <h3>Robotic Teaching Division</h3>
                    <ul>
                        <li>Juan Christian Kurniawan 2602080516</li>
                        <li>Jason Alexander 2602188673</li>
                        <li>Muhammad Raihan Sunaryo</li>
                    </ul>
                    <h3>Automotive Research Division</h3>
                    <ul>
                        <li>Vito Christian 2602103910 </li>
                        <li>Steven Salim Hanandtha 2602053055 </li>
                        <li>Maxwell Angsana 2602080535 </li>
                        <li>Willsan A Jantho 2602053004 </li>
                        <li>Jason Alexander Lie 2602130205 </li>
                        <li>Steven Salim 2602115204 </li>
                        <li>Efran Leonard Putra Satria 2602053036 </li>
                        <li>Richard Anthony Lim 2602092043 </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default people;