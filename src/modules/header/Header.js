import React from "react";
import Countdown from "../Countdown";
import { HeaderBlock } from "../../components/header/HeaderComp";

const Header = () => {
    return (
        <HeaderBlock>
            <Countdown end={'September 3, 2027'}/>
        </HeaderBlock>
    );
};

export default Header;