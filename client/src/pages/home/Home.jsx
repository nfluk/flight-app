import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Destinations from '../../components/Destinations';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="destinations-container">
        <Destinations />
      </div>
    </div>
  );
};

export default Home;
