import { useNavigate } from 'react-router-dom';
import './Header.scss';
import clearImg from '../../assets/clear.png';
import { useSearch } from '../../SearchContext';

export default function Header() {
    const navigate = useNavigate();
    const { setSearchTerm } = useSearch();

    const navigateTo = (path: string): void => {
        navigate(path);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const clearInput = (): void => {
        setSearchTerm('');
        const inputElement = document.querySelector('.header__search-input') as HTMLInputElement;
        if (inputElement) inputElement.value = '';
    };

    return (
        <header className='header'>
            <div className='header__left'>
                <h1 onClick={() => navigateTo('/')} className="header__logo">MyGarage</h1>
                <nav className="header__nav">
                    <div onClick={() => navigateTo('/my-cars')} className="header__nav-item">My Cars</div>
                    <div onClick={() => navigateTo('/create-car')} className="header__nav-item">Create Car</div>
                </nav>
            </div>
            <div className="header__search">
                <input
                    className='header__search-input'
                    type="text"
                    placeholder='Search...'
                    onChange={handleInputChange}
                />
                <button className='header__search-button' onClick={clearInput}>
                    <img src={clearImg} alt="Clear" />
                </button>
            </div>
        </header>
    );
}
