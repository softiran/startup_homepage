import React from 'react';
import PropTypes from 'prop-types';
import { FaCoffee, FaConnectdevelop } from 'react-icons/lib/fa';
import { 
  MdPhonelinkSetup, 
  MdSecurity, 
  MdCloudDone, 
  MdDoneAll, 
  MdApps,
  MdUpdate,
  MdDevices,
  MdBusiness
} from 'react-icons/lib/md/';


class SectionTwo extends React.Component {
  render(){
    return(
      <div className="sections" id="section-two">
        <div className="sub-section">
          <h1>ما به کسب و کارها کمک می‌کنیم سریع تر رشد کنند</h1>
          <h2>ویژگی‌های منحصر به فرد رامونا چیست؟</h2>
          <div className="feature-container">
            <div className="grid-container">
              <div className="grid-item">
                <MdPhonelinkSetup size={50}/>
              </div>
              <div className="grid-item">
                <MdSecurity size={50}/>
              </div>
              <div className="grid-item">
                <FaCoffee size={50}/>
              </div>   
              <div className="grid-item">
                <MdApps size={50}/>
              </div>
              <div className="grid-item">
                <MdCloudDone size={50}/>
              </div>
              <div className="grid-item">
                <MdUpdate size={50}/>
              </div>
              <div className="grid-item">
                <MdBusiness size={50}/>
              </div>
              <div className="grid-item">
                <MdDevices size={50}/>
              </div>
              <div className="grid-item">
                <MdDoneAll size={50}/>
              </div>
              {/* <div className="grid-item">
                <FaConnectdevelop size={50}/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;