import Banner from '../../components/Banner/Banner';
import Chest from '../../components/Chest/Chest';
import Header from '../../components/Header/Header';
import Rules from '../../components/Rules/Rules';
import TakePart from '../../components/TakePart/TakePart';
import style from './Home.module.scss';

const Home = () => {
    return(
        <div className={style.home}>
            <Header />
            <Banner />
            <Rules />
            <Chest />
            <TakePart />
        </div>
    )
}

export default Home;