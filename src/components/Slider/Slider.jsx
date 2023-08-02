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

const data = [
    {
        img: bronze,
        text: 'Бронзовый сундук'
    },
    {
        img: serebr,
        text: 'Серебряный сундук'
    },
    {
        img: gold,
        text: 'Золотой сундук'
    },
    {
        img: platine,
        text: 'Платиновый сундук'
    },
    {
        img: diamond,
        text: 'Алмазный сундук'
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

    const showInfo = () => {
        setVisible(true)
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
                <div>
                    <img src={chests[2].img} alt="" />
                </div>
                <div className={style.txt}>
                    {chests[2]?.text}

                    <div className={style.info} onClick={showInfo}>
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
                        Из этого сундука вы можете получить один <br />
                        из следующих призов:
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
                        ВАЖНО - если вы выполнили квест - <br />
                        успейте открыть сундук и забрать награду <br />
                        до окончания акции
                    </div>

                    <div className={style.closebtn} onClick={hideInfo}>
                        <img src={close} alt="" />
                    </div>

                    <div className={style.bigchest}>
                        <img src={bigchest} alt="" />
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