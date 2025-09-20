import { useNavigate } from 'react-router-dom';
import './Header.scss';
import loupeImg from '../../assets/loupe.png';
import clearImg from '../../assets/clear.png';

export default function Header() {
    const navigate = useNavigate();
    
    const navigateTo = (path: string) : void => {
        navigate(path);
    }

    const clearInput = () : void => {
        const input = document.querySelector('.header__search-input') as HTMLInputElement;
        if (input) {
            input.value = '';
        }
    }


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
            <input className='header__search-input' type="text" placeholder='Search...'/>
            <button className='header__search-button'>
                <img src={loupeImg} alt="" />
            </button>
            <button className='header__search-button' onClick={clearInput}>
                <img src={clearImg} alt="" />
            </button>
        </div>
    </header>
  )
}
