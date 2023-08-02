import style from './Rules.module.scss';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
import fourth from '../../assets/images/fourth.png';

const Rules = () => {
    return (
        <div className={style.rules}>
            <div className={style.title}>
                Как принять участие
            </div>
            <div className={style.container}>
                <div className={style.rules__item}>
                    <div className={style.rules__img}>
                        <img src={first} alt="" />
                    </div>
                    <div className={style.rules__txt}>
                        Зарегистрируйтесь <br />
                        и создайте профиль <br />
                        на странице акции
                    </div>
                </div>
                <div className={style.rules__item}>
                    <div className={style.rules__img}>
                        <img src={second} alt="" />
                    </div>
                    <div className={style.rules__txt}>
                        Выполняйте задания каждый <br />
                        день и получайте сундуки <br />
                        с призами
                    </div>
                </div>
                <div className={style.rules__item}>
                    <div className={style.rules__img}>
                        <img src={third} alt="" />
                    </div>
                    <div className={style.rules__txt}>
                        Набирайте баллы и поднимайтесь <br />
                        в рейтинге. Чем выше рейтинг, <br />
                        тем больше вероятность выигрыша
                    </div>
                </div>
                <div className={style.rules__item}>
                    <div className={style.rules__img}>
                        <img src={fourth} alt="" />
                    </div>
                    <div className={`${style.rules__txt} ${style.rules__last}`}>
                        Получайте гарантированные <br/>
                        призы и бонусы
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules;