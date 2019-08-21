import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import {
  numberWithCommas,
  debounce,
  jsonToURL,
  slugify,
  isMobile
} from "./utils/Utils";
import interfaceActions from "./actions/UserInterface";

const App = props => {
  const { ui, addCount } = props;
  console.log(process.env.NODE_ENV);

  const testUtils = debounce(() => {
    console.log("debounce!");
    console.log(
      jsonToURL({
        prop: "asdfg",
        arr: [123, 456]
      })
    );
    console.log(slugify("Méx and double ñ"));
    console.log("is mobile? ", isMobile());
  }, 500);

  return (
    <div>
      <header>
        <img
          src="./styles/images/logo.png"
          alt=""
          style={{
            width: "5em",
            height: "auto"
          }}
        />
      </header>
      <p>
        <Icon type="exclamation-circle" /> Here is the app base container
      </p>
      <p>Clicks: {numberWithCommas(ui.count)}</p>
      <Button type="primary" onClick={addCount}>
        Aumentar click
      </Button>
      <br />
      <Button onClick={testUtils}>Test utils</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ui: state.UserInterface
  };
};

const mapDispatchToProps = dispatch => {
  const { addCount } = interfaceActions.creators;
  return bindActionCreators(
    {
      addCount
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
