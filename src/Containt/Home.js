import './Home.css'
import foodPic from "../assets/Photo.png";
import rectangle1 from "../assets/Rectangle 10.png";
import rectangle2 from "../assets/Rectangle 11.png";
import rectangle3 from "../assets/Rectangle 12.png";
import rectangle4 from "../assets/Rectangle 13.png";
import downloadApp from "../assets/downloadApp.png";
import photo1 from "../assets/Photo-base.png";
import union1 from "../assets/Group 29.png";
import photo2 from "../assets/Photo-base2.png";
import union2 from "../assets/Union.png";
import photo3 from "../assets/Photo-base3.png";
import union3 from "../assets/Union2.png";
import photo4 from "../assets/Photo-base4.png";
import union4 from "../assets/Union3.png";
import { Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="rowHome">
      <div className="container-home">
        <div className="info-container-home">
          <div className="padding">
            <p className="food-word">
              food
            </p>
            <div className="that-excite-word">
              <p className="that-word">
                that
              </p>
              <p className="that-word">
                excites:)
              </p>
            </div>
          </div>
          <p className="discription-home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            non nam praesentium! Commodi modi alias exercitationem possimus hic
            quas
          </p>
          <Link to="#">
            <button className="order-now-btn">
              Order Now
            </button>
          </Link>

          <div>
            <p className="rating-home">5 stars Rating</p>
            <p className="reviews-count-home">Based on 1788 reviews</p>
          </div>
        </div>
        <div>
          <img src={foodPic} style={{width: "580px"}} />
        </div>
      </div>

      <div className="row-download-home">
        <div className="download-container-home">
          <div className="download-message">
            Food Delivery helps you bring food to your front door
          </div>
          <div>
            <button className="download-btn-home">
              Download App
            </button>
          </div>
        </div>
        <div className="download-icon-home">
          <img src={downloadApp} style={{width: "20rem",height: "11rem"}}/>
        </div>
      </div>

      <div className="row-restaurent-home">
        <div className="container-restaurent-home">
          <p className="heading-restaurent">Restaurants</p>
          <button className="show-all-restaurant">
            show all
          </button>
        </div>
        <div className="restaurents-List">
          <div className="restaurent">
            <img src={photo1} alt="" />
            <div className="restaurent-img">
              <img src={union1} alt="" />
            </div>
          </div>
          <div className="restaurent">
            <img src={photo2} alt="" />
            <div className="restaurent-img">
              <img src={union2} alt="" />
            </div>
          </div>
          <div className="restaurent">
            <img src={photo3} alt="" />
            <div className="restaurent-img">
              <img src={union3} alt="" />
            </div>
          </div>
          <div className="restaurent">
            <img src={photo4} alt="" />
            <div className="restaurent-img">
              <img src={union4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row-insta-home">
        <p className="heading-insta-home">
          #namastefood <span style={{color:"#9093A6"}}>in instagram</span>
        </p>
        <div className="insta-img">
          <img
            src={rectangle1}
            className="hower-img"
          />
          <img
            src={rectangle2}
            className="hower-img"
          />
          <img
            src={rectangle3}
            className="hower-img"
          />
          <img
            src={rectangle4}
            className="hower-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
