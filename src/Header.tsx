import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="bg-gray-500 h-16 flex justify-evenly items-center font-serif text-white text-3xl">
      <Link to="/">
        <span className="cursor-pointer hover:text-black ">Home</span>
      </Link>
      <Link to="/create">
        <span className="cursor-pointer hover:text-black " >Create</span>
      </Link>
      <Link to="/manage">
        <span className="cursor-pointer hover:text-black ">Manage</span>
      </Link>
    </div>
  );
};

export default Header;
