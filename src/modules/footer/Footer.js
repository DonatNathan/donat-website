import React from "react";
import { CopyrightText, FooterBlock } from "../../components/footer/FooterComp";
import { ClickableBook } from "../AnimatedBook";

const Footer = () => {
    return (
        <FooterBlock>
            <ClickableBook source="images/old_book.png" link="homebook" />
            <CopyrightText>© 2024 - Nathan Donat-Filliod</CopyrightText>
        </FooterBlock>
    );
};

export default Footer;