import * as React from "react";
import { scroller } from "react-scroll";
import { debounce, throttle } from "lodash";

import "./nav-header.scss";

interface IFixedHeaderState {
    listenToScroll: boolean;
    slideInHeader: boolean;
    menuClicked: boolean;
    prevScrollPos: number;
}

class Header extends React.Component<any, IFixedHeaderState> {
    private HeaderRef: React.RefObject<HTMLObjectElement>;
    private navTimeOut;
    public constructor(props) {
        super(props);

        this.state = {
            listenToScroll: true,
            slideInHeader: false,
            menuClicked: false,
            prevScrollPos: 0
        }

        this.HeaderRef = React.createRef();
    }

    public componentDidMount() {
        window.addEventListener("scroll", debounce(this.handleScroll, 100));

        this.HeaderRef.current.addEventListener("mouseenter", throttle(this.handleMouseEnter, 1000));
        this.HeaderRef.current.addEventListener("mouseleave", throttle(this.handleMouseExit, 1000));
    }

    public render() {
        const slideAnimationClass = this.state.slideInHeader ? "animate-beizer" : "";
        const showMenuAnimationClass = this.state.menuClicked ? "animate-beizer" : "";
        return (
            <header ref={this.HeaderRef} id="nav-header" className={"top-fixed " + slideAnimationClass} >
                <nav className="nav-main position-relative underline">
                    <a className="nav-item no-decor nav-text font-normal" onClick={() => this.handleScrollToElement("intro")}>INTRO</a>
                    <a className="nav-item no-decor nav-text font-normal" onClick={() => this.handleScrollToElement("profile")}>PROFILE</a>
                    <a className="nav-item no-decor nav-text font-normal" onClick={() => this.handleScrollToElement("contact")}>CONTACT</a>
                </nav>
                <nav className="nav-header-mobile">
                    <a className="nav-menu-mobile nav-text font-normal" onClick={this.handleMenuClick}>MENU</a>
                </nav>
                <ul id="nav-main-mobile" className={"nav-header-mobile underline " + showMenuAnimationClass}>
                    <li className="nav-item">
                        <a className="nav-text nav-item-mobile-padding font-normal" onClick={() => this.handleScrollToElement("intro")}>
                            INTRO
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-text nav-item-mobile-padding font-normal" onClick={() => this.handleScrollToElement("profile")}>
                            PROFILE
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-text nav-item-mobile-padding font-normal" onClick={() => this.handleScrollToElement("contact")}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </header>
        )
    }

    private handleScroll = () => {
        if (!this.state.listenToScroll) {
            return;
        }
        const scrollPos = document.body.getBoundingClientRect().top;
        if (scrollPos > this.state.prevScrollPos) {
            this.setState({
                prevScrollPos: scrollPos,
                slideInHeader: true
            });

            this.hideNavAfterDelay();

            return;
        }

        this.setState({
            prevScrollPos: scrollPos,
            menuClicked: false,
            slideInHeader: false
        });
    }

    private handleScrollToElement = (element: string) => {
        this.setState({
            listenToScroll: false
        });

        this.setState({
            menuClicked: false,
            slideInHeader: false
        });
        
        window.clearTimeout(this.navTimeOut);
        this.hideNavAfterDelay();
        
        scroller.scrollTo(element, {
            duration: 1000,
            smooth: "easeInOutQuart"
        });

        setTimeout(() => {
            this.setState({
                prevScrollPos: document.body.getBoundingClientRect().top,
                listenToScroll: true
            });
        }, 1500);
    }

    private hideNavAfterDelay = () => {
        this.navTimeOut = setTimeout(() => {
            this.setState({
                slideInHeader: false,
                menuClicked: false
            });
        }, 5000);
    }

    private handleMenuClick = () => {
        this.setState((prevState) => ({
            menuClicked: !prevState.menuClicked
        }));
    }

    private handleMouseEnter = () => {
        window.clearTimeout(this.navTimeOut);
    }

    private handleMouseExit = () => {
        //Scrolled down while hovering over header. Hide delay should not be set.
        if (!this.state.slideInHeader) {
            return;
        }
        this.hideNavAfterDelay();
    }
}

export default Header;