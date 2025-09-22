import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../header/Header';
import type { Car } from '../types/Car';

export default function EditCar() {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();

    const [form, setForm] = useState<Car>({
        _id: '',
        title: '',
        description: '',
        price: 0,
        type: 'sedan',
        imageUrl: '',
        updatedAt: new Date().toISOString(),
    });

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/cars/${id}`);
                setForm(res.data);
            } catch (err) {
                console.error('Failed to fetch car:', err);
            }
        };

        if (id) {
            fetchCar();
        }
    }, [id]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/cars/${id}`, form);
            alert('Car updated successfully!');
            navigate('/my-cars'); 
        } catch (err) {
            console.error('Error updating car:', err);
            alert('Error updating car');
        }
    };

    return (
        <section className='createCar'>
            <Header />
            <main className="createCar__main">
                <h1 className='createCar__title'>Edit car</h1>
                <form className='createCar__form' onSubmit={handleSubmit}>
                    <div className="createCar__form-group">
                        <label htmlFor="title">Name:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            placeholder='Text...'
                            value={form.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createCar__form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={form.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="createCar__form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            required
                            placeholder='Price...'
                            value={form.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createCar__form-group">
                        <label htmlFor="type">Car Type:</label>
                        <select id="type" name="type" value={form.type} onChange={handleChange}>
                            <option value="sedan">Sedan</option>
                            <option value="hatchback">Hatchback</option>
                            <option value="suv">SUV</option>
                            <option value="crossover">Crossover</option>
                            <option value="coupe">Coupe</option>
                            <option value="convertible">Convertible</option>
                            <option value="wagon">Wagon</option>
                            <option value="pickup">Pickup Truck</option>
                            <option value="van">Van</option>
                            <option value="minivan">Minivan</option>
                            <option value="sports">Sports Car</option>
                            <option value="luxury">Luxury Car</option>
                        </select>
                    </div>
                    <div className="createCar__form-group">
                        <label htmlFor="imageUrl">Image url:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            required
                            placeholder='Url...'
                            value={form.imageUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit'>Edit</button>
                </form>
            </main>
        </section>
    );
}
