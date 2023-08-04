import style from './Rules.module.scss';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
import fourth from '../../assets/images/fourth.png';
import firstmob from '../../assets/images/firstmob.png';
import secondmob from '../../assets/images/secondmob.png';
import thirdmob from '../../assets/images/thirdmob.png';
import fourthmob from '../../assets/images/fourthmob.png';

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
                        <img className={style.imgmob} src={firstmob} alt="" />
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
                        <img className={style.imgmob} src={secondmob} alt="" />
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
                        <img className={style.imgmob} src={thirdmob} alt="" />
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
                        <img className={style.imgmob} src={fourthmob} alt="" />
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