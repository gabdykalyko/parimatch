import { useState, useRef } from 'react';
import style from './TakePart.module.scss';
import kz from '../../assets/images/kz.svg';
import updown from '../../assets/images/updown.svg';
import eye from '../../assets/images/eye.svg';
import dot from '../../assets/images/dot.svg';
import check from '../../assets/images/check.svg';
import closeFrom from '../../assets/images/closeForm.svg';

const TakePart = () => {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('+7')
    const [right, setRight] = useState(true)
    const [rightPass, setRightPass] = useState(true)
    const [rightPassLong, setRightPassLong] = useState(true)
    const [ageAgree, setAgeAgree] = useState(false)
    const [bonusAgree, setBonusAgree] = useState(false)

    const showPopup = () => {
        setVisible(true)
    }

    const hidePopup = () => {
        setVisible(false)
    }

    const number = (e) => {
        setValue(e.target.value)
        if (e.target.value === '' || e.target.value === '+') {
            e.target.value = '+7'
        }

        if (`${e.target.value[2]}${e.target.value[3]}${e.target.value[4]}` === '700' ||
            `${e.target.value[2]}${e.target.value[3]}${e.target.value[4]}` === '701' ||
            `${e.target.value[2]}${e.target.value[3]}${e.target.value[4]}` === '702' ||
            `${e.target.value[2]}${e.target.value[3]}${e.target.value[4]}` === '703' ||
            `${e.target.value[2]}${e.target.value[3]}${e.target.value[4]}` === '704'
        ) {
            setRight(true)
        } else {
            setRight(false)
        }
    }

    const pass = (e) => {
        if (/\d/.test(e.target.value)) {
            setRightPass(true)
            console.log(1)
        } else {
            setRightPass(false)
        }

        if (e.target.value.length >= 6) {
            setRightPassLong(true)
        } else {
            setRightPassLong(false)
        }
    }

    const showPass = (e) => {
        if (document.querySelector("#input").attributes.type.value === 'password') {
            document.querySelector("#input").attributes.type.value = 'text'
        } else {
            document.querySelector("#input").attributes.type.value = 'password'
        }

    }

    const ageAgreed = (e) => {
        setAgeAgree(!ageAgree)
    }

    const bonusAgreed = (e) => {
        setBonusAgree(!bonusAgree)
    }

    return (
        <div className={style.part}>
            <div className={style.button}>
                <button onClick={showPopup}>
                    Участвовать
                </button>
            </div>

            <div className={style.con}>
                Правила и условия
            </div>

            <div className={visible ? style.popup_overlay : style.none}>
                <div className={style.popup}>
                    <div className={style.title}>
                        РЕГИСТРАЦИЯ
                    </div>

                    <div className={style.formRow}>
                        <div className={`${style.formWrapper} ${style.formWrapperLang}`}>
                            <div>
                                <img src={kz} alt="" />
                            </div>
                            <div>
                                <img src={updown} alt="" />
                            </div>
                        </div>
                        <div className={`${right ? style.formWrapper : style.error} ${style.formWrapperPhone}`}>
                            <div className={style.formTitle}>
                                Телефон
                            </div>
                            <div>
                                <input onChange={number} type="tel" placeholder='X XX XXX XX XX' value={value} />
                            </div>
                            <div className={right ? style.none : style.block}>
                                Неверный код оператора. Введите настоящий номер телефона
                            </div>
                        </div>
                    </div>

                    <div className={style.formRow}>
                        <div className={`${rightPass && rightPassLong ? style.formWrapper : style.error} ${style.formWrapperPhone} ${style.formWrapperPass}`}>
                            <div>
                                <input onChange={pass} id='input' type="password" placeholder='Пароль' />
                            </div>
                            <div onClick={showPass}>
                                <img src={eye} alt="" />
                            </div>
                        </div>
                        <div className={rightPassLong ? style.none : style.blockLong}>
                            <div>
                                <div>
                                    <img src={dot} alt="" />
                                </div>
                                <div>
                                    Пароль должен содержать больше символов
                                </div>
                            </div>
                        </div>
                        <div className={rightPass ? style.none : style.blockNum}>
                            <div>
                                <div>
                                    <img src={dot} alt="" />
                                </div>
                                <div>
                                    Пароль должен содержать цифру
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${style.formRowAgree} ${style.mb60}`} onClick={ageAgreed}>
                        <div>
                            <div className={style.formRowAgreeTitle}>
                                Мне больше 21 года
                            </div>
                            <div className={style.formRowAgreeTxt}>
                                Я соглашаюсь с договором оферты
                            </div>
                        </div>
                        <div className={`${style.formRowAgreed} ${ageAgree ? style.formRowAgreedTrue : ''}`}>
                            <img className={`${ageAgree ? '' : style.none}`} src={check} alt="" />
                        </div>
                    </div>

                    <div className={style.formRowAgree} onClick={bonusAgreed}>
                        <div>
                            <div className={style.formRowAgreeTitle}>
                                Мне больше 21 года
                            </div>
                            <div className={style.formRowAgreeTxt}>
                                Я соглашаюсь с договором оферты
                            </div>
                        </div>
                        <div className={`${style.formRowAgreed} ${bonusAgree ? style.formRowAgreedTrue : ''}`}>
                            <img className={`${bonusAgree ? '' : style.none}`} src={check} alt="" />
                        </div>
                    </div>

                    <div className={style.register}>
                        <button>
                            Зарегистрироваться
                        </button>
                    </div>

                    <div className={style.enter}>
                        Есть аккаунт? <span>Войти</span>
                    </div>

                    <div className={style.closeForm} onClick={hidePopup}>
                        <img src={closeFrom} alt="" />
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