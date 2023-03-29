import {Link,  useNavigate } from 'react-router-dom';
import HomePageDetails from './HomePageDetails';

function HomePage() {
  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3689/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    navigate('/register');
  };


  return (
    <div  className="row  g-12">
      <HomePageDetails/>
      <button onClick={handleClick} col="col-12 col-sm-6 col-md-4"><Link><h2>Register to View Available bo</h2></Link></button>
    </div>
  );
}

export default HomePage;
