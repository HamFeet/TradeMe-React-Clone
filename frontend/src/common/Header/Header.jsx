// Header.jsx
import styles from './Header.module.css'

// React Icons
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaBinocularsSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerTopBackground}>
        <div className={`${styles.headerTop} ${styles.headerContainer}`}>   
          <div className={styles.headerLinks}>
            <button className={styles.headerButton}>Trade Me</button>
            <button className={styles.headerButton}>Trade Me Insurance</button>
            <button className={styles.headerButton}>Holiday Homes</button>
            <button className={styles.headerButton}>Find Someone</button>
            <button className={styles.headerButton}>Motor Web</button>
            <button className={styles.headerButton}>homes.co.nz</button>
          </div>
          <div className={styles.headerAuth}>
            <button className={styles.headerButton}>Register</button>
            <button className={styles.headerButton}>Log In</button>
          </div>
        </div>
      </div>

      <div className={styles.headerBottomBackground}>
        <div className={`${styles.headerBottom} ${styles.headerContainer}`}>
          <div className={styles.headerLeft}>
            <img src="/trademeLogo.png" alt="TradeMe Logo" />
            <button className={styles.headerButton}>Browse <IoMdArrowDropdown /></button>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.headerButton}><LiaBinocularsSolid />Watchlist</button>
            <button className={styles.headerButton}><FaRegHeart />Favourites</button>
            <button className={styles.headerButton}><HiOutlinePencil />Start a listing</button>
            <button className={styles.headerButton}>My Trade Me<IoPersonCircleOutline /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header