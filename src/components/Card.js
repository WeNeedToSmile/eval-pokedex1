import '../styles/Card.css';

function Card ({card_id, card_type, card_img, card_name}) {
 

    return (
    <div className="card-global">
        
        <div className="card-id">
            <img src="https://www.drupal.org/files/project-images/Pokeball.png" alt="pokeball"></img>
            <p>{card_id} </p>
        </div>
        <div className="card-type">
        <img src="https://www.drupal.org/files/project-images/Pokeball.png" alt="pokeball"></img>
           <p> {card_type}</p>
        </div>

        <div className="card-img">
            <img src={card_img} alt={card_name} />
        </div>

        <div className="card-name">
            <p> {card_name}</p>
        </div>
        
    </div>
    )
}

export default Card