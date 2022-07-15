import React, { Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
// import Appheader from '../components/Appheader';
import Appheader1 from '../components/Appheader1';
import Profile from '../components/Profile';
import Subscribe from '../components/Subscribe';
// import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
import Myclass from '../components/Myclass';


function Default() {
  const dataQuestions = [
    {
      name: "Nguyễn Thị Nga",
      avatar: "https://www.hvu.edu.vn/file/1548236183/top%205%20sv%20ti%C3%AAu%20bi%E1%BB%83u%20HVU%202020%20(8).jpg",
      date: "31 tháng 5 lúc 22:14",
      time1: "00:00:05",
      subject: "Môn toán",
      question: "Số tự nhiên nào khi đem nhân với 3 và trừ đi 2 thì sẽ cho ra đáp án là số đảo ngược cửa chính nó.",
      answers: [5, 16, 49, 104],
      score: '5A+'
    },
    {
      name: "Nguyễn Thị Thảo",
      avatar: "https://vnn-imgs-f.vgcloud.vn/2020/08/20/11/sinh-vien-kinh-te-lam-sao-mo-rong-co-hoi-viec-lam-tuong-lai.jpg",
      date: "12 tháng 6 lúc 12:12",
      time1: "00:00:12",
      subject: "Môn GDCD",
      question: "Cần cù thì bù ...",
      answers: ["thông minh", "siêng năng", "trí tuệ", "học hỏi"],
      score: '7A+'
    },
    {
      name: "Nguyễn Thị Thanh",
      avatar: "https://pnpl.1cdn.vn/2018/11/01/img20180716190729554.jpg",
      date: "12 tháng 6 lúc 12:12",
      time1: "00:00:22",
      subject: "Môn Hóa",
      question: "H2SO4 là",
      answers: ["Axit", "Bazo", "Este", "Ancol"],
      score: '1A+'
    }
  ]
  return (
    <Fragment>
      <div className="main-wrapper">
        <Navheader />

        <div className="main-content roboto-font ">
          <Appheader1 />

          <div className="middle-sidebar-bottom theme-dark-bg">
            <div className="middle-sidebar-left w-100">
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <div
                    className="default__bg card border-0"
                  >
                    <input placeholder="a" type="file" id="defaultUploadFile" />
                    <label className="default__uploadFile" htmlFor="defaultUploadFile">
                      <i style={{ fontSize: 18 }} className="ti-camera mr-1"></i>
                      Chỉnh sửa ảnh bìa
                    </label>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-9">
                  <div className="default-content">
                    <div className="default-content__title">
                      <h3>Các câu hỏi cần bạn giải đáp</h3>
                      <div style={{ position: 'relative' }}>
                        <select required defaultValue="default">
                          <option value="default" className="d-none" disabled>Sắp xếp theo</option>
                          <option value="nam">Nam</option>
                          <option value="nu">Nữ</option>
                        </select>
                        <i className="default__arrow ti-angle-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="default-question">
                    {dataQuestions?.map((item, index) => {
                      return <div key={index} className="default-question__item">
                        <div className="default-question__score">
                          <div>{item.score}</div>
                        </div>
                        <div className="default-question__title">
                          <div className="default-question__info">
                            <img
                              alt="avatar"
                              src={item.avatar}
                              className="default-question__avatar"
                            />
                            <div className="default-question__wrap">
                              <h4 className="default-question__name">{item.name}</h4>
                              <p className="default-question__time">{item.date}</p>
                            </div>
                          </div>
                          <div className="default-question__subject">{item.subject}</div>
                        </div>
                        <div className="default-question__question">
                          {item.question}
                        </div>
                        <div className="default-answer">
                          {item.answers.map((answer, index) => {
                            return <div key={index} className="default-answer__item">
                              <span>{index + 1}. </span>
                              <span>{answer}</span>
                            </div>
                          })}
                        </div>
                        <div className="default-question__footer">
                          <span>{item.time1}</span>
                          <button>Nhận giải đáp</button>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="default-card">
                    <div className="default-card__overlay"></div>
                    <div className="default-card__wrap">
                      <div className="default-card__title">
                        <p className="mont-font">Quản lý tài khoản</p>
                        <h2 className="open-font">A+</h2>
                      </div>
                      <button>Quản lý tài khoản A+</button>
                    </div>
                  </div>
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

export default Default;
