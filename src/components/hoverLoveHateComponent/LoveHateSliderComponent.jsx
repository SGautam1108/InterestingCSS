import React, { useState, useEffect } from "react";
import "./loveHateComponentStyle.css";
import data from "./data.json";
import HoverCards from "../hoverCardsComponent/HoverCardsComponent";
import { FaHeart } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function LoveHateSliderComponent() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [statusCards, setStatusCards] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const totalCards = data.length;

    useEffect(() => {
        const newStatusCards = {};
        data.forEach((item) => {
          newStatusCards[item.id] = item.id === activeIndex ? "active" :"inactive";  
        })
        setStatusCards({...newStatusCards});
    }, [])

    const loveButtonHandler = () => {
        const currentActive = activeIndex;
        const nextActive = activeIndex === totalCards ? 1 : activeIndex + 1;

        // set current active index to after, and translate by 50% and remove
        // set previous index to before, bring it to -50%, and then remove  

        const newStatusCards = {...statusCards};
        newStatusCards[currentActive] = "after";
        newStatusCards[nextActive] = "before";

        setStatusCards({...newStatusCards});
        

        setTimeout(() => {
            newStatusCards[currentActive] = "inactive"
            newStatusCards[nextActive] = "active";

            setStatusCards({...newStatusCards});
            setActiveIndex(nextActive);
        }, 200)
    }

    const hateButtonHandler = () => {
        const currentActive = activeIndex;
        const nextActive = activeIndex === 1 ? totalCards : activeIndex - 1;

        // set current active index to after, and translate by 50% and remove
        // set previous index to before, bring it to -50%, and then remove  

        const newStatusCards = {...statusCards};
        newStatusCards[currentActive] = "before";
        newStatusCards[nextActive] = "after";

        setStatusCards({...newStatusCards});
        

        setTimeout(() => {
            newStatusCards[currentActive] = "inactive"
            newStatusCards[nextActive] = "active";

            setStatusCards({...newStatusCards});
            setActiveIndex(nextActive);
        }, 200)
    }

    return data.length > 0 ? (
        <div className="loveHateSlider">
            <div className="swiper-cards-container">
                {data.map((item) => (
                    <HoverCards
                        key={item.id}
                        id={item.id}
                        littleImageUrls={item.deck.littleImages}
                        bigImageUrls={item.deck.bigImages}
                        statusCard={statusCards[item.id]}
                    />
                ))}
            </div>
            <div className="swiper-buttons-container">
                <div id="button-hate" className="swiper-button" onClick={hateButtonHandler}>
                    <FaX />
                </div>
                <div id="button-love" className="swiper-button" onClick={loveButtonHandler}>
                    <FaHeart />
                </div>
            </div>
        </div>
    ) : null;
}

export default LoveHateSliderComponent;
