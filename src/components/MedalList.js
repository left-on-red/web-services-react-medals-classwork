import './../css/MedalList.css';
import { List, ListSubheader, Divider } from '@material-ui/core';
import MedalListItem from './MedalListItem';
import { Component } from 'react';

let countries = [
    'United States',
    'China',
    'Russia',
    'Germany',
    'Brazil',
    'Japan'
]

let items = [];

for (let c = 0; c < countries.length; c++) { items.push(<MedalListItem count="0" name={countries[c]} key={c} />) }

export default class MedalList extends Component {
    render() {
        return (
            <List className="list"
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Gold Medal Count
                    </ListSubheader>
                }
            >
                <Divider></Divider>
                {items}
            </List>
        );
    }
}
