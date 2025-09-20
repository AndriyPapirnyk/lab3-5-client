import Header from '../header/Header';
import './MyCars.scss';
import Menu from '../menu/Menu';
import CarList from '../carList/CarList';
export default function MyCars() {
  return (
    <section className='myCars'>
        <Header />
        <main className="myCars__main">
            <Menu />
            <CarList />
        </main>
    </section>
  )
}
