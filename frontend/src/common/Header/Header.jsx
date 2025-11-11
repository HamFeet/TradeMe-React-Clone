import styles from './Header.module.css'

//React-Icons
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaBinocularsSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
//Images

//Components

function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.headerLeft}>
                <img src="/trademeLogo.png" alt="TradeMe Logo" />
                <button>Browse<IoMdArrowDropdown/></button>
            </div>
            <div className={styles.headerRight}>
                <button><LiaBinocularsSolid/>Watchlist</button>
                <button><FaRegHeart/>Favourites</button>
                <button><HiOutlinePencil/>Start a listing</button>
                <button>My Trade Me<IoPersonCircleOutline/></button>
            </div>
        </div>
    )
}

export default Header