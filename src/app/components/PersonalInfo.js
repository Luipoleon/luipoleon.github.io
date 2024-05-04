import Image from 'next/image';
import profilePicture from '/public/images/profile.jpeg';

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
                        <p className="personal_info__job">Fullstack Developer</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default PersonalInfo;