import * as React from "react";
import { Element } from "react-scroll";

import "./profile.scss"

class Profile extends React.Component {
    public render() {
        return (
            <section className="profile-height width-100 display-inline-block">
                <Element name="profile" />
                <div className="intro-margin content-padding">
                    <div className="width-100 margin-bot-80">
                        <p className="text-center text-large margin-top-zero margin-bot-20">
                            — Hello.
                            </p>
                        <p className="text-center text-small margin-zero">
                            A software engineer specializing in full-stack web development.
                            </p>
                        <p className="text-center text-small margin-zero">
                            Currently, I'm working in Sydney, AU as a software consultant.
                            </p>
                    </div>
                    <div className="width-75 margin-left-right-auto border">
                        <div className="width-33 display-inline-block align-top">
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
                        <div className="width-33 display-inline-block align-top">
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
                        <div className="width-33 display-inline-block align-top">
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
            </section>
        );
    }
}

export default Profile;