import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keywords} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: "Welcome To FitMe",
    description: "The first virtual Mall ",
    keywords: "clothes, virtual dress room , cheap latest clothes , virtual room , Fit room , Fit Me , Fit Clothes",
};

export default Meta;
