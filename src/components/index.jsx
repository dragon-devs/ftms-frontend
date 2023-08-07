import React, {Component} from 'react';
import Table from "./table";
import Matches from "./matches";
import Groups from "./groups";

class Index extends Component {
    render() {
        return (
            <div className="bg-gray-900 autofill:bg-slate-900">
                <div className="grid grid-cols-1 gap-3 justify-items-center">
                    <section className=""><Table/></section>
                    <section className=""><Matches/></section>
                    <section className=""><Groups/></section>
                </div>
            </div>
        );
    }
}

export default Index;