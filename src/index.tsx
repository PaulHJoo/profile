import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";

// import scrollToElement from "./services/scroll-to-component";
import Main from "./main";
import ScrollToElement from "./components/scroll-to-component";

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
            // <BrowserRouter>
            //     <ScrollToElement>
            <Main />
            //     </ScrollToElement>
            // </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);