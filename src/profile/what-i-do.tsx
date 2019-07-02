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
                            Computers are rocks that were forced into thinking by having bolts of lightning thrown at them.
                        </p>
                        <p className="text-center text-small margin-zero">
                            My trade is pressing buttons to make those rocks do what we want them to do.
                        </p>
                    </div>
                    <Checkpoint onReach={this.consultSlideUp} />
                    <div className={"slide-up-25 " + consultSlideUpClass}>
                        <p className="text-center text-medium">
                            <CommentsIcon /> Consult
                        </p>
                        <p className="text-center text-small margin-zero">
                            Strangely, the most complicated aspect of forced rock thinking is the human factor.
                        </p>
                        <p className="text-center text-small margin-zero">
                            We don't make rocks think for no reason. There is a desired outcome and our field does not exist in a vacuum.
                        </p>
                        <p className="text-center text-small margin-zero">
                            Effective communication at all levels is the consultant's bread and butter made out of silver bullets.
                        </p>
                    </div>
                    <Checkpoint onReach={this.writeSlideUp} />
                    <div className={"slide-up-25 " + writeSlideUpClass}>
                        <p className="text-center text-medium">
                            <WriteIcon /> Write
                        </p>
                        <p className="text-center text-small margin-zero">
                            The human species has done some weird and whacky stuff to make these thinking rocks give us super powers.
                        </p>
                        <p className="text-center text-small margin-zero">
                            I enjoy writing about the things I've learnt and experienced while traversing these strange lands.
                        </p>
                        <p className="text-center text-small margin-zero">
                            You can read my ramblings <a className="line-hover font-normal">here</a>.
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