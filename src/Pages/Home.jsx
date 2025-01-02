import Banner from "../Components/Banner";
import Category from "../Components/Category";
import ChefRecommends from "../Components/ChefRecommends";
import Contact from "../Components/Contact";
import FeaturedMenu from "../Components/FeaturedMenu";
import Menu from "../Components/Menu";
import Review from "../Components/Review";
import Service from "../Components/Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Service></Service>
            <Menu></Menu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <FeaturedMenu></FeaturedMenu>
            <Review></Review>
        </div>
    );
};

export default Home;