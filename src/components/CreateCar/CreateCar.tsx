import Header from '../header/Header';
import './CreateCar.scss';

export default function CreateCar() {
  return (
    <section className='createCar'>
        <Header />
        <main className="createCar__main">
            <h1 className='createCar__title'>Create a new car</h1>
            <form className='createCar__form' action="POST">
                <div className="createCar__form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required placeholder='Text...'/>
                </div>
                <div className="createCar__form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                </div>
                <div className="createCar__form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" required placeholder='Price...'/>
                </div>
                <div className="createCar__form-group">
                    <label htmlFor="type">Car Type:</label>
                    <select id="type">
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
                <button type='submit'>Submit</button>
            </form>
        </main>
    </section>
  )
}
