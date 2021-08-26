import './../css/MedalCount.css';
import { Component } from 'react';

export default class MedalCount extends Component {
    render() {
        return (
            <div className="medal-count"><p>{this.props.count}</p></div>
        )
    }
}