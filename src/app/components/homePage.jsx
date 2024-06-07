import Layout from './Layout';
import Carousel from './corousal';
import IconGrid from './brandGrid';
import Banner from './banner';
import Services from './services';
import FeaturedProducts from './featureProducts';
import OfferProducts from './offerProducts';

const HomePage = () => {
  return (
    <>
      <Layout>
        <section className="bg-gray-100 mb-8">
          <Carousel></Carousel>
        </section>

        <section className=" mb-8">
          <IconGrid></IconGrid>
        </section>

        <section className="mb-8">
          <FeaturedProducts></FeaturedProducts>
        </section>

        <section className="mb-8">
          <Banner></Banner>
        </section>

        <section className="mb-8">
          <OfferProducts></OfferProducts>
        </section>

        <section className="">
          <Services></Services>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
