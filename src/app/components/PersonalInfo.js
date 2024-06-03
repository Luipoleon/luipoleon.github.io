
import Image from 'next/image';
import React from 'react';
import profilePicture from '/public/images/profile.jpeg';
import TypingEffect from './TypingEffect';
// Icons
import { FaHtml5, FaCss3, FaPython, FaNode, FaReact, FaLinkedin, FaGithub, FaHackerrank} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandDjango } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";


const PersonalInfo = () => {
    return (
        <div className="personal_info container">
            <div className="personal_info__details">
                <div className="personal_info__header">
                    <div className="personal_info__image container">
                        <Image 
                            src={profilePicture} 
                            alt="Profile" 
                            width={130} height={130}
                            quality={100}
                        />
                        
                    </div>
                    <div>
                        <p className="personal_info__name">Luis Hernández</p>
                        <p className="personal_info__job">Web Developer</p>
                        {/* <TypingEffect/> */}
                    </div>
                </div> 
                <div className="personal_info__body">
                    {/* <p className="personal_info__description">
                    &quot;Bringing visions to life in pixels and code, one line at a time&quot;
                    </p> */}
                    <div className="personal_info__skills">
                        <div className="personal_info__languages_list">
                            <div className='language'>
                                <span className='language__icon'>C2</span>
                                <span className='language__name'>English</span>
                            </div>
                            <div className='language'>
                                <span className='language__icon'>Native</span>
                                <span className='language__name'>Spanish</span>
                            </div>
                        </div>
                        <hr className='divider'/>
                        <div className='personal_info__programming_languages'>
                            <div className = 'p_language'>
                                <span className='p_language__icon'><FaHtml5/></span>
                                <span className='p_language__name'>HTML</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><FaCss3/></span>
                                <span className='p_language__name'>CSS</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><IoLogoJavascript/></span>
                                <span className='p_language__name'>JavaScript</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><FaPython/></span>
                                <span className='p_language__name'>Python</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><TbBrandDjango/></span>
                                <span className='p_language__name'>Django</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><FaReact/></span>
                                <span className='p_language__name'>React</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><FaNode/></span>
                                <span className='p_language__name'>Node.js</span>
                            </div>
                            <div className='p_language'>
                                <span className='p_language__icon'><AiOutlineConsoleSql/></span>
                                <span className='p_language__name'>SQL</span>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <hr className='divider'/>
                        <div className='personal_info__social'>
                            <a className='social_page' target='_blank'><FaLinkedin/></a>
                            <a className='social_page' target='_blank'><FaGithub/></a>
                            <a className='social_page' target='_blank'><FaHackerrank/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;