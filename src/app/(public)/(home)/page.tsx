import AboutMe from '@/components/AboutMe/AboutMe'
import CardsList from '@/components/CardsList/CardsList'
import ForWork from '@/components/ForWork/ForWork'
import Promo from '@/components/Promo/Promo'
import Reviews from '@/components/Reviews/Reviews'

const Home: React.FC = () => {
    return (
        <>
            <Promo />
            <AboutMe />
            <CardsList />
            <ForWork />
            <Reviews />
        </>
    )
}

export default Home
