// import logo from './logo.svg';
// import React from 'react';
import React, { useState } from 'react';

import './App.css';

import image1 from './img/banner1.jpg';
import image2 from './img/banner2.jpg';
import image3 from './img/banner3.jpg';

function App() {

  const accordionData = {
    title: 'SEE ALL EVENTS',
    event1: `Vivid Sydney 16 Aug 2022`,
    event2: `Queen\'s 16 Jun 2022`,
    event3: `Father\'s day 9 Sep 2022`
    
  };

  const accordionData2 = {
    title2: 'LEARN MORE',
    content2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
    
  };

  const accordionData3 = {
    title3: 'Queen\'s Birthday',
    content3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .`
    
  };

  const accordionData4 = {
    title4: 'Father\'s Day',
    content4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .`
    
  };

  const { title, event1, event2, event3 } = accordionData;
  const { title2, content2 } = accordionData2;
  const { title3, content3 } = accordionData3;
  const { title4, content4 } = accordionData4;

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  return (
    <div>
      <section className="bannerbg">
        <div className="container-fluid">
          <div className="bannrinfo">
            <div className="whtssec"><h1>what's on</h1></div>


            <div className="slidersec">

              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                   <img id="image1" className="d-block w-100" src={image1} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img id="image2" className="d-block w-100" src={image2}  alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img id="image3"  className="d-block w-100" src={image3}  alt="Third slide" />
                  </div> 
                </div> 

              </div>
            </div> 

            <div className="right-content">
              <span>14-18 aug</span>
              <div onclick=""><h3>Vivid Sydney</h3></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<React.Fragment>
 <div className="accordion1">
  <div className="accordion-item1">
    <div
      className="accordion-title1"
      onClick={() => setIsActive(!isActive) }>
      <div>{title2}{isActive ? ' -' : ' +'}</div>
      <div >
    
      </div>
    </div>

   {isActive && <div className="accordion-content">
     
     <p>{content2}</p>
     <button className="button"><a href="#">Link</a></button>
     </div>}

</div>
</div>

<hr className="hrbx" />
  <div className="accordion-item2">
    <div
      className="accordion-title2"
      onClick={() => setIsActive3(!isActive3) }>
         <span>16 jun</span>
      <div><h4>{title3}{isActive3}</h4></div>
      <div >
    
      </div>
    </div>

   {isActive3 && <div className="accordion-content2">
     <p>{content3}</p>
     <button className="button"><a href="#">Link</a></button>
     </div>}

</div>

<hr className="hrbx" />
  <div className="accordion-item2">
    <div
      className="accordion-title2"
      onClick={() => setIsActive4(!isActive4) }>
         <span>9 Sep</span>
      <div><h4>{title4}{isActive4}</h4></div>
      <div >
    
      </div>
    </div>

   {isActive4 && <div className="accordion-content2">
     <p>{content4}</p>
     <button className="button"><a href="#">Link</a></button>
     </div>}

</div>

 <div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title "
      onClick={() => setIsActive2(!isActive2)}
    >
      <div>{title}{isActive ? ' >' : ' >'}</div>
    </div>
   {isActive2 && <div className="accordion-content "><br/>{event1}<br/>{event2}<br/>{event3}</div>}

  </div>
</div>
    </React.Fragment>



            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default App;
