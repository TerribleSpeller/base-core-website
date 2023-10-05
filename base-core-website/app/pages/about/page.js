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
                        BASE CORE, or Binus ASO School of Engineering Centre for Research Engineering, was founded in August 2023 to fulfill a vacuum presented towards the selection of clubs present within the campus. The group aims to allow people to gain further practical experience in studying engineering for various purposes outside the range provided by the campus.
                    </p>
                    <br/>
                    <p style={{"textAlign": "justify"}}>
                        We focus on more practical applications of the knowledge we've retrived and learned in Campus so that we may be able to be retain and understand the knowledge more. Through practice, may we be able to gain closer to perfection of the knowledge we've learned. Thus, we focus on practical things as enigneers, like engaging in <u>projects, competitions, and direct hands-on research</u>.
                    </p>
                    <br/>
                    <h3>Vision</h3>
                    <p style={{"textAlign": "justify"}}>
                        To become an <b>innovative</b> and <b>highly competitive technology research forum</b>, producing competent and qualified students in the fields of robotics and automotive.
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
                        <li>Whatsapp: 085280555225 ( Ketua Umum - Jo Edwards)</li>
                        <li>Email: core<span className="blockspam" aria-hidden="true">chinesewebsite</span>.binusaso<span className="blockspam" aria-hidden="true">lmaoblocked</span>@gmail<span className="blockspam" aria-hidden="true">thelandsoftheequestrians</span>.com
                        </li> 
                        <li>Technical Inquiries: 
                            <br/>
                            WA: 081293820288 (Techinician - Jason Alexander)
                        </li>
                        
                    </ul>
                    <h3>
                        Technical
                    </h3>
                    <ul>
                        <li>Made using Next.js and Bootstrap</li>
                        <li>Made by Jason Alexander (2602188673) B2026</li>
                        <li>Released under CC BY 4.0 DEED</li>
                    </ul>
                </div>
                <br/>
            </div>

        </>
    )
}

export default about