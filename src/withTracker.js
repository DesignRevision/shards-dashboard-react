import React, { Component } from "react";
import GoogleAnalytics from "react-ga";

GoogleAnalytics.initialize(process.env.REACT_APP_GAID || "UA-115105611-2");

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    GoogleAnalytics.set({
      page,
      ...options
    });
    GoogleAnalytics.pageview(page);
  };

  const BASENAME = process.env.REACT_APP_BASENAME || "";

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(`${BASENAME}${page}`);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(`${BASENAME}${nextPage}`);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
