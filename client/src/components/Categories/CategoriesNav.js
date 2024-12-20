import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { BsHouseDoorFill, BsFillHouseFill, BsFillPuzzleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai';
import { GiFlowerPot, GiClothes } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1>Categories</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/properties">
                <Button variant="dark" id="properties"><FaBook />Books</Button>{' '}
            </Link>
            <Link to="/categories/auto">
                <Button variant="dark" id="auto"><AiFillCar />Vehicles</Button>{' '}
            </Link>
            <Link to="/categories/home">
                <Button variant="dark" id="home"><BsFillHouseFill />House Appliances</Button>{' '}
            </Link>
            <Link to="/categories/electronics">
                <Button variant="dark" id="electronics"><MdPhoneAndroid />Electronics</Button>{' '}
            </Link>
            <Link to="/categories/clothes">
                <Button variant="dark" id="clothes"><GiClothes />Clothes</Button>{' '}
            </Link>
            <Link to="/categories/toys">
                <Button variant="dark" id="toys"><BsFillPuzzleFill />Projects</Button>{' '}
            </Link>
            
        </div>
    )
}

export default CategoriesNav;