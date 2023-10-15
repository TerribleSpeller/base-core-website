import '../../page.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const about = () => {
    return(
        <>
            <div className="container">
                <div className="container bg-info" id="banner-cool">
                    <br/>
                </div>
                <br/>
                <div className="conatiner" id="aboutus-mission-vission">
                    <h2>About Us</h2>
                    <hr/>
                    <p style={{"textAlign": "justify"}}>
                        Previously there was a student activity club called BARC (Binus Aso Robotic Club) which focused on honing students' skills in the field of robotics. On May 8 2023 several members of BARC decided to create a new club that did not only focus on robotics but focused more on engineering as a whole. The formation of this club began with the submission of a proposal for the formation of a student activity unit, but for one reason or another this club could only recognized and continued as a student club.
                    </p>
                    <br/>
                    <p style={{"textAlign": "justify"}}>
                        The name of this club is BASE CORE, the word BASE itself is the name of the club's home campus, namely Binus Aso School of Engineering, and CORE is an abbreviation for Center of Research and Engineering which is the hope of this club to become the center of engineering research and engineering in BASE campus.
                    </p>
                    <br/>
                    <h3>Vision</h3>
                    <p style={{"textAlign": "justify"}}>
                        To become an <u>innovative</u> and <u>highly competitive</u> technology research forum, producing competent and qualified students in the fields of robotics and automotive.
                    </p>
                    <br/>
                    <h3>Mission</h3>
                   
                        <ol>
                            <li>
                                <p style={{"textAlign": "justify"}}>
                                    <b>Enrich</b> the reputation of the Binus Aso School of Engineering by <b>creating innovation</b> in the research of each club member which can be demonstrated through participation in competitions and actual implementation in the real world.
                                </p>
                            </li>
                            <li>
                                <p style={{"textAlign": "justify"}}>
                                    <b>Increase</b> the understanding and skills of club members in their <b>respective fields through training, research and experimentation</b> activities to become competent experts in the field of technology.
                                </p>
                            </li>
                            <li>
                                <p style={{"textAlign": "justify"}}>
                                    <b>Encourage</b> collaboration between technological fields to produce <b>creative ideas and innovative solutions</b> that are relevant to the latest technological developments, so that they are able to face <b>future challenges with effective solutions</b>
                                </p>
                            </li>
                        </ol>
                </div>
                <div className="container" id="contact">
                    <br/>
                    <h3>Contact</h3>
                    <ul>
                        <li>General Chair and Head of the Robotic Research Division : Jonathan Edwards Telaumbanua - 085280555225</li> 
                        <li>Head of Automotive Research Division : Leonard Litanius - 08124063338</li>
                        <li>Head of  Robotic Learning Division: Adji Putra Nugraha Kusuma - 081617271362 </li>
                        <li>Email: core<span className="blockspam" aria-hidden="true">chinesewebsite</span>.binusaso<span className="blockspam" aria-hidden="true">lmaoblocked</span>@gmail<span className="blockspam" aria-hidden="true">thelandsoftheequestrians</span>.com
                        </li> 
                        <li>Technical Inquiries: 
                            <br/>
                            WA: 081293820288 (Technician  - Jason Alexander)
                        </li>
                        
                    </ul>
                    <h3>
                        Technical
                    </h3>
                    <ul>
                        <li>Designed using Next.js and Bootstrap</li>
                        <li>Designed by Jason Alexander (2602188673) B2026</li>
                        <li>Released under MIT License</li>
                    </ul>
                </div>
                <br/>
            </div>

        </>
    )
}

export default about