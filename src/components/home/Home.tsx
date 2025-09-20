import './Home.scss';
import Header from '../header/Header';
import garageImg from '../../assets/garage.png';

export default function Home() {
  return (
    <div className='home'>
        <Header />
        <main className="home__main">
            <h1>Welcome to MyGarage App!</h1>
            <img src={garageImg} alt="garage" />
        </main>
    </div>
  )
}
