import * as React from "react";

class ScrollToElement extends React.Component {
    public componentDidMount() {
        this.handleScrollToElement();
    }
    public componentDidUpdate() {
        this.handleScrollToElement();
    }

    public render() {
        return (
            this.props.children
        );
    }

    private handleScrollToElement = () => {
        const elementId = window.location.hash;
        if (elementId === "") {
            return;
        }

        const element = document.querySelector(elementId);
        if (!element) {
            return;
        }

        const scrollLocation = element.getBoundingClientRect().top + window.pageYOffset;
        element.scrollIntoView({behavior: "smooth"});
        // this.handleScroll(element.scrollTop, scrollLocation, 1000);
        // history.pushState("", document.title, window.location.href.split("#")[0]);
    }

    private handleScroll = (start, location, duration) => {
        const difference = location - start;
        const tickRate = 50;
        let currentTime = 0;

        const linearScroll = () => {
            if (currentTime >= duration) {
                return;
            }

            const completionRatio = currentTime / duration;
            const destination = difference * completionRatio;
            window.scrollTo(0, destination);
            currentTime += 100;
            setTimeout(linearScroll, tickRate);
        }

        linearScroll();
    }
}

export default ScrollToElement;