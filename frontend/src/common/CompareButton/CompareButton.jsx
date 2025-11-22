import React from "react";
import styles from "./CompareButton.module.css";

/**
 * CompareButton
 * Props:
 *  - count?: number           // items in compare list (badge hidden when 0)
 *  - onClick?: () => void     // TODO: wire to your compare drawer/page
 *  - disabled?: boolean
 *  - className?: string
 *  - size?: "sm" | "md"       // visual size (default md)
 *  - children?: ReactNode     // defaults to "Compare"
 */
export default function CompareButton({
  count = 0,
  onClick,
  disabled = false,
  className = "",
  size = "md",
  children = "Compare",
  ...rest
}) {
  const label = count > 0 ? `${children} (${count})` : children;

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-describedby={count > 0 ? "compare-count" : undefined}
      {...rest}
    >
      {count > 0 && (
        <span id="compare-count" className={styles.badge} aria-hidden="true">
          {count}
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
}
