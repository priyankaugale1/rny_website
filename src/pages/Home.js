import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import expertiseData from '../data/expertiseData';
import Works from '../components/Works';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Testimonial from '../components/Testimonial';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
       <ExpertiseSection items={expertiseData} />
       <Works />
       <Experience />
       <Blog />
       <Testimonial />
       <FAQSection />
       <Footer />
    </div>
  );
};

export default Home;
