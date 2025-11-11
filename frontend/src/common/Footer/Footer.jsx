import styles from "./Footer.module.css";
import logo from "/trademeLogo.png"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top section */}
      <div className={styles.topRow}>
        <img src={logo} alt="Trade Me" className={styles.logo} />

        <nav className={styles.topLinks}>
          <a href="#">List an item</a>
          <a href="#">Watchlist</a>
          <a href="#">Favourites</a>
          <a href="#">My Trade Me</a>
          <a href="#">Register</a>
          <a href="#">Log in</a>
        </nav>
      </div>

      <hr className={styles.divider} />

      {/* Middle section: columns */}
      <div className={styles.columns}>
        <div>
          <h4>Marketplace</h4>
          <a href="#">Latest deals</a>
          <a href="#">Stores</a>
          <a href="#">Closing soon</a>
          <a href="#">$1 reserve</a>
        </div>

        <div>
          <h4>Jobs</h4>
          <a href="#">Browse categories</a>
          <a href="#">Careers advice</a>
          <a href="#">JobSmart</a>
          <a href="#">Advertisers advice</a>
        </div>

        <div>
          <h4>Motors</h4>
          <a href="#">Browse all cars</a>
          <a href="#">Other vehicles</a>
          <a href="#">Buying & Selling</a>
          <a href="#">Dealer news & info</a>
        </div>

        <div>
          <h4>Property</h4>
          <a href="#">International Property</a>
          <a href="#">News & guides</a>
          <a href="#">Homes.co.nz</a>
          <a href="#">OneHub for agents</a>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#">Trades</a>
          <a href="#">Domestic Services</a>
          <a href="#">Events & entertainment</a>
          <a href="#">Health & wellbeing</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="#">Help</a>
          <a href="#">Announcements</a>
          <a href="#">Trust & safety</a>
          <a href="#">Seller information</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>© 2024 Trade Me Limited</p>
        <div className={styles.bottomLinks}>
          <a href="#">Desktop site</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Advertise</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
