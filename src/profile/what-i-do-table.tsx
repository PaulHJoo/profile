import * as React from "react";

import Checkpoint from "../components/checkpoint";
import CodeIcon from "../images/code-icon";
import CommentsIcon from "../images/comments-icon";
import WriteIcon from "../images/write-icon";

interface IWhatIDoProps {
    slideIn: boolean;
}

interface IWhatIDoState {
    codeSlideUp: boolean;
    consultSlideUp: boolean;
    writeSlideUp: boolean;
}

class WhatIDo extends React.Component<IWhatIDoProps, IWhatIDoState> {
    public constructor(props) {
        super(props);

        this.state = {
            codeSlideUp: false,
            consultSlideUp: false,
            writeSlideUp: false
        }
    }
    public render() {
        const tableSlideUpClass = this.props.slideIn ? "animate-beizer-slow animate-visible" : "";
        const codeSlideUpClass = this.state.codeSlideUp ? "animate-beizer-slow animate-visible" : "";
        const consultSlideUpClass = this.state.consultSlideUp ? "animate-beizer-slow animate-visible" : "";
        const writeSlideUpClass = this.state.writeSlideUp ? "animate-beizer-slow animate-visible" : "";
        return (
            <div className={"slide-up-25 " + tableSlideUpClass}>
                <p className="text-center text-large margin-bot-20">
                    — What I Do
                </p>
                <div className="max-width-750 margin-left-right-auto">
                    <Checkpoint onReach={this.codeSlideUp} />
                    <div className={"slide-up-25 " + codeSlideUpClass}>
                        <p className="text-center text-medium">
                            <CodeIcon /> Code
                        </p>
                        <p className="text-center text-small margin-zero">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="text-center text-small margin-zero">
                            Duis sit amet varius lacus. Phasellus et hendrerit sem. Vivamus enim tellus, consequat eu eros vel, convallis pharetra orci.
                        </p>
                    </div>
                    <Checkpoint onReach={this.consultSlideUp} />
                    <div className={"slide-up-25 " + consultSlideUpClass}>
                        <p className="text-center text-medium">
                            <CommentsIcon /> Consult
                        </p>
                        <p className="text-center text-small margin-zero">
                            Vestibulum gravida porta nibh, nec tincidunt felis vehicula non. Donec nec molestie massa, at tincidunt lectus.
                        </p>
                        <p className="text-center text-small margin-zero">
                            Donec fringilla pharetra ultrices. Phasellus dapibus eget quam vitae pharetra. Duis eu volutpat eros.
                        </p>
                    </div>
                    <Checkpoint onReach={this.writeSlideUp} />
                    <div className={"slide-up-25 " + writeSlideUpClass}>
                        <p className="text-center text-medium">
                            <WriteIcon /> Write
                            </p>
                        <p className="text-center text-small margin-zero">
                            Vestibulum gravida porta nibh, nec tincidunt felis vehicula non. Donec nec molestie massa, at tincidunt lectus.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    private codeSlideUp = () => {
        this.setState({
            codeSlideUp: true
        });
    }

    private consultSlideUp = () => {
        this.setState({
            consultSlideUp: true
        });
    }

    private writeSlideUp = () => {
        this.setState({
            writeSlideUp: true
        });
    }
}

export default WhatIDo;