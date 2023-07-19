
import "./App.css";
import img1 from "./images/Mask group.png";
import img0 from "./images/Group 1000006637.png";
import img2 from "./images/1200x630wa (1) 1.png";
import img3 from "./images/circle.png";
import img4 from "./images/Group 1000004718.png";
import img5 from "./images/Group 1000004715.png";
import img6 from "./images/Group 1000004716.png";
import img7 from "./images/Aboust us sx (1).png";
import img8 from "./images/HOME 2 (1).png";
import img9 from "./images/Aboust us Header (1).png";
import img10 from "./images/Shop now Header 1 (1).png";
import img11 from "./images/Login Screen 1 (1).png";
import img12 from "./images/Group 1000006505 (1).png";
import img13 from "./images/Group 1000006500 (1).png";
function App() {
  return (
    <div>
      <div className="side_bg_image">
        <div className="first-kick">
          <div className="left_section">
            <img src={img1} id="circle" alt="img"></img>
            <p className="premium">
              <span className="heightlisght_premium"> KICK- EEZ Premium,</span>{" "}
              Made in America recoil pads and accessories to make your shooting
              experience more comfortable.
            </p>
            <h3>Technologies Used</h3>
            <div className="main_box">
              <img src={img2} id="sim" alt="img"></img>
              <img src={img3} id="rotat" alt="img"></img>
            </div>
          </div>
          <div className="right_section">
            <img src={img0} id="total" alt="img"></img>
          </div>
        </div>
        {/* ************************************************** */}
        <div className="second-service">
          <p className="service">Services Provided</p>
          <div className="main_img">
            <div className="bepo">
              <img src={img4} id="ux" alt="img"></img>
              <p>UX/UI Website Design</p>
            </div>
            <div className="bepo">
              <img src={img5} id="web" alt="img"></img>
              <p>Website Development</p>
            </div>
            <div className="bepo">
              <img src={img6} id="qa" alt="img"></img>
              <p>QA & Website Testing</p>
            </div>
          </div>
        </div>
      </div>
      {/* *********************************************** */}
      <div className="third-wireframe">
        <div className="inner_third">
          <p>Wireframes</p>
          <div className="three-section">
            <div className="double">
              <div className="on-img">
                <img src={img7} id="pads" alt="img"></img>
              </div>
              <div className="too-img">
                <img src={img9} id="pads" alt="img"></img>
              </div>
            </div>
            <div className="single_big">
              <img src={img8} id="pads" alt="img"></img>
            </div>
            <div className="triple">
              <div className="five-cross">
                <img src={img10} id="pads" alt="img"></img>
              </div>
              <div className="login">
                <img src={img11} id="pads" alt="img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************** */}
      <div className="fourth-plate">
        <div className="left-card-color">
          <div className="vl">
            <p className="font">Font</p>
            <div className="ywo">
              <div className="light-aa">
                <p className="hoo">Aa</p>
                <p className="roboto">Roboto</p>
              </div>
              <div className="dark-aa">
                <p className="dark">Aa</p>
                <p className="prompt">Prompt</p>
              </div>
              <div className="medium-aa">
                <p className="medium">Aa</p>
                <p className="node">Roboto</p>
              </div>
            </div>
            <div className="sub">
              <p className="tool">Tools Use</p>
              <img src={img13} id="blue-circle" alt='img'></img>
            </div>
          </div>
        </div>
        <div className="right-card-color">
          <p>Color Plate</p>
          <img src={img12} id="red-box" alt='img' />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
