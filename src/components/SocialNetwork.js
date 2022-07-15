import React, { Component } from 'react';
import '../assets/Common/Color.css';
const classList = [
  {
    imageUrl: 'user.png',
    title: 'Advanced Python Sass',
    per: '87',
    status: 'bg-warning',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap SASS CSS ',
    per: '96',
    status: 'bg-success',
  },
  {
    imageUrl: 'user.png',
    title: 'Basic JAVA',
    per: '95',
    status: 'bg-primary',
  },
  {
    imageUrl: 'user.png',
    title: 'React JS',
    per: '55',
    status: 'bg-warning',
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
  },
];

class SocialNetwork extends Component {
  render() {
    return (
      <div className=" theme-light-bg overflow-hidden rounded-xxxl border-0 mb-3 w-1-0  ">
        <div className=" justify-content-between align-items-end   pb-3">
            <div className="box-shadow w-90 m-3 d-flex justify-content-around pb-3 pt-3">
         
            <img
                src="assets/images/chplay.png"
                alt="user"
                className="w40 mt--1 rounded-circle"
              />
              <img
                src="assets/images/appstore.png"
                alt="user"
                className="w40 mt--1 rounded-circle"
              />
              
            </div>
            <div className="box-shadow pt-3 pb-3 m-3 w-90 mt-4 d-flex justify-content-around">
         
            <img
                src="assets/images/yt.png"
                alt="user"
                className="w40 mt--1 rounded-circle"
              />
              <img
                src="assets/images/fb.png"
                alt="user"
                className="w40 mt--1 rounded-circle"
              />
               <img
                src="assets/images/tiktok.png"
                alt="user"
                className="w40 mt--1 rounded-circle"
              />
            </div>
        </div>
        
      </div>
    );
  }
}

export default SocialNetwork;
