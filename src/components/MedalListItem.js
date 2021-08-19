import './../css/MedalListItem.css';
import { ListItem, ListItemText } from '@material-ui/core'
import MedalCount from './MedalCount';
import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function MedalListItem(props) {
    let initial = localStorage.getItem(props.name.split(' ').join('-'));
    if (!initial) { initial = props.count }

    const [count, setCount] = useState(parseInt(initial));

    let store = (num) => { localStorage.setItem(props.name.split(' ').join('-'), num) }

    let increment = (prev) => { setCount(prev + 1); store(prev + 1); }
    let decrement = (prev) => { if (prev === 0) { return } setCount(prev - 1); store(prev - 1); }

    return (
        <ListItem className="medal-list-item">
            <MedalCount count={count} />
            <ListItemText>{props.name}</ListItemText>
            
            <AddCircleIcon fontSize="large" onClick={() => increment(count) } />
            <RemoveCircleIcon fontSize="large" onClick={() => decrement(count) } />
        </ListItem>
    );
}
