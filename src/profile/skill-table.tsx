import * as React from "react";

interface ISkillsTableProps {
    slideIn: boolean;
}

class SkillsTable extends React.Component<ISkillsTableProps> {
    public render() {
        const tableSlideUpClass = this.props.slideIn ? "animate-beizer-slow animate-visible" : "";
        return (
            <div className={"slide-up-25 " + tableSlideUpClass}>
                <p className="text-center text-large margin-bot-20">
                    — Skills
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
                                .NET
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
                                Webpack
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
        );
    }
}

export default SkillsTable;