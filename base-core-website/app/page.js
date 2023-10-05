import './page.module.css'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/NavBar.jsx'


export default function Home() {
  return (
   <>
      <div className="container">
        <div className="container bg-info" id="banner-cool">
          <br/>
        </div>
        <div className="container bg-img-landing" id="cool-landing-image" >
          <div className="mx-auto my-auto">

            <div className="my-auto border  bg-success-subtle rounded opacity-75" id="cool content" style={{"minWidth": "40 rem", "textAlign": "center"}}>

              <h1>BASE CORE</h1>

            </div>
          </div>

        </div>
        <br/>
            <br/>
   
        <div className="container" id="landing-intro">
          <p style={{ "textAlign": "justify" }}>
            BASE CORE, or Binus ASO School of Engineering Centre of Research Engineering, is a club dedicated to the study and research of Programming and Robotics for students to undertake in their free time. 
          </p>
          <br/>
          <p style={{ "textAlign": "justify" }}>
            BASE CORE aims to teach and assist students through methods of 1. Direct Learning and 2.Project-Based Teaching. Aligning with our Mission Statement of Assisting students with being able to adapt to a modern and robotocized world, setting themselves up to be more capable in the future and allowing them to prosper further in such ages. 
          </p>
        </div>

      </div>
   </>
  )
}
