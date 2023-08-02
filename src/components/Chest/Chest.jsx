import Slider from '../Slider/Slider';
import style from './Chest.module.scss';

const Chest = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                Сундуки
            </div>
            <div className={style.info}>
                Чем выше место в рейтиге, тем выше шанс выиграть призы
            </div>

            <Slider />
        </div>
    )
}

export default Chest;