import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './CarList.scss';
import type { Car } from '../types/Car';

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);

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

  return (
    <div className='carList'>
      {cars.map(car => (
        <Card
          key={car._id}
          title={car.title || 'No Title'}
          type={car.type || 'Unknown Type'}
          description={car.description || 'No Description'}
          price={car.price || 0}
          imageUrl={car.imageUrl || 'defaultImageUrl.png'}
          updatedAt={car.updatedAt || new Date().toISOString()}
        />
      ))}
    </div>
  );
}
