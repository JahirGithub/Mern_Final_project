// import React from 'react';
// import '../../App.css';

// export default function Home() {
//   return (
//     <>
//       <h1 className='home'>Hi, Welcome to GMIT 🥰</h1>

//     </>
//   );
// }

import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import PinterestIcon from "@material-ui/icons/Pinterest";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from "react-bootstrap";
import imgbg from "./img/pinterestbg.png";

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";

import img13 from "./img/img13.jpg";
import img14 from "./img/img14.jpg";
import img15 from "./img/img15.jpg";
import img16 from "./img/img16.jpg";
import img17 from "./img/img17.jpg";
import img18 from "./img/img18.jpg";

function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <div>
      {/* <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <SigupButton>
        <a href="/">Sigup</a>
      </SigupButton>
      <LoginButton>
        <a href="/">Login</a>
      </LoginButton>
      <AboutButton>
        <a href="/">About Us</a>
      </AboutButton>
      <ContactButton>
        <a href="/">Contact Us</a>
      </ContactButton>
    </Wrapper> */}


      <ReactBootStrap.Carousel>
        <ReactBootStrap.Carousel.Item interval={500}>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'red' }}>
            <h1>Top Technology Idea  </h1>

            {/* <DownButton id="down" className="open-btn">
                        <IconButton  style={{color: 'red'}}>
                              <ExpandMoreRoundedIcon/>
                        </IconButton>
                  </DownButton> */}

          </ReactBootStrap.Carousel.Caption>




          <ReactBootStrap.Row>
            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45', display: 'flex' }}>
                <ReactBootStrap.Card.Img variant="top" src={img1} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img2} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img3} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img4} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img5} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img6} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>




        </ReactBootStrap.Carousel.Item>



        <ReactBootStrap.Carousel.Item interval={250}>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'blue' }}>
            <h1>Garden Decoration Idea  </h1>

            {/* <DownButton id="down1">
                        <IconButton style={{color: 'blue'}}>
                              <ExpandMoreRoundedIcon />
                        </IconButton>
                      </DownButton> */}

          </ReactBootStrap.Carousel.Caption>


          <ReactBootStrap.Row>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', display: 'flex', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img7} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img8} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img9} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img10} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img11} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img12} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

        </ReactBootStrap.Carousel.Item>



        <ReactBootStrap.Carousel.Item>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: '#e3780c' }}>
            <h1>Chai Time Snacks Idea  </h1>


            {/* <DownButton id="down2">
                        <IconButton style={{color: '#e3780c'}}>
                              <ExpandMoreRoundedIcon />
                        </IconButton>
                     </DownButton> */}

          </ReactBootStrap.Carousel.Caption>

          <ReactBootStrap.Row>



            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', display: 'flex', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img13} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img14} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img15} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img16} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img17} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img18} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>



        </ReactBootStrap.Carousel.Item>



      </ReactBootStrap.Carousel>
      <div>

        <ReactBootStrap.Card className="bg-dark text-white">

          <ReactBootStrap.Card.Img variant="top" src={imgbg} style={{ width: '100%', height: '100%', borderRadius: '30px' }} />
          <ReactBootStrap.Card.ImgOverlay>

          </ReactBootStrap.Card.ImgOverlay>
        </ReactBootStrap.Card>
      </div>

    </div>


  )




}
export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const Page = styled.div`
  display: flex;
  height: 33px;
  min-width: 100px;
  margin:5px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  ${'' /* background-color: black; */}

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  :hover {
    background-color: gray;
  }
`;
const HomePageButton = styled(Page)`
  background-color: black;
`;

const SigupButton = styled(Page)`
  background-color: red;
`;
const LoginButton = styled(Page)`
  background-color: red;
`;
const AboutButton = styled(Page)`
  background-color: blue;
`;
const ContactButton = styled(Page)`
  background-color: blue;
`;



