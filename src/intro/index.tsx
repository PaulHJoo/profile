import * as React from "react";
import { Element } from "react-scroll";

import "./intro.scss";

interface IIntroState {
    slideUpHeader: boolean;
    isDarkTheme: boolean;
}

class Intro extends React.Component<any, IIntroState> {
    public constructor(props) {
        super(props);

        this.state = {
            slideUpHeader: false,
            isDarkTheme: false
        }
    }

    public componentDidMount() {
        this.setState({
            slideUpHeader: true
        });
    }

    public render() {
        const slideUpClass = this.state.slideUpHeader ? "animate-beizer-slow animate-visible" : "";
        return (
            <section className="viewport-height display-inline-block width-100">
                <Element name="intro" />
                <div className={"heading-margin slide-up-100 " + slideUpClass}>
                    <p className="text-center text-very-large text-spacing margin-zero">
                        PAUL H.J
                    </p>
                </div>
                <div className={"animate-delay slide-up-100 " + slideUpClass}>
                    <p className="margin-zero text-center text-spacing text-medium margin-top-15">
                        Software & Something Resembling English Writey Person
                    </p>
                </div>
            </section>
        );
    }
}

export default Intro;