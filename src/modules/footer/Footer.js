import React from "react";
import { CopyrightText, FooterBlock } from "../../components/footer/FooterComp";

const Footer = () => {
    return (
        <FooterBlock>
            <img src="/images/logo_white.png" width="3%" />
            <CopyrightText>© 2024 - Nathan Donat-Filliod</CopyrightText>
        </FooterBlock>
    );
};

export default Footer;