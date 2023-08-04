import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import android from '../../assets/images/android.svg'
import ios from '../../assets/images/ios.svg'

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <img className={style.logo} src={logo} alt="" />
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
                <div className={style.btn}>
                    <button>
                        Вход
                    </button>

                    <div>
                        <img src={android} alt="" />
                    </div>
                    <div>
                        <img src={ios} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;