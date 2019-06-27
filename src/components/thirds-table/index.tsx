import * as React from "react";

interface IThirdsTableProps {
    slideIn: boolean;
    tableHeader: string;
    firstColumnHeader: string;
    firstColumn: string[];
    secondColumnHeader: string;
    secondColumn: string[];
    thirdColumnHeader: string;
    thirdColumn: string[];
    border?: boolean;
}

class ThirdsTable extends React.Component<IThirdsTableProps> {
    private firstColumn = this.props.firstColumn.map((item) => {
        return (
            <p className="text-center text-small" key={item}>
                {item}
            </p>
        );
    });

    private secondColumn = this.props.secondColumn.map((item) => {
        return (
            <p className="text-center text-small" key={item}>
                {item}
            </p>
        );
    });

    private thirdColumn = this.props.thirdColumn.map((item) => {
        return (
            <p className="text-center text-small" key={item}>
                {item}
            </p>
        );
    });

    public render() {
        const tableSlideUpClass = this.props.slideIn ? "animate-beizer-slow animate-visible" : "";
        const border = this.props.border ? "border" : "";
        return (
            <div className={"slide-up-25 " + tableSlideUpClass}>
                <p className="text-center text-large margin-bot-20">
                    {this.props.tableHeader}
                </p>
                <div className={"table " + border}>
                    <div className="table-item">
                        <div>
                            <p className="text-center text-medium">
                                {this.props.firstColumnHeader}
                            </p>
                        </div>
                        <div>
                            {this.firstColumn}
                        </div>
                    </div>
                    <div className="table-item">
                        <div>
                            <p className="text-center text-medium">
                                {this.props.secondColumnHeader}
                            </p>
                        </div>
                        <div>
                            {this.secondColumn}
                        </div>
                    </div>
                    <div className="table-item">
                        <div>
                            <p className="text-center text-medium">
                                {this.props.thirdColumnHeader}
                            </p>
                        </div>
                        <div>
                            {this.thirdColumn}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdsTable;