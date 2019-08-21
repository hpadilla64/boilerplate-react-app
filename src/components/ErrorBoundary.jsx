/* eslint no-console: ["error", {allow: ["error", "log"]}] */

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div>
          <h1>Hubo un error...</h1>
          <p>
            {error && error.toString()} {errorInfo.componentStack}
          </p>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
