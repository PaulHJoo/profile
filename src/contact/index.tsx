import * as React from "react";
import { Element } from "react-scroll";

import Checkpoint from "../components/checkpoint";
import ProfileImage from "../images/profile.png";
import GitHubIcon from "../images/github-icon";
import LinkedInIcon from "../images/linkedIn-icon";
import TwitterIcon from "../images/twitter-icon";
import BlogIcon from "../images/blog-icon";

import "./contact.scss";

interface IContactState {
    headerSlideUp: boolean;
    photoSlideUp: boolean;
    iconsSlideUp: boolean;
}

class Contact extends React.Component<any, IContactState> {
    public constructor(props) {
        super(props);

        this.state = {
            headerSlideUp: false,
            photoSlideUp: false,
            iconsSlideUp: false
        }
    }
    public render() {
        const headerSlideUpClass = this.state.headerSlideUp ? "animate-beizer-slow animate-visible" : "";
        const photoSlideUpClass = this.state.photoSlideUp ? "animate-beizer-slow animate-visible" : "";
        const iconsSlideUpClass = this.state.iconsSlideUp ? "animate-beizer-slow animate-visible" : "";
        return (
            <section className="viewport-height width-100 display-inline-block">
                <Element name="contact" />
                <div className="content-margin">
                    <Checkpoint onReach={this.headerSlideUp} />
                    <p className={"text-center text-large margin-top-zero slide-up-25 " + headerSlideUpClass}>
                        — Contact
                    </p>
                    <Checkpoint onReach={this.photoSlideUp}/>
                    <div className={"max-width-750 margin-left-right-auto margin-bot-20 slide-up-25 " + photoSlideUpClass}>
                        <img className="margin-left-right-auto display-block" src={ProfileImage} />
                        <p className="text-center text-small">
                            Feel free to get in touch!
                            </p>
                        <p className="text-center text-small margin-zero">
                            <span className="font-normal">Email:</span> dev.pauljoo@gmail.com
                            </p>
                        <p className="text-center text-small margin-zero">
                            <span className="font-normal">Blog:</span> paulhjoo.com
                            </p>
                    </div>
                    <Checkpoint onReach={this.iconsSlideUp}/>
                    <div className={"text-center margin-left-right-auto slide-up-25 " + iconsSlideUpClass}>
                        <GitHubIcon href="https://github.com/PaulHJoo" />
                        <LinkedInIcon href="https://www.linkedin.com/in/devpauljoo/" />
                        <TwitterIcon href="https://twitter.com/PaulHJoo" />
                        <BlogIcon href="https://paulhjoo.com" />
                    </div>
                </div>
            </section>
        );
    }

    private headerSlideUp = () => {
        this.setState({
            headerSlideUp: true
        });
    }

    private photoSlideUp = () => {
        this.setState({
            photoSlideUp: true
        });
    }

    private iconsSlideUp = () => {
        this.setState({
            iconsSlideUp: true
        });
    }
}

export default Contact;