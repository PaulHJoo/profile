import * as React from "react";
import { Element } from "react-scroll";

import Checkpoint from "../components/checkpoint";
import Intro from "./intro";
import WhatIDo from "./what-i-do";
import SkillsTable from "./skill-table";

import "./profile.scss"

interface IProfileState {
    introSlideUp: boolean;
    whatIDoSlideUp: boolean;
    tableSlideUp: boolean;
}

class Profile extends React.Component<any, IProfileState> {
    public constructor(props) {
        super(props);

        this.state = {
            introSlideUp: false,
            whatIDoSlideUp: false,
            tableSlideUp: false
        }   
    }

    public render() {
        return (
            <section className="width-100 display-inline-block">
                <Element name="profile" />
                <div className="content-margin">
                    <Checkpoint onReach={this.introSlideUp}/>
                    <Intro slideIn={this.state.introSlideUp}/>
                    <Checkpoint onReach={this.whatIDoSlideUp}/>
                    <WhatIDo slideIn={this.state.whatIDoSlideUp} />
                    <Checkpoint onReach={this.tableSlideUp}/>
                    <SkillsTable slideIn={this.state.tableSlideUp}/>
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

    private whatIDoSlideUp = () => {
        this.setState({
            whatIDoSlideUp: true
        });
    }
}

export default Profile;