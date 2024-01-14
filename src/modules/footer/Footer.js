import React from "react";
import { FooterBlock } from "../../components/footer/FooterComp";
import { ClickableBook } from "../AnimatedBook";

const Footer = () => {
    return (
        <FooterBlock>
            <ClickableBook source="images/old_book.png" link="homebook" />
        </FooterBlock>
    );
};

export default Footer;