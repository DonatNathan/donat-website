import React from "react";
import { ImageBook } from "../components/footer/Book";

const ClickableBook = ({source, link}) => {
    const handleClick = () => {
        window.location.href = link;
    }

    return (
        <ImageBook
            src={"/" + process.env.PUBLIC_URL + source}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
}

export { ClickableBook };
