import React from "react";
import { PageBody } from "../components/pages/PagesComp";
import { ErrorContent, ErrorImage, LittleErrorMessage, MainErrorMessage } from "../components/pages/404";

const Error404 = () => {
    return (
        <PageBody>
            <ErrorContent>
                <ErrorImage src="images/404.png" />
                <MainErrorMessage>PAGE NOT FOUND</MainErrorMessage>
                <LittleErrorMessage>Oops ! Un pirate passant par là a volé tout son contenu !</LittleErrorMessage>
            </ErrorContent>
        </PageBody>
    );
};

export default Error404;