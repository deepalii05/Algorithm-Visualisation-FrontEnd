import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Weather Web-Application"
                description="Web app which will give you all the details about weather conditions in your area This project is made using Javascript I made a web app for users to see the current weather and the weather forecast for the next 7 days. with Additional Features like Displaying current weather including weather conditions, temperature, humidity, wind speed, and date and time Visualization to display the temperature change, humidity change, and weather conditions of each day."
                ghLink="https://weather-webapp-api-based.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="Sorting Algo Visualization"
                description="This is a part of introduction page Giving a brief information about Various Sorting Techniques This page is fully Responsive languages used here are html css and jquery which makes the page comfortable for any type of mobile views including desktop views of various types"
                ghLink="https://sorting-algo-visualization.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Audio speech to sign language converter "
                description="A web application which takes in live audio speech recording as input, converts it into text and displays the relevant Indian Sign Language animations.Front-end using HTML,CSS,JavaScript.Speech recognition using JavaScript Web speech API.Text Preprocessing using Natural Language Toolkit(NLTK).A 3D animation of a character created using Blender 3D tool."
                ghLink="https://github.com/deepalii05/SignHub"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Document-Classification-and-Data-Extraction"
                description="Model that can recognise the collection of papers contained in a pdf or image made up of numerous documents. To accomplish this, the input PDF is divided into individual pages. The CNN model is used to categorise each page into the appropriate document category. After that, each document's data is extracted using OCR (optical character recognition). This is being recommended for five documents: voter identification, driver's licence, PAN, and Aadhar."
                ghLink="https://github.com/deepalii05/Document-classification-and-Data-extraction-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Mars oasis"
                description="Revolutionize Your Restaurant Experience with Our AI Chatbot- Aditi: Your Personalized Menu Assistant and Waiter, and our app- Mars Oasis: Providing out of this world flavors, served on the red planet "
                ghLink="https://devfolio.co/projects/mars-oasis-f16f"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Ease Parkers- Parking Management System"
                description=" Ease Parkers- Parking Management System is a small system that can be easily transferred from one device to another by either sharing a ZIP file or by source code or directly by a hosted link. Its purpose is to solve a problem that bothers many vendors today for managing parking slots inside a parking storey. So it provides you a very simplistic solution of managing parking slots which provides you with making an entry of incoming and outgoing vehicles’.Parking Management System besides managing slots also provides you with several functionalities to keep your database up to date."
                ghLink="https://github.com/deepalii05/ParkingVehicleManagementOnline"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist