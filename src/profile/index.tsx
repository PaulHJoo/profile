import * as React from "react";
import { Element } from "react-scroll";

import Checkpoint from "../services/checkpoint";

import "./profile.scss"

interface IProfileState {
    introSlideUp: boolean;
    tableSlideUp: boolean;
}

class Profile extends React.Component<any, IProfileState> {
    public constructor(props) {
        super(props);

        this.state = {
            introSlideUp: false,
            tableSlideUp: false
        }
    }

    public render() {
        const introSlideUpClass = this.state.introSlideUp ? "animate-beizer-slow animate-visible" : "";
        const tableSlideUpClass = this.state.tableSlideUp ? "animate-beizer-slow animate-visible" : "";
        return (
            <section className="profile-height width-100 display-inline-block">
                <Element name="profile" />
                <Checkpoint onReach={this.introSlideUp} onRevert={this.revertSlideUp}/>
                <div className="intro-margin content-padding">
                    <div className={"width-100 margin-bot-80 slide-up-25 " + introSlideUpClass}>
                        <p className="text-center text-large margin-top-zero margin-bot-20">
                            — Hello.
                            </p>
                        <p className="text-center text-small margin-zero">
                            I'm Paul.
                            </p>
                        <p className="text-center text-small margin-zero">
                            A software engineer specializing in full-stack web development.
                            </p>
                        <p className="text-center text-small margin-zero">
                            Currently I'm working in Sydney, AU as a software consultant.
                            </p>
                    </div>
                    <Checkpoint onReach={this.tableSlideUp} onRevert={this.revertSlideUp}/>
                    <div className={"slide-up-25 " + tableSlideUpClass}>
                        <p className="text-center text-large margin-bot-20">
                            — What I Do
                        </p>
                        <div className="table border">
                            <div className="table-item">
                                <div>
                                    <p className="text-center text-medium">
                                        Back-End
                                    </p>
                                </div>
                                <div>
                                    <p className="text-center text-small">
                                        C#
                                    </p>
                                    <p className="text-center text-small">
                                        .NET Core
                                    </p>
                                    <p className="text-center text-small">
                                        SQL
                                    </p>
                                </div>
                            </div>
                            <div className="table-item">
                                <div>
                                    <p className="text-center text-medium">
                                        Front-End
                                    </p>
                                </div>
                                <div>
                                    <p className="text-center text-small">
                                        React
                                    </p>
                                    <p className="text-center text-small">
                                        Angular
                                    </p>
                                    <p className="text-center text-small">
                                        JavaScript, TypeScript
                                    </p>
                                    <p className="text-center text-small">
                                        HTML, CSS, SASS
                                    </p>
                                    <p className="text-center text-small">
                                        Webpack
                                    </p>
                                    <p className="text-center text-small">
                                        Gatsby
                                    </p>
                                </div>
                            </div>
                            <div className="table-item">
                                <div>
                                    <p className="text-center text-medium">
                                        Cloud
                                    </p>
                                </div>
                                <div>
                                    <p className="text-center text-small">
                                        Azure
                                    </p>
                                    <p className="text-center text-small">
                                        Docker
                                    </p>
                                    <p className="text-center text-small">
                                        Kubernetes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    private introSlideUp = () => {
        this.setState({
            introSlideUp: true
        });
    }

    private tableSlideUp = () => {
        this.setState({
            tableSlideUp: true
        });
    }

    private revertSlideUp = () => {

    }
}

export default Profile;