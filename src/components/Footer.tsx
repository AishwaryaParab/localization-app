import React from "react";
import i18n from "../i18n";

const Footer = () => {
    return (
        <div className="footer">
            <p>{i18n.t('copyright')}</p>
        </div>
    );
}

export default Footer;