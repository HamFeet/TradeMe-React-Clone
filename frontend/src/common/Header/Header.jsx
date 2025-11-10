import styles from '../Header/Header.module.css'

//Images

//Components

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="/trademeLogo.png" alt="TradeMe Logo" />
                <button>Browse</button>
            </div>
            <div className={styles.headerRight}>
                <button>Watchlist</button>
                <button>Favourites</button>
                <button>Start a listing</button>
                <button>My Trade Me</button>
            </div>
        </div>
    )
}

export default Header