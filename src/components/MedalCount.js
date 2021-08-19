import './../css/MedalCount.css';

export default function MedalCount(props) {
    return (
        <div className="medal-count"><p>{props.count}</p></div>
    );
}
