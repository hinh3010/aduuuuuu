import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader2 from '../components/AppHeader2';
import Profile from '../components/Profile';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Myclass from '../components/Myclass';
import '../assets/DefaultSt.scss';
import '../assets/Default.scss';
import '../assets/Common/Color.css';
const latestList = [
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp ',
    price: '670',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '760',
    tag: 'Bootstrap',
    lesson: '14 ',
    status: 'alert-primary text-primary',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '370',
    tag: 'Develop',
    lesson: '23 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '2400',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '40',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
];
const popularList = [
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '2400',
    tag: 'Python',
    lesson: '32 ',
    status: 'alert-warning text-warning',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '40',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '60',
    tag: 'Bootstrap',
    lesson: '14 ',
    status: 'alert-success text-success',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '370',
    tag: 'Develop',
    lesson: '23 ',
    status: 'alert-danger text-danger',
  },
  {
    imageUrl: 'course.png',
    title: 'Toán cao cấp',
    price: '450',
    tag: 'Desinger',
    lesson: '24 ',
    status: 'alert-danger text-danger',
  },
];
const classList = [
  {
    imageUrl: 'user.png',
    title: 'Python',
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
];
const classesList = [
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'HTML',
    num: '54 Course',
    bg: '#fff9eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Jquery',
    num: '76 Course',
    bg: '#e5f4fb',
  },
  {
    imageUrl: 'user.png',
    title: 'SASS',
    num: '76 Course',
    bg: '#dcf4f8',
  },
  {
    imageUrl: 'user.png',
    title: 'React',
    num: '23 Course',
    bg: '#fcf1eb',
  },

  {
    imageUrl: 'user.png',
    title: 'JAVA',
    num: '78 Course',
    bg: '#fff9eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Python',
    num: '65 Course',
    bg: '#e5f4fb',
  },
  {
    imageUrl: 'user.png',
    title: 'MongoDB',
    num: '11 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fcf1eb',
  },
  {
    imageUrl: 'user.png',
    title: 'Bootstrap',
    num: '32 Course',
    bg: '#fff9eb',
  },
];

const memberList = [
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Aliqa Macale ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Hendrix Stamp ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'Mohannad Zitoun ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
  {
    imageUrl: 'user.png',
    name: 'John Steere ',
    email: 'support@gmail.com',
    bgimage: 'course.png',
  },
];

class DefaultStudent extends Component {
  render() {
    const categorysettings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const popularSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const latestSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    const memberSlider = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
    };
    return (
      <Fragment>
        <div className="main-wrapper ">
          <Navheader />
          <div className="main-content  ">
            <Appheader2 />

            <div className="middle-sidebar-bottom theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="row ml-0 mr-0">
                  <div className="col-lg-12">
                    <div
                      className="card p-0 border-0 bg-no-repeat bg-image-contain banner-wrap w-100 "
                      style={{
                        backgroundImage: `url("assets/images/slide.png")` ,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height:416
                       
                      }}
                    >
                      <div className="card-body p-4">
                        <h4  className="font-sm fw-500 display2-md-size sm-mt-7 sm-pt-10">
                        Những bài học chất lượng{' '}
                          <b className="d-lg-block font-md">Cùng những MENTOR chất lượng</b>
                        </h4>
                        <h5 className="text-grey-800 font-xsss fw-600 text-grey lh-24" >
                        MENTORZ mang đến cho bạn những gì tốt nhất , nào hãy học thôi.
                        </h5>
                        <button className="btn-border mt-3 btn pl-5 pr-5 p-2 ml-1 ls-3 d-inline-block bg-current font-xssss fw-500 ls-lg text-white">Đăng ký học</button>
          
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pb-5 pt-2"
                      style={{display: 'flex', justifyContent: "center"}}
                  >
                      <div className= "bg-facebook" style={{  height: 160, width: 292, borderRadius: 6 }}  >
                           <div className='row m-1 mt-3'>
                             <div className="col-4  bg-white ">
                               
                             </div>
                              
                              <div className="col-8 p-0">
                                <h2 className="text-white font-xss mb-1 mt-2 roboto-font fw-500">Hỏi bài tại đây này</h2>
                                <h3 className="text-white roboto-font font-xsss fw-400">Giải đáp các thắc mắc của bạn</h3>
                              </div>
                           </div>
                           <div className="w-100  center-format"> 
                           <button className="bg-lightbrown roboto-font  mt-2 btn pl-5 pr-5 p-2 ml-1 ls-3 d-inline-block bg-current font-xss fw-700 ls-lg text-facebook ">Hỏi bài thôi</button>
                           </div>
                      </div>
                  </div>
                  <div className="col-lg-12 pt-4 mb-3  pl-4">
                    <h2 className="fw-400 font-lg d-block">
                       <b className=" roboto-font text-orange2"> Các môn học THPT</b>
                       <span className="btn-yellow font-xs pl-4 ml-4 pt-2 pb-2 pr-4 text-white fw-500 roboto-font">Lớp 12</span>
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <Slider {...popularSlider}>
                      {popularList.map((value, index) => (
                        <div className="card d-flex course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-2 ml-2 mb-4" key={index} style={{borderRadius: 5, position: 'relative', justifyContent: "center"}}>
                        <img
                            src={`assets/images/course/math.jpg`}
                            alt="user"
                            className="p-0 w-100"
                            style={{borderRadius: 5}}
                          />
                          <div className="box-small" style={{bottom: "15%", zIndex: 2}}>
                          <div className="d-flex m-3 mb-1 pb-3 justify-content-around border-solid-bottom">
                            <h4 className="fw-700 font-xss  lh-28 ">
                                <Link
                                  to="/coursedetails" className=" text-orange2"
                                >
                                  {value.title}
                                </Link>
                            </h4>
                            <span className=" lh-28 btn-yellow font-xs pl-4 ml-4 pt-1 pb-2 pr-4 text-white fw-500 roboto-font">Lớp 12</span>
                            
                            </div>
                            
                            <div className="row w-100 ml--5">
                                <ul className="memberlist ml-0 col-lg-4 p-0"
                                    style={{display: 'flex', justifyContent: 'center'}}>
                                  <li>
                                    <a href="/">
                                      <img
                                        src="assets/images/user.png"
                                        alt="avater"
                                        className="w30 d-inline-block rounded-circle"
                                      
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/">
                                      <img
                                        src="assets/images/user.png"
                                        alt="avater"
                                        className="w30 d-inline-block rounded-circle"

                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/">
                                      <img
                                        src="assets/images/user.png"
                                        alt="avater"
                                        className="w30 d-inline-block"
                                      />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/">
                                      <img
                                        src="assets/images/user.png"
                                        alt="avater"
                                        className="w30 d-inline-block rounded-circle"
                                      />
                                    </a>
                                  </li>
                                  <li className="last-member">
                                    <a
                                      href="/"
                                      className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                                    >
                                      +12
                                    </a>
                                  </li>
                                  
                                </ul>
                                <p className="fw-600 font-xssss text-green col-lg-6 p-0">Học sinh đang học</p>
                                <img
                                src={`assets/images/logotruong.png`}
                                alt="user"
                                className="p-0 w-90 col-lg-2"
                                style={{borderRadius: 5}}
                              />
                            </div>
                          </div> 
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="col-lg-12 pt-4 mb-3  pl-4">
                    <h2 className="fw-400 font-lg d-block">
                       <b className=" roboto-font text-blue"> Các môn học THPT</b>
                       <span className="btn-blue font-xs pl-4 ml-4 pt-2 pb-2 pr-4 text-white fw-500 roboto-font">Lớp 12</span>
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <Slider {...popularSlider}>
                      {popularList.map((value, index) => (
                        <div
                          className="card bg- course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-2 ml-2 mb-4"
                          key={index}
                           
                        >
                          <div className="card-image w-100 mb-3">
                            <Link
                              to="/coursedetails"
                              className="  position-relative d-block"
                            >
                              <img
                                src={`assets/images/avt/${value.imageUrl}`}
                                alt="course"
                                className="w-100"
                                style={{borderRadius: '5px'}}
                              />
                            </Link>
                          </div>
                          <div >
                          <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img
                                  src={`assets/images/university.png`}
                                  alt="course"
                                  
                               />
                          </div>
                               
                            <h4 className="fw-700 font-xss mt-3 lh-28 mt-0" 
                             style={{display: 'flex', justifyContent: 'center'}}>
                              <Link
                                to="/coursedetails"
                              >
                                {value.title}
                              </Link>
                            </h4>
                             
                            <ul className="memberlist mt-3 mb-2 ml-0  "
                                 style={{display: 'flex', justifyContent: 'center'}}>
                              <li>
                                <a href="/">
                                  <img
                                    src="assets/images/user.png"
                                    alt="avater"
                                    className="w30 d-inline-block rounded-circle"
                                   
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="assets/images/user.png"
                                    alt="avater"
                                    className="w30 d-inline-block rounded-circle"

                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="assets/images/user.png"
                                    alt="avater"
                                    className="w30 d-inline-block"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="assets/images/user.png"
                                    alt="avater"
                                    className="w30 d-inline-block rounded-circle"
                                  />
                                </a>
                              </li>
                              <li className="last-member">
                                <a
                                  href="/"
                                  className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center"
                                >
                                  +12
                                </a>
                              </li>
                               
                            </ul>
                            <div className="pb-1  w-auto" style={{display: 'flex', justifyContent: 'center'}}>
                                <a
                                  href="/"
                                  className="fw-500 text-grey-500 font-xsss "
                                >
                                  Sinh viên đang học
                                </a>
                              </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="col-lg-12 pt-0 mb-2 pl-4">
                    <h2 className="fw-400 font-lg d-block">
                    <b className="text-facebook roboto-font"> Góc ôn thi chứng chỉ quốc tế - kỹ năng mềm</b> 
                    </h2>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <Slider {...latestSlider}>
                      {latestList.map((value, index) => (
                        <div
                          className="row box-default course-card w300 p-0 shadow-xss border-0 d-flex rounded-lg overflow-hidden mr-2 ml-2 mb-4"
                          key={index}
                        >
                           
                                <div className="col-lg-2 p-0 pl-2 pt-3">
                                  <div className=""> 
                                    <img
                                        src="assets/images/ielts.png"
                                        alt="avater"
                                        className=""
                                      />
                                  </div>
                                </div>
                                <div className="col-lg-10 p-0 pt-3 pl-1 ">
                                    <h1 className="text-white fw-700 roboto-font">TOEIC</h1>
                                    <h4 className="font-xsss fw-400 text-white roboto-font lh-16"> một bài kiểm tra dành cho những người sử dụng tiếng Anh như một ngoại ngữ, muốn sử dụng tiếng Anh trong môi trường giao tiếp và làm việc quốc tế.</h4>
                                </div>
                            
                        </div>
                      ))}
                    </Slider>
                  </div>
                  
                </div>
              </div>
              <div className="middle-sidebar-right">
                <div className="middle-sidebar-right-content">
                <div className="pb-5" style={{borderRadius: 5, position: 'relative', display: 'flex', justifyContent: "center"}}>
                <img
                    src={`assets/images/292x328.png`}
                    alt="user"
                    className="p-0 w-100"
                    style={{borderRadius: 5}}
                  />
                  <div  style={{borderRadius: 5, position: 'absolute',bottom: "15%", zIndex: 2}}>
                    <h2 className="center-format text-white  fw-700 roboto-font ">ĐẤU TRƯỜNG </h2>
                    <h1 className="center-format text-white  fw-500 roboto-font"> MENTORZ</h1>
                    <button className="mt-1 w-100  btn p-2 ls-3 d-inline-block btn-border bg-current font-xssss fw-500 ls-lg text-white">Tham gia ngay</button>
                  </div> 
                </div>
                <div className="box-shadow m-1">   
                {classList.map((value, index) => (
                  <div
                    className="card-body pl-4 pr-4 pt-1 border-0 w-100 d-block  "
                    key={index}
                  >
                     <div className="row">
                  
                        <div className="col-3 p-0  ">
                      
                          <a
                            href="/"
                            className="  "
                          >
                            <img
                              src={`assets/images/avt/avt6.png`}
                              alt="icon"
                              className=" w-90"
                              style={{borderRadius: 5}}
                            />
                          </a>
                        </div>
                        <div className="col-9 mt-2 pl-1"  >
                          <b className="font-xsss text-orange2 roboto-font "  >
                            Góc tâm sự
                          </b>
                          <p className="font-xssss h5 w-100 roboto-font text-orange1 p-0 mt-0">112 nghìn thành viên</p>
                        </div>
                        
                      </div>
                            </div>
                          ))}
                </div>  
                    <div className="pb-5 pt-4">
                      <img
                          src={`assets/images/292x328.png`}
                          alt="user"
                          className="p-0 w-100"
                          style={{borderRadius: 5}}
                        />
                </div>
                    
                </div>
              </div>
            </div>
          </div>

          <Appfooter />
        </div>
      </Fragment>
    );
  }
}

export default DefaultStudent;
