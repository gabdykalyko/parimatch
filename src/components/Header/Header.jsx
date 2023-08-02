import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className={style.nav}>
                <div>
                    <div className={style.lang}>
                        <div className={style.lang__item}>
                            <a href="#">
                                RU
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                KZ
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <button>
                        Вход
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;