import React from 'react';
import './homepage.css';
import Ava from "../images/1.jpg";
import { FaBeer, FaChrome } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineDownloading } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { MdSportsBasketball } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { CgWebsite } from 'react-icons/cg'
import { FaLocationArrow } from 'react-icons/fa';


const homepage = () => {
    return (
        <div class="wrapper">
            <div class="resume">
                <div class="left">
                    <div class="img_holder">
                        <img src= {Ava} alt="picture"/>
                    </div>
                    <div class="contact_wrap pb">
                        <div class="title">
                            Contact
                        </div>
                        <div class="contact">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaPhoneSquareAlt/></div>
                                        <div class="text">(+84)797695351</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><GrMail/></div>
                                        <div class="text">18520726@gm.uit.edu.vn</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><CgWebsite/></div>
                                        <div class="text"><li><a href="https://flasza20.wixsite.com/hiepdo">Wixsite</a></li></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaLocationArrow/></div>
                                        <div class="text">339A Le Van Sy P13 Q3</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="skills_wrap pb">
                        <div class="title">
                            Skills
                        </div>
                        <div class="skills">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaBeer/></div>
                                        <div class="text">BPMN</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaProjectDiagram/></div>
                                        <div class="text">UML</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><MdOutlineDownloading/></div>
                                        <div class="text">Agile-Scrum</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaDatabase/></div>
                                        <div class="text">SQL</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hobbies_wrap pb">
                        <div class="title">
                            hobbies
                        </div>
                        <div class="hobbies">
                            <ul>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaBook/></div>
                                        <div class="text">Reading</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaMusic/></div>
                                        <div class="text">Music</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><FaGamepad/></div>
                                        <div class="text">Gaming</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="li_wrap">
                                        <div class="icon"><MdSportsBasketball/></div>
                                        <div class="text">Sport</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        <div class="name_role">
                            <div class="name">
                                Hiep Do
                            </div>
                            <div class="role">
                                BA/PO/PM
                            </div>
                        </div>
                        <div class="about">
                            I'm a junior at the University of Information Technology, Faculty of Information Systems.
                            I'm working the board directing in the Open English club.
                        </div>
                    </div>
                    <div class="right_inner">
                        <div class="exp">
                            <div class="title">
                                experience
                            </div>
                            <div class="exp_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2020 - Present
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Position in OEC club
                                                </p>
                                                <p class="info_com">
                                                    UIT
                                                </p>
                                                <p class="info_cont">
                                                    <p>Head of OEC</p>
                                                    <p>Lead project OEC-Herald</p>
                                                    <p>Lead project Podcast</p>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2019 - 2020 
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Attacker 2019
                                                </p>
                                                <p class="info_com">
                                                    UEL
                                                </p>
                                                <p class="info_cont">
                                                    Giải nhất cuộc thi - Forecase the price of real estate
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2018 - 2019
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Cán bộ Đoàn - Hội
                                                </p>
                                                <p class="info_com">
                                                    UIT - Faculty
                                                </p>
                                                <p class="info_cont">
                                                    <p>UV Hội SV Trường</p>
                                                    <p>LCH PHó Khoa</p>
                                                    <p>Top 20 Thủ linh SV</p>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="education">
                            <div class="title">
                                Education
                            </div>
                            <div class="education_wrap">
                                <ul>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2018 - now
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Information Systems
                                                </p>
                                                <p class="info_com">
                                                    University of Information Technology
                                                </p>
                                                <p class="info_cont">
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="li_wrap">
                                            <div class="date">
                                                2015 - 2018
                                            </div>
                                            <div class="info">
                                                <p class="info_title">
                                                    Schooling
                                                </p>
                                                <p class="info_com">
                                                    Trung Vuong High School
                                                </p>
                                                <p class="info_cont">
                                                    Học khối Tự nhiên ban A A1 D
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
    );
}

export default homepage;