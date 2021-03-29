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
  title: "Welcome To FitMe.cc",
  description: "We sell the best products & fit before buy",
  keywords: "clothes, buy best price , clothes , summer style , ",
};

export default Meta;
