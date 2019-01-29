import * as React from "react";
import { Element } from "react-scroll";

import "./about.scss";

interface IAboutState {
    slideUpHeader: boolean;
    isDarkTheme: boolean;
}

class About extends React.Component<any, IAboutState> {
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
                <Element name="about" />
                <div className={"heading-margin slide-up " + slideUpClass}>
                    <p className="text-center text-very-large text-spacing margin-zero">
                        PAUL H. JOO
                    </p>
                </div>
                <div className={"animate-delay slide-up " + slideUpClass}>
                    <p className="margin-zero text-center text-spacing text-medium margin-top-15">
                        This needs more whitespace.
                    </p>
                </div>
                {/* <div onClick={this.changeTheme}>
                    BAATTAN
                </div> */}
            </section>
        );
    }

    // private changeTheme = () => {
    //     if (this.state.isDarkTheme) {
    //         document.body.classList.remove("dark");;
    //     } else {
    //         document.body.classList.add("dark");
    //     }

    //     this.setState((prevState) => ({
    //         isDarkTheme: !prevState.isDarkTheme
    //     }));
    // }
}

export default About;