import './Menu.scss';

export default function Menu() {
  return (
    <div className='menu'>
        <h1>Manage Cars</h1>
        <div className="menu__options">
            <div className="menu__options-option">
                <h3>Sort by most <br /> expensive cars</h3>
                <div>Toggle</div>
            </div>
        </div>
        <div className="menu__line"></div>
        <h3>Count garage price:</h3>
        <button className='menu__button'>Count</button>
        <div className='menu__results'>
            <p>Total price:</p>
            <span>$$$</span>
        </div>
    </div>
  )
}
