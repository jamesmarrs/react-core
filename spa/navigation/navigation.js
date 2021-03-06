import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Styles from "./styles";
import { withRouter } from "react-router-dom";

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className={Styles.base}>
        <span>React Core</span>
        <ul className={Styles.links}>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                history.push("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/components"
              onClick={e => {
                e.preventDefault();
                history.push("/components");
              }}
            >
              Components
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Navigation);
