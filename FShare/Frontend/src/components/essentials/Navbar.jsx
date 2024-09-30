import Logo from '../../assets/Logo.png';
import {Link} from  'react-router-dom';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-indigo-800 text-white w-full fixed top-0 left-0 right-0 mb-4">
      <div className="text-xl font-bold"> 
        <img src={Logo} alt="FShare" className="w-12 h-12"/> 
      </div>
      <div>
        <Link to="/login" className="px-4">Login</Link>
        <Link to="/signup" className="px-4">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
