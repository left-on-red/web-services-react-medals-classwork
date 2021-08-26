import './../css/MedalListItem.css';
import { ListItem, ListItemText } from '@material-ui/core'
import MedalCount from './MedalCount';
import { Component } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default class MedalListItem extends Component {
    constructor(props) {
        super(props);

        let initial = localStorage.getItem(props.name.split(' ').join('-'));
        if (!initial) { initial = props.count }

        this.state = { count: parseInt(initial), name: props.name }
    }

    store(num) { localStorage.setItem(this.state.name.split(' ').join('-'), num) }
    set(num) { this.setState({ count: num }); this.store(num) }

    increment() { this.set(this.state.count + 1) }
    decrement() { if (this.state.count === 0) { return } this.set(this.state.count - 1) }

    render() {
        return (
            <ListItem className="medal-list-item">
                <MedalCount count={this.state.count} />
                <ListItemText>{this.state.name}</ListItemText>
                
                <AddCircleIcon fontSize="large" onClick={() => this.increment() } />
                <RemoveCircleIcon fontSize="large" onClick={() => this.decrement() } />
            </ListItem>
        );
    }
}
