import './Superhero.css';

function Superhero(props) {
    return (
        <div className="superhero">
            <h3>{props.name}</h3>
            <p>Вселенная: {props.universe}</p>
            <p>Альтер эго: {props.alterego}</p>
            <p>Род деятельности: {props.occupation}</p>
            <p>Друзья: {props.friends}</p>
            <p>Суперсилы: {props.superpowers}</p>
            <img src={props.url} alt={props.name}/>
            <p>{props.info}</p>
        </div>
    );
}

export default Superhero;