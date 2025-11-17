import React from "react";
import styles from "./Logo.module.css";

/** Resolve public asset under Vite base (works in dev/prod/subpaths) */
const defaultLogo = `${import.meta.env.BASE_URL}trademeLogo.png`;

/**
 * <Logo />
 * Props:
 *  - src?: custom image source (defaults to /trademeLogo.png)
 *  - size?: number|string (e.g. 24, 32, "2rem")
 *  - alt?: string (defaults to "Logo")
 *  - href?: string — wraps in <a> if provided
 *  - onClick?: fn — wraps in <button> if provided
 *  - className?: string — extra class names
 *  - variant?: "default" | "inverted"
 *  - withText?: boolean — show wordmark
 *  - text?: string — wordmark text
 */
export default function Logo({
  src = defaultLogo,
  size = 32,
  alt = "Logo",
  href,
  onClick,
  className = "",
  variant = "default",
  withText = false,
  text = "Auction House",
  ...rest
}) {
  const cssSize = typeof size === "number" ? `${size}px` : size;

  const content = (
    <span
      className={`${styles.wrapper} ${styles[variant]} ${
        withText ? styles.withText : ""
      } ${className}`}
      style={{ "--size": cssSize }}
      {...rest}
    >
      <img className={styles.img} src={src} alt={alt} draggable={false} />
      {withText && <span className={styles.wordmark}>{text}</span>}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={styles.linkReset} aria-label={alt}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={styles.btnReset}
        aria-label={alt}
      >
        {content}
      </button>
    );
  }

  return content;
}
