import * as React from "react";

import Header from "../header";
import About from "../about";
import Profile from "../profile";
import Contact from "../contact";
import Checkpoint from "../services/checkpoint";

interface IMainState {
    prevScrollPos: number;
}

class Main extends React.Component<any, IMainState> {
    private checkpointGraphic = <div className="section-underline"></div>;
    public constructor(props) {
        super(props);

        this.state = {
            prevScrollPos: 0
        }
    }

    public render() {
        return (
            <main>
                <Header />
                <About />
                <div className="section-underline"></div>
                {/* <Checkpoint onReach={this.fadeToBlack} onRevert={this.fadeToWhite} graphic={this.checkpointGraphic}/> */}
                <Profile />
                <Checkpoint onReach={this.fadeToBlack} onRevert={this.fadeToWhite} graphic={this.checkpointGraphic}/>
                <Contact />
            </main>
        );
    }

    private fadeToBlack = () => {
        document.body.classList.add("dark");
    }

    private fadeToWhite = () => {
        document.body.classList.remove("dark");
    }
}

export default Main;