import * as React from "react";
import { Element } from "react-scroll";

import TextRoller from "../components/text-roller";

import "./intro.scss";

interface IIntroState {
    slideUpHeader: boolean;
    isDarkTheme: boolean;
    subTextIndex: number;
}

class Intro extends React.Component<any, IIntroState> {
    private textToShow = [
        "This needs more whitespace.",
        "This doesn't needs more whitespace.",
        "But can we make it thinner?"
    ];

    private textInterval;

    public constructor(props) {
        super(props);

        this.state = {
            slideUpHeader: false,
            isDarkTheme: false,
            subTextIndex: 0
        }
    }

    public componentDidMount() {
        this.setState({
            slideUpHeader: true
        });

        // setTimeout(() => {
        //     this.startTextInterval();
        // }, 5000);
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
                    {/* <TextRoller textToShow={this.textToShow} delay={1500}/> */}
                    <p className="margin-zero text-center text-spacing text-medium margin-top-15">
                        {/* { this.textToShow[this.state.subTextIndex] } */}
                        Software & Something Resembling English Writey Person
                    </p>
                </div>
            </section>
        );
    }

    private startTextInterval = () => {
        this.textInterval = setInterval(() => {
            if (this.state.subTextIndex == this.textToShow.length - 1) {
                this.setState({
                    subTextIndex: 0
                });

                return;
            }

            this.setState((prevState) => ({
                subTextIndex: prevState.subTextIndex + 1
            }));
        }, 5000);
    }
}

export default Intro;