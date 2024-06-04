import Image from "next/image";
import TypingEffect  from "./TypingEffect";
const MainContent = () => {

    return (
        <div className="main_content container">
            <div className="hero_image">
               <div className="hero_image__background">
               </div>
               <div className="hero_image__background_content">
                    <div className="hero_image__content">
                        <div className="hero_image__content__title">
                            <h1><TypingEffect typingData={["<code>Crafting Digital Landscapes</code>"]}/></h1>
                        </div>
                    </div>
               </div>
            </div>

        </div>
    );
}

export default MainContent;