import { useNavigate } from 'react-router-dom';
import './Card.scss';

interface CardProps {
    _id: string;
    title: string;
    type: string;
    description: string;
    price: number;
    imageUrl: string;
    updatedAt: string;
    onDelete: (_id: string) => void;
}

export default function Card({ title, type, description, price, imageUrl, updatedAt, _id, onDelete }: CardProps) {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this car?')) {
            onDelete(_id);
        }
    };

    return (
        <div className='card'>
            <div className="card__image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="card__content">
                <div className="card__info">
                    <h2>{title}</h2>
                    <h4>Car type: {type}</h4>
                    <h4>Car price: {price}$</h4>
                    <div className="card__info-description">
                        <p>{description}</p>
                    </div>
                </div>
                <p className="card__updation">
                    Last Updated {new Date(updatedAt).toLocaleString()}
                </p>
                <div className="card__options">
                    <button onClick={() => navigateTo(`/edit-car/${_id}`)}>Edit</button>
                    <button onClick={handleDelete}>Remove</button>
                </div>
            </div>
        </div>
    );
}
