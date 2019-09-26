import * as React from "react";
import * as ReactDOM from "react-dom";
import "normalize.css";

import Main from "./main";

import "./style/colours.scss";
import "./style/sizing.scss";
import "./style/positions.scss";
import "./style/text.scss";
import "./style/theme.scss";
import "./style/underlines.scss";
import "./style/animations.scss";
import "./style/padding-and-margins.scss";

class App extends React.Component {
    public render() {
        return (
            <Main />
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);