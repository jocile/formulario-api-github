import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
   return (
      <div className="home-container">
         <div className="home-card">
            <div className="home-content-container">
               <h1>Desafio Github API</h1>
               <p>DevSuperior - Escola de programação</p>
            </div>
            <Link to="/profiles">
               <button className="btn btn-primary btn-icon">
                  <h6>Começar</h6>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Home;