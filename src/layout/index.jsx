import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

import '../../sass/style.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className=''>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
