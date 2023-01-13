import "./Footer.css";
import {CgProfile} from 'react-icons/cg';
import {BiQrScan} from 'react-icons/bi';
import {IoBarbell} from 'react-icons/io5';
import { useNavigate } from "react-router-dom";


export default function Footer({user}) {
    const navigate = useNavigate()
    return (
        <footer>
            {
                user.email === "admin@admin" ?
                    <>
                        <BiQrScan className="footerButton" onClick={() => navigate('/qr')} />
                    </>
                :
                    <>
                        <CgProfile className="footerButton"onClick={() => navigate('/profile')} />
                        <BiQrScan className="footerButton" onClick={() => navigate('/qr')} />
                        <IoBarbell className="footerButton" onClick={() => navigate('/workouts')} />
                    </>
            }
        </footer>
    )
}