import "./imagemap.css"
import Wiimote from '../images/wiimote-white.jpeg'

export default function Imagemap() {
    return (
        <div className='container' id='imgContainer'>
            <img src={Wiimote} alt='switch-controller'> </img>
        </div>
    );
}