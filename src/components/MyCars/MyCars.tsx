import { useState, useEffect } from 'react';
import Header from '../header/Header';
import './MyCars.scss';
import Menu from '../menu/Menu';
import CarList from '../carList/CarList';
import type { Car } from '../types/Car';
import axios from 'axios';
import { useSearch } from '../../SearchContext';

export default function MyCars() {
    const [cars, setCars] = useState<Car[]>([]);
    const [sortExpensive, setSortExpensive] = useState(false);
    const { searchTerm } = useSearch();

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

    const handleToggleSort = () => {
        setSortExpensive(prev => !prev);
        setCars(prev =>
            [...prev].sort((a, b) =>
                !sortExpensive ? (b.price || 0) - (a.price || 0) : (a.price || 0) - (b.price || 0)
            )
        );
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8000/api/cars/${id}`);
            setCars(prev => prev.filter(car => car._id !== id));
            alert('Car deleted successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to delete car');
        }
    };

    return (
        <section className='myCars'>
            <Header />
            <main className="myCars__main">
                <Menu cars={cars} onToggleSort={handleToggleSort} />
                <CarList cars={cars} searchTerm={searchTerm} onDelete={handleDelete} />
            </main>
        </section>
    );
}
