import './Menu.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Car } from '../types/Car';

export default function Menu() {
    const [cars, setCars] = useState<Car[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const fetchCars = async () => {
          try {
            const res = await axios.get('http://localhost:8000/api/get-cars');
            setCars(res.data);
          } catch (err) {
            console.error('Failed to fetch cars:', err);
          }
        };
        fetchCars();
    }, []);

    const getTotalPrice = (cars: Car[]) : void => {
    setTotalPrice(cars.reduce((sum, car) => sum + (car.price || 0), 0));
    }

  return (
    <div className='menu'>
        <h1>Manage Cars</h1>
        <div className="menu__options">
            <div className="menu__options-option">
                <h3>Sort by most <br /> expensive cars</h3>
                <div>Toggle</div>
            </div>
        </div>
        <div className="menu__line"></div>
        <h3>Count garage price:</h3>
        <button onClick={() => getTotalPrice(cars)} className='menu__button'>Count</button>
        <div className='menu__results'>
            <p>Total price:</p>
            <span>{totalPrice}$</span>
        </div>
    </div>
  )
}
