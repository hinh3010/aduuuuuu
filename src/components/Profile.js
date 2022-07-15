import React, { Component } from 'react';
import Slider from 'react-slick';
import '../assets/Common/Color.css';
const skillList = [
  {
    skill: 'user.png',
  },
  {
    skill: 'user.png',
  },
  {
    skill: 'user.png',
  },
  {
    skill: 'user.png',
  },
  {
    skill: 'user.png',
  },
];

class Profile extends Component {
  render() {
    const skillsettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    return (
      <div className=" overflow-hidden w-100 subscribe-widget p-3 mb-3 rounded-xxl border-0">
        <div
          className="card-body w-100 box-shadow rounded-xxxl p-2 d-block text-center bg-no-repeat bg-image-topcenter"
          style={{ backgroundImage: `url("assets/images/user-pattern.png")` }}
        >
           <figure className="avatar ml-auto mr-auto mb-0 mt-2 w90">
            <img
              src="assets/images/avt/avt.png"
              alt="avater"
              className="float-right shadow-sm rounded-circle w-100"
            />
          </figure>
          
          <div className="clearfix"></div>
          <h2 className=" lh-4 fw-700 mt-3 mb-1 text-facebook roboto-font" >
            Vũ Minh Đức
          </h2>
          <h4 className="font-xssss mt-0">
            
            <p style={ { fontSize: 14}} className="text-orange1 mb-1 text-ornage roboto-font font-xsss fw-500"> Học viên theo học tại trường</p> 
            <b style={{  fontSize: 14}} className="text-orange2 roboto-font">Đại học Kinh tế quốc dân</b>
             
          </h4>
          <div className="clearfix"></div>
          <div className="col-12 text-center mt-4 mb-2">
            <div className='p-0  ml-1 ls-3 d-inline-block rounded-xl bg-grey font-xsssss fw-700 ls-lg text-white'>
            <i className="ti-star text-grey-500 font-xs pl-2"></i>
            <i className="ti-star text-grey-500 font-xs pl-2"></i>
            <i className="ti-star text-grey-500 font-xs pl-2"></i>
            <i className="ti-star text-grey-500 font-xs pl-2"></i>
            <i className="ti-star text-grey-500 font-xs pl-2"></i>
            <span className="text-black font-xss p-2 roboto-font">4.0</span>
            </div>
             
          </div>
          <button className="mt-3 mb-3 w-75 btn-round-xsss btn p-2 ls-3 d-inline-block  bg-current font-xssss fw-500 ls-lg text-white">Đăng ký làm MENTOR</button>

        </div>
      </div>
    );
  }
}

export default Profile;
