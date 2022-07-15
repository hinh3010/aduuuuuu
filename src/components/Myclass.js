import React, { Component } from 'react';
import '../assets/Common/Color.css';
const classList = [
   
    
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  }, {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
];

class Myclass extends Component {
  render() {
    return (
      <div className="card theme-light-bg overflow-hidden rounded-xxxl border-0 m-3  w-90 box-shadow">
        <div className="card-body d-flex justify-content-between align-items-end pl-4 pr-4 pt-4 pb-3">
          <p className=" text-facebook font-xss  lh-4 fw-700 roboto-font">Bảng xếp hạng</p>

        </div>
        <div className=" "> 
        {classList.map((value, index) => (
          <div
            className=" pt-0 pb-3  pr-1 border-0 w-100 d-block  "
            key={index}
          >
            <div className="row m-0">
              <div className="col-2 p-0 " style={{lineHeight:'40px', display:'flex', justifyContent: 'center'}} >1</div>
              <div className="col-2 p-0">
            
                <a
                  href="/"
                  className="btn-round-lg rounded-lg bg-lightblue  "
                >
                  <img
                    src={`assets/images/avt/avt2.png`}
                    alt="icon"
                    className="p-1 w-100  rounded-lg"
                  />
                </a>
              </div>
              <div className="col-5  pl-2 pr-0"  >
                <b className="font-xssss  text-orange2"  style={{  color:'rgb(255, 122, 0);'}} >
                   Hoàng Ngọc Bích
                </b>
                <p className="font-xssss h5 w-100 mt-1  text-orange1">Sinh viên</p>
              </div>
              <div className="col-3 d-flex p-0"  style={{padding: '0px !important;'}}>
                <div className="pl-2">
                <i className="ti-arrow-up pr-1 font-xsssss text-green" style={{lineHeight:'40px'}} ></i>
                </div>
                 
                  <span className="font-xssss fw-700 pl-1 pr-1" style={{lineHeight:'40px'}} >5.0</span>
                  <i className="ti-star font-xsssss pl-1 text-ornage" style={{lineHeight:'40px'}} ></i>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default Myclass;
