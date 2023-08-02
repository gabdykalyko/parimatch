import style from './TakePart.module.scss';
import part from '../../assets/images/part.png';
import { useState } from 'react';

const TakePart = () => {
    const [visible, setVisible] = useState(false)
    const showPopup = () => {
        setVisible(true)
    } 

    return (
        <div className={style.part}>
            <div className={style.button}>
                <button onClick={showPopup}>
                    Участвовать
                </button>
            </div>

            <div className={visible ? style.popup_overlay : style.none}>
                <div className={style.popup}>
                    <div className={style.title}>
                        РЕГИСТРАЦИЯ
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>

            <div className={style.info}>
                *Задания можно выполнять бесконечное количество раз
            </div>
        </div>
    )
}

export default TakePart;