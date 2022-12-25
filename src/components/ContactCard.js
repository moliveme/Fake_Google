import React from "react";

import mega_knight from "../images/mega_knight.png";

const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <img className="ui mega knight image" src={mega_knight} alt="mega_knight" />
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <i 
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};

export default ContactCard;