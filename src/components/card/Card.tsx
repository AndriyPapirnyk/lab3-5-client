import { useNavigate } from 'react-router-dom';
import './Card.scss';

export default function Card() {
    const navigate = useNavigate();

    const navigateTo = (path: string) : void => {
        navigate(path);
    }

  return (
    <div className='card'>
        <div className="card__image">

        </div>
        <div className="card__content">
            <div className="card__info">
                <h2>Car Name</h2>
                <h4>Car type: SUV</h4>
                <div className="card__info-description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus laboriosam harum quasi ut, eum praesentium impedit? Natus hic alias molestias dolorum quis. Dignissimos deserunt quam iure labore sint, debitis rerum voluptatum et repellendus illo similique quia animi facilis impedit dolores ratione? Repudiandae ullam explicabo itaque alias, totam enim distinctio?</p>
                </div>
            </div>
            <p className="card__updation">Last Updated 3 mins ago</p>
            <div className="card__options">
                <button onClick={() => {navigateTo('/edit-car')}}>Edit</button>
                <button>Remove</button>
            </div>
        </div>
    </div>
  )
}
