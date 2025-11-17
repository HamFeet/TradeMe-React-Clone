import React from "react";
import styles from "./TrendingBox.module.css";

export default function TrendingBox({
  size = "md",
  bg = "#EEF2FF",
  eyebrow,
  title,
  showButton = false,
  buttonText = "Shop now",
  href,
  onClick,
  className = "",
  style = {},
  ...rest
}) {
  return (
    <article
      className={`${styles.card} ${styles[size]} ${className}`}
      style={{ "--tb-bg": bg, ...style }}
      {...rest}
    >
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}

      {title && <h3 className={styles.title}>{title}</h3>}

      {showButton &&
        (href ? (
          <a className={styles.cta} href={href}>
            {buttonText}
          </a>
        ) : (
          <button className={styles.cta} type="button" onClick={onClick}>
            {buttonText}
          </button>
        ))}
    </article>
  );
}
