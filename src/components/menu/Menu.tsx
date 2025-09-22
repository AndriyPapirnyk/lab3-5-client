import './Menu.scss';
import type { Car } from '../types/Car';

interface MenuProps {
    cars: Car[];
    onToggleSort: () => void;
}

export default function Menu({ cars, onToggleSort }: MenuProps) {
    const totalPrice = cars.reduce((sum, car) => sum + (car.price || 0), 0);

    return (
        <div className='menu'>
            <h1>Manage Cars</h1>
            <div className="menu__options">
                <div className="menu__options-option">
                    <h3>Sort by most <br /> exp/cheap cars</h3>
                    <div onClick={onToggleSort}>Toggle</div>
                </div>
            </div>
            <div className="menu__line"></div>
            <h3>Count garage price:</h3>
            <div className='menu__results'>
                <p>Total price:</p>
                <span>{totalPrice}$</span>
            </div>
        </div>
    );
}
