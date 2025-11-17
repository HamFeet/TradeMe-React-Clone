import React, { useState } from "react";
import styles from "./WishlistButton.module.css";

const DEFAULT_ICON = `${import.meta.env.BASE_URL}Watchlistbutton.png`;
const DEFAULT_ICON_ACTIVE = `${import.meta.env.BASE_URL}Watchlistbutton.png`; // optional (fallbacks if missing)

export default function WishlistButton({
  itemId,
  defaultActive = false,
  active,
  onToggle,
  size = 28,
  src = DEFAULT_ICON,
  activeSrc = DEFAULT_ICON_ACTIVE,
  className = "",
  title = "Add to Watchlist",
  disabled = false,
  ...rest
}) {
  const isControlled = typeof active === "boolean";
  const [internal, setInternal] = useState(defaultActive);
  const isActive = isControlled ? active : internal;

  const cssSize = typeof size === "number" ? `${size}px` : size;

  const handleClick = () => {
    if (disabled) return;
    const next = !isActive;
    if (!isControlled) setInternal(next);
    onToggle?.(next, itemId);
  };

  // If active icon doesn’t exist, CSS will style the default icon when active
  const iconSrc = isActive && activeSrc ? activeSrc : src;

  return (
    <button
      type="button"
      className={`${styles.btn} ${isActive ? styles.active : ""} ${className}`}
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label={isActive ? "Remove from Watchlist" : "Add to Watchlist"}
      title={isActive ? "Remove from Watchlist" : title}
      disabled={disabled}
      style={{ "--wl-size": cssSize }}
      {...rest}
    >
      <img
        className={styles.icon}
        src={iconSrc}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    </button>
  );
}
