import "./Footer.css";
import {CgProfile} from 'react-icons/cg';
import {BiQrScan} from 'react-icons/bi';
import {IoBarbell} from 'react-icons/io5';
import { useNavigate } from "react-router-dom";


export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <CgProfile className="footerButton"/>
            <BiQrScan className="footerButton" onClick={() => navigate('/qr')} />
            <IoBarbell className="footerButton" onClick={() => navigate('/workouts')} />
        </footer>
    )
}