
import Image from 'next/image';
import React from 'react';
import profilePicture from '/public/images/profile.jpeg';
import TypingEffect from './TypingEffect';


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
            </div>
        </div>
    );
}

export default PersonalInfo;