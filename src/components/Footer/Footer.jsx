import "./Footer.css"
import {CgProfile} from 'react-icons/cg'
import {BiQrScan} from 'react-icons/bi'
import {IoBarbell} from 'react-icons/io5'

export default function Footer() {
    return (
        <footer>
            <CgProfile className="footerButton"/>
            <BiQrScan className="footerButton"/>
            <IoBarbell className="footerButton"/>
        </footer>
    )
}