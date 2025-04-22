import HeroSection from "../components/HeroSection";
import FeaturedCategories from "../components/FeaturedCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Whyus />
      <FeaturedCategories />
      <CustomerReviews />
      <WhyChooseUs />
    </>
  );
}
