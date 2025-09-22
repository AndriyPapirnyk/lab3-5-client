import Card from '../card/Card';
import './CarList.scss';
import type { Car } from '../types/Car';

interface CarListProps {
    cars: Car[];
    searchTerm: string;
    onDelete: (id: string) => void;
}

export default function CarList({ cars, searchTerm, onDelete }: CarListProps) {
    const filteredCars = cars.filter(car =>
        car.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='carList'>
            {filteredCars.map(car => (
                <Card
                    key={car._id}
                    _id={car._id}
                    title={car.title || 'No Title'}
                    type={car.type || 'Unknown Type'}
                    description={car.description || 'No Description'}
                    price={car.price || 0}
                    imageUrl={car.imageUrl || 'defaultImageUrl.png'}
                    updatedAt={car.updatedAt || new Date().toISOString()}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
