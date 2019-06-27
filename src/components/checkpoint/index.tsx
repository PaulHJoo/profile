import * as React from "react";
import { debounce } from "lodash";

interface ICheckpointState {
    reached: boolean;
    reverted: boolean;
}

interface ICheckpointProps {
    onReach: (() => any);
    onRevert?: (() => any);
    onScreenTrigger?: number;
    debug?: boolean;
    graphic?: any;
}

const style = {
    top: "50px",
    width: "100px",
    height: "10px",
    backgroundColor: "red"
}

class Checkpoint extends React.Component<ICheckpointProps, ICheckpointState> {
    public static defaultProps: Partial<ICheckpointProps> = {
        onScreenTrigger: 0.5,
        debug: false,
    }

    private CheckpointElement: React.RefObject<HTMLDivElement>;
    private CheckpointLocation: number;
    private checkPosition: (() => void);

    public constructor(props: ICheckpointProps) {
        super(props);

        this.state = {
            reached: false,
            reverted: true
        }

        this.CheckpointElement = React.createRef();
    }

    public componentDidMount() {
        this.CheckpointLocation = this.CheckpointElement.current.getBoundingClientRect().top + window.pageYOffset;

        window.addEventListener("scroll", debounce(this.handleScroll, 50));
        window.addEventListener("resize", debounce(this.handleWindowResize, 200));

        if (this.props.onRevert) {
            this.checkPosition = this.checkPositionWithRevert;
        } else {
            this.checkPosition = this.checkPositionWithoutRevert;
        }
    }

    public render() {
        return (
            <div ref={this.CheckpointElement}>
                {this.props.graphic}
            </div>
        );
    }

    private handleScroll = () => {
        this.checkPosition();
    }

    private handleWindowResize = () => {
        this.CheckpointLocation = this.CheckpointElement.current.getBoundingClientRect().top + window.pageYOffset;
        this.checkPosition();
    }

    private checkPositionWithRevert = () => {
        const pageCheckPosition = window.pageYOffset + window.innerHeight * this.props.onScreenTrigger;

        if (pageCheckPosition >= this.CheckpointLocation && !this.state.reached) {
            this.props.onReach();
            this.setState({
                reached: true,
                reverted: false
            });
        } else if (pageCheckPosition < this.CheckpointLocation && !this.state.reverted) {
            this.props.onRevert();
            this.setState({
                reached: false,
                reverted: true
            });
        }
    }

    private checkPositionWithoutRevert = () => {
        const pageCheckPosition = window.pageYOffset + window.innerHeight * this.props.onScreenTrigger;

        if (pageCheckPosition >= this.CheckpointLocation && !this.state.reached) {
            this.props.onReach();
        }
    }
}

export default Checkpoint;