import * as React from "react";

interface ITextRollerState {
    isFirstState: boolean;
    showCurrentIndexText: boolean;
    currentTextIndex: number;
    nextTextIndex: number;
    currentTextClass: string;
    nextTextClass: string;
}

interface ITextRollerProps {
    textToShow: string[];
    delay?: number;
}

class TextRoller extends React.Component<ITextRollerProps, ITextRollerState> {
    public static defaultProps: Partial<ITextRollerProps> = {
        delay: 0
    }

    private textInterval;
    public constructor(props) {
        super(props);

        this.state = {
            isFirstState: false,
            showCurrentIndexText: true,
            currentTextIndex: 0,
            nextTextIndex: 1,
            currentTextClass: "",
            nextTextClass: ""
        }
    }

    public componentDidMount() {
        this.setState({
            isFirstState: true
        });

        // setTimeout(() => {
        //     this.startTextInterval();
        // }, this.props.delay);
    }

    public render() {
        return (
            <div>
                <p className={"margin-zero text-center text-spacing text-medium margin-top-15 " + this.state.currentTextClass}>
                    {this.props.textToShow[this.state.currentTextIndex]}
                </p>
                <p className={"margin-zero text-center text-spacing text-medium margin-top-15 top-fixed position-relative" + this.state.nextTextClass}>
                    {this.props.textToShow[this.state.nextTextIndex]}
                </p>
            </div>
        );
    }

    private startTextInterval = () => {
        const animateInClasses = "animate-beizer-slow animate-visible";
        const animateOutClasses = "slide-down-100";
        this.textInterval = setInterval(() => {
            var currentIndex = this.state.currentTextIndex + 1;
            var nextIndex = this.state.nextTextIndex + 1;
            var currentClasses;
            var nextClasses;
    
            if (currentIndex >= this.props.textToShow.length) {
                currentIndex = 0;
            }
    
            if (nextIndex >= this.props.textToShow.length) {
                nextIndex = 0;
            }

            if (this.state.showCurrentIndexText) {
                currentClasses = animateInClasses;
                nextClasses = animateOutClasses;
            } else {
                currentClasses = animateOutClasses;
                nextClasses = animateInClasses;
            }

            this.setState((prevState) => ({
                showCurrentIndexText: !prevState.showCurrentIndexText,
                currentTextIndex: currentIndex,
                nextTextIndex: nextIndex,
                currentTextClass: currentClasses,
                nextTextClass: nextClasses,
            }));
        }, 2000);
    }
}

export default TextRoller;