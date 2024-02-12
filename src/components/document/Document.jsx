import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import './Document.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Trans } from 'react-i18next'
import { DocumentCard } from "./DocumentCard";
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide } from 'react-slideshow-image';
import ReactPlayer from 'react-player/file'

import Document1 from '../../assets/vid/Document1.mp4'
import Document2 from '../../assets/vid/Document2.mp4'
import Document3 from '../../assets/vid/Document3.mp4'
import Document4 from '../../assets/vid/Document4.mp4'

const Document = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhmXRypq%2F1.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FSrfyp5v%2F2.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQDF8jN4%2F3.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F2ZJC7d5%2F4.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FGCSwrvB%2F5.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FFBsrw2k%2F6.jpg&w=640&q=75",
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F87XHChv%2F1.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhWqgh3b%2F2.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FLzLB5Qs%2F3.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FKx8Xq6f%2F4.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FmSZ8qPq%2F5.jpg&w=640&q=75",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://mathmystic.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F68VQVN7%2F6.jpg&w=640&q=75",
    },
  ];

  return (
    <div className='mmt__document' id='document'>
      <h1><Trans>Document</Trans></h1>
      <div className='mmt__document-content'>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first" >Sổ tay toán học(Tiếng Việt)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Sổ tay toán học(Tiếng Anh)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Video hướng dẫn sử dụng<></> </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content id="slideInUp" >
            <Tab.Pane eventKey="first">
              <div className="slide-container mmt__document-slide">
                <Slide {...{ duration: 100, autoplay: false }}>
                  {projects.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  ))}
                </Slide>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="slide-container mmt__document-slide">
                <Slide {...{ duration: 100, autoplay: false }}>
                  {projects2.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  ))}
                </Slide>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {/* <Row>
                <iframe title="Hướng dẫn sử dụng" width="560" height="500" src="https://tube.exozy.me/videos/embed/470a32e3-27f2-4101-bb5e-1cdfc1816df1" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
              </Row> */}
              <div className="slide-container mmt__document-slide2">
                <Slide {...{ duration: 100, autoplay: false, infinite: false }}>
                  {/* {projects.map((fadeImage, index) => (
                    <div key={index}> */}
                  <ReactPlayer
                    {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto'}}
                    url={Document1} />

                  <ReactPlayer
                   {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document2} />

                  <ReactPlayer
                    {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document3} />


                  <ReactPlayer
                   {...{ controls: true, width: '80%', height: '80%' }}
                    style={{ margin: 'auto' }}
                    url={Document4} />


                  {/* <img style={{ width: '100%', borderRadius: 30 }} src={fadeImage.imgUrl} /> */}
                  {/* <h2>{fadeImage.caption}</h2> */}
                  {/* </div>
                  ))} */}
                </Slide>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  )
}

export default Document
