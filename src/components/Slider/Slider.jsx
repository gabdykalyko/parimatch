import { useState } from 'react';
import style from './Slider.module.scss';
import bronze from '../../assets/images/bronz.png';
import serebr from '../../assets/images/serebr.png';
import gold from '../../assets/images/gold.png';
import platine from '../../assets/images/platine.png';
import diamond from '../../assets/images/diamond.png';
import prevb from '../../assets/images/prev.svg';
import nextb from '../../assets/images/next.svg';
import info from '../../assets/images/info.svg';
import close from '../../assets/images/close.svg';
import bigchest from '../../assets/images/bigchest.png';
import bigchestmob from '../../assets/images/bigchestmob.png';

const data = [
    {
        img: bronze,
        text: 'Бронзовый сундук',
        textmob: 'Бронзовый'
    },
    {
        img: serebr,
        text: 'Серебряный сундук',
        textmob: 'Серебряный'
    },
    {
        img: gold,
        text: 'Золотой сундук',
        textmob: 'Золотой'
    },
    {
        img: platine,
        text: 'Платиновый сундук',
        textmob: 'Платиновый'
    },
    {
        img: diamond,
        text: 'Алмазный сундук',
        textmob: 'Алмазный'
    },
]

const Slider = () => {
    const [chests, setChests] = useState(data)
    const [visible, setVisible] = useState(false);

    const prev = () => {
        setChests((prevItems) => {
            const [firstItem, ...restItems] = prevItems; // Извлечение первого элемента в переменную firstItem и оставшиеся элементы в restItems
            return [...restItems, firstItem]; // Добавление firstItem в конец оставшихся элементов и возвращение нового массива
        });
    }

    const next = () => {
        setChests((prevItems) => {
            const copyItems = [...prevItems]; // Создание копии массива
            const lastItem = copyItems.pop(); // Удаление последнего элемента и сохранение его в переменную lastItem
            return [lastItem, ...copyItems]; // Добавление lastItem в начало копии массива и возвращение нового массива
        });
    }

    const showInfo = (data) => {
        if (data.currentTarget.attributes.data.textContent === 'Золотой сундук') {
            setVisible(true)
        }
    }

    const hideInfo = () => {
        setVisible(false)
    }

    return (
        <div className={style.slider}>
            <div className={style.far}>
                <img src={chests[0].img} alt="" />
            </div>

            <div className={style.close}>
                <img src={chests[1].img} alt="" />
            </div>

            <button onClick={prev} className={style.prevb}>
                <img src={prevb} alt="" />
            </button>

            <div className={style.center}>
                <div className={style.chestWrapper} onClick={showInfo} data={chests[2]?.text}>
                    <img src={chests[2].img} alt="" />
                </div>
                <div className={style.txt}>
                    <span className={style.txtdesktop}>{chests[2]?.text}</span>
                    <span className={style.txtmob}>{chests[2]?.textmob}</span>

                    <div className={style.info} onClick={showInfo} data={chests[2]?.text}>
                        <img src={info} alt="" />
                    </div>
                </div>
            </div>

            <div className={visible ? style.popup_overlay : style.none}>
                <div className={style.popup}>
                    <div className={style.title}>
                        Золотой сундук
                    </div>
                    <div className={style.txt}>
                        <span className={style.txtformdesktop}>
                            Из этого сундука вы можете получить один <br />
                            из следующих призов:
                        </span>
                        <span className={style.txtformmob}>
                            Из этого сундука вы можете получить один
                            из следующих призов:
                        </span>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td className={style.first}>
                                    Очки в турнире
                                </td>
                                <td>
                                    2
                                </td>
                            </tr>
                            <tr>
                                <td className={style.first}>
                                    Очки в турнире
                                </td>
                                <td>
                                    3
                                </td>
                            </tr>
                            <tr>
                                <td className={style.first}>
                                    Очки в турнире
                                </td>
                                <td>
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className={style.first}>
                                    FreeBet
                                </td>
                                <td>
                                    1 000
                                </td>
                            </tr>
                            <tr>
                                <td className={style.first}>
                                    FreeBet
                                </td>
                                <td>
                                    2 000
                                </td>
                            </tr>
                            <tr>
                                <td className={style.first}>
                                    FreeBet
                                </td>
                                <td>
                                    5 000
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={style.infotxt}>
                        <span className={style.infotxtdesktop}>
                            ВАЖНО - если вы выполнили квест - <br />
                            успейте открыть сундук и забрать награду <br />
                            до окончания акции
                        </span>

                        <span className={style.infotxtmob}>
                            ВАЖНО - если вы выполнили квест -
                            успейте открыть сундук и забрать награду
                            до окончания акции
                        </span>
                    </div>

                    <div className={style.closebtn} onClick={hideInfo}>
                        <img src={close} alt="" />
                    </div>

                    <div className={style.bigchest}>
                        <img src={bigchest} alt="" />
                    </div>

                    <div className={style.bigchestmob}>
                        <img src={bigchestmob} alt="" />
                    </div>
                </div>
            </div>

            <button onClick={next} className={style.nextb}>
                <img src={nextb} alt="" />
            </button>

            <div className={style.close}>
                <img src={chests[3].img} alt="" />
            </div>

            <div className={style.far}>
                <img src={chests[4].img} alt="" />
            </div>
        </div>
    )
}

export default Slider;