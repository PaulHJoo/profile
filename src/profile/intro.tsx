import * as React from "react";

interface IIntroProps {
    slideIn: boolean;
}

class Intro extends React.Component<IIntroProps> {
    public render() {
        const introSlideUpClass = this.props.slideIn ? "animate-beizer-slow animate-visible" : "";
        return (
            <div className={"width-100 margin-bot-80 slide-up-25 " + introSlideUpClass}>
                <p className="text-center text-large margin-top-zero margin-bot-20">
                    — Hello!
                </p>
                <p className="text-center text-small margin-zero">
                    I'm Paul.
                </p>
                <p className="text-center text-small margin-zero">
                    A software engineer specializing in full-stack web development.
                </p>
                <p className="text-center text-small margin-zero">
                    Currently, I'm working in Sydney, AU as a Consultant.
                </p>
            </div>
        );
    }
}

export default Intro;