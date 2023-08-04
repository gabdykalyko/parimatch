import style from './Banner.module.scss';
import banner from '../../assets/images/slogan.png'
import alga from '../../assets/images/alga.png';

const Banner = () => {
    return(
        <div className={style.banner}>
            <img src={banner} alt="" />
            <img className={style.alga} src={alga} alt="" />
        </div>
    )
}

export default Banner;