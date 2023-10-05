import './page.module.css'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/NavBar.jsx'
import EmailReplaceScript from './components/emailReplace.js'


export default function Home() {
  return (
   <>
      <div className="container">
        <div className="container bg-info" id="banner-cool">
          <br/>
        </div>
        <div className="container bg-img-landing rounded-bottom" id="cool-landing-image" >
          <div className="mx-auto my-auto">

            <div className="my-auto border   bg-success-subtle rounded opacity-75" id="cool content" style={{"minWidth": "40 rem", "textAlign": "center"}}>

              <h1>BASE CORE</h1>

            </div>
          </div>

        </div>
        <br/>
            <br/>
   
        <div className="container" id="landing-intro">
          <p style={{ "textAlign": "justify" }}>
            BASE CORE, or Binus ASO School of Engineering Centre of Research Engineering, is a club dedicated to the study and research of Programming and Robotics for students to undertake in their free time, to provide opportunities for students to develop their skills and knowledge in the field of robotics and automotives. 
          </p>
          <br/>
          <p style={{ "textAlign": "justify" }}>
            BASE CORE aims to teach and assist students through methods of 1. Direct Learning and 2.Project-Based Teaching. Aligning with our Mission Statement of Assisting students with being able to adapt to a modern and robotocized world, setting themselves up to be more capable in the future and allowing them to prosper further in such ages and increase their ability to conduct research through practical means.
          </p>
          <br/>
          <p style={{ "textAlign": "justify" }}>
            BASE CORE hopes that it may bring benefits in the form of enrching student experience and provides opportunities to develop their potential in the field of technology. In addition, with this club, BASE CORE club members can expand their social networks and improve teamwork skills, and can also be a means of expanding knowledge and skills in the field of technology for students who do not have a strong engineering background. In this way, BASE CORE can make a positive contribution to technological development and create students who are competent in the field of technology to assist in building up our nation. 
          </p>
        </div>
        <br/>
        <div className='container' id="divisions">
          <h2>BASE CORE Divisions</h2>
          <hr/>
            <u><h3>
              Robotic Research Division
            </h3></u>
            <p style={{ "textAlign": "justify" }}>
              The Robotics Research Division engages in 
            </p>
            <ol>
              <li>Research alongside with Lecturers</li>
              <li>creating creations for robotic competitions</li>
              <li>project consultation</li>
            </ol>
            <br/>
            <u><h3>
              Automotive Research Division
            </h3></u>
            <p style={{ "textAlign": "justify" }}>
              The Automotive Research Division engages in 
            </p>
            <ol>
              <li>Research into car systems</li>
              <li>Research for technological integration with the automotive industry</li>
              <li>Research in technology for manufacturing automotives</li>
              <li>Study tours to automotive exhibitions/industry</li>
            </ol>
            <br/>
            <u><h3>
              Learning Division
            </h3></u>
            <p style={{ "textAlign": "justify" }}>
              The Learning Division engages in 
            </p>
            <ol>
              <li>Tutoring Sessions (2x/Weeks)</li>
              <li>Final Project Club</li>
            </ol>
        </div>
        <br/>
        <div className="container" id="syarat-daftar"> 
          <h2>How to Join?</h2>
          <hr/>
          <u><h3>Robotic Research Division</h3></u>
          <p style={{"textAlign": "justify"}}>To join this division, the following are needed:</p>
          <ul>
              <li>CV</li>
              <li>Essay</li>
              <li>Portfolio</li>
              <li>Interview</li>
          </ul>
          <u><h3>Automtive Research Division</h3></u>
          <ul>
          <p style={{"textAlign": "justify"}}>To join this division, the following are needed:</p>
              <li>CV</li>
              <li>Interview</li>
          </ul>
          <u><h3>Learning Division</h3></u>
          <p style={{"textAlign": "justify"}}>To join this division, the following are needed:</p>
          <ul>
              <li>Interview</li>
          </ul>
        </div>
        <br/>


        
          

      </div>
   </>
  )
}
