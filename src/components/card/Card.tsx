import { useNavigate } from 'react-router-dom';
import './Card.scss';
// import axios from 'axios';

interface CardProps {
  title: string;
  type: string;
  description: string;
  price: number;
  imageUrl: string;
  updatedAt: string;
}

export default function Card({ title, type, description, price, imageUrl, updatedAt }: CardProps) {
  const navigate = useNavigate();

  const navigateTo = (path: string): void => {
    navigate(path);
  };

//   const handleDelete = async () => {
//     try {
//       const res = await axios.delete('http://localhost:8000/api/create-car', );
//       console.log('Car deleted:', res.data);
//       alert('Car deleted successfully!');
//     } catch (err: any) {
//       console.error(err);
//       alert('Error deleting car: ' + err.message);
//     }
//   };

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
          <button onClick={() => navigateTo('/edit-car')}>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}
