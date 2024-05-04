import React from "react";
import "./hoverCardsStyle.css";

function HoverCards({ id, littleImageUrls, bigImageUrls, statusCard }) {
    return littleImageUrls.length > 0 && bigImageUrls.length > 0 ? (
        <div className={`hover-cards-group ${statusCard}-card`}>
            <div className="cards-group">
                <div
                    className="little-card card"
                    style={{ backgroundImage: `url(${littleImageUrls[0]})` }}
                ></div>
                <div
                    className="big-card card"
                    style={{ backgroundImage: `url(${bigImageUrls[0]})` }}
                ></div>
                <div
                    className="little-card card"
                    style={{ backgroundImage: `url(${littleImageUrls[1]})` }}
                ></div>
                <div
                    className="big-card card"
                    style={{ backgroundImage: `url(${bigImageUrls[1]})` }}
                ></div>
                <div
                    className="little-card card"
                    style={{ backgroundImage: `url(${littleImageUrls[2]})` }}
                ></div>
                <div
                    className="big-card card"
                    style={{ backgroundImage: `url(${bigImageUrls[2]})` }}
                ></div>
                <div
                    className="little-card card"
                    style={{ backgroundImage: `url(${littleImageUrls[3]})` }}
                ></div>
                <div
                    className="big-card card"
                    style={{ backgroundImage: `url(${bigImageUrls[3]})` }}
                ></div>
            </div>
        </div>
    ) : null;
}

export default HoverCards;
