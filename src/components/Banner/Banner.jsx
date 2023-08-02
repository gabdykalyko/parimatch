import style from './Banner.module.scss';
import banner from '../../assets/images/slogan.png'

const Banner = () => {
    return(
        <div className={style.banner}>
            <img src={banner} alt="" />
        </div>
    )
}

export default Banner;