import React, { useState } from "react";
import styles from "./SearchHeader.module.css";
import { IoSearchOutline, IoClose } from "react-icons/io5";

/**
 * Filter pill: { key, label, value?, onClick?, onClear? }
 * Category link: { label, count?, href?, onClick? }
 * Breadcrumb: { label, href? }
 */
export default function SearchHeader({
  breadcrumbs = [{ label: "Home", href: "/" }, { label: "All Categories" }],
  title = "All Categories",

  defaultQuery = "",
  onSearch,
  filters = [],
  onClearAll,
  onSaveSearch,
  placeholder = "Search all Categories",
  categoryLinks = [],
  onShowMoreCategories,
  className = "",
}) {
  const [q, setQ] = useState(defaultQuery);

  const submit = (e) => {
    e?.preventDefault();
    onSearch?.(q.trim());
  };
  const clearQuery = () => setQ("");

  return (
    <section className={`${styles.block} ${className}`}>
      {/* White card */}
      <div className={styles.wrap}>
        {/* Breadcrumbs + Title now inside the card */}
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((b, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={`${b.label}-${i}`}>
                  {b.href && !isLast ? (
                    <a href={b.href}>{b.label}</a>
                  ) : (
                    <span className={styles.crumbCurrent}>{b.label}</span>
                  )}
                  {!isLast && <span className={styles.sep}>/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        <h2 className={styles.pageTitle}>{title}</h2>

        {/* Row 1: search + actions */}
        <form
          className={styles.searchRow}
          onSubmit={submit}
          role="search"
          aria-label="Filter search"
        >
          <div className={styles.inputWrap}>
            <IoSearchOutline className={styles.icon} aria-hidden="true" />
            <input
              className={styles.input}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={placeholder}
              aria-label="Search query"
            />
            {q && (
              <button
                type="button"
                className={styles.clearBtn}
                aria-label="Clear search"
                onClick={clearQuery}
              >
                <IoClose />
              </button>
            )}
          </div>

          <button type="submit" className={styles.searchBtn}>
            Search
          </button>

          <button
            type="button"
            className={styles.saveBtn}
            onClick={() => onSaveSearch?.(q, filters)}
            aria-label="Save this search"
            title="Save this search"
          >
            <span className={styles.saveIcon} aria-hidden="true">
              ♡
            </span>
            Save this search
          </button>
        </form>

        {/* Row 2: filter pills */}
        <div className={styles.pillsRow}>
          <FilterPill
            kind="primary"
            label="Refine"
            onClick={() => console.log("open refine (TODO)")}
          />

          {filters.map(({ key, label, value, onClick, onClear }) => (
            <FilterPill
              key={key}
              label={label}
              value={value}
              onClick={() => onClick?.(key)}
              onClear={() => onClear?.(key)}
            />
          ))}

          <div className={styles.flexSpacer} />
          {onClearAll && (
            <button
              type="button"
              className={styles.clearAll}
              onClick={onClearAll}
            >
              Clear all
            </button>
          )}
        </div>

        {/* Row 3: category links grid (optional) */}
        {categoryLinks.length > 0 && (
          <div className={styles.categoriesWrap}>
            <ul className={styles.categoriesGrid}>
              {categoryLinks.map((c, i) => (
                <li key={`${c.label}-${i}`}>
                  {c.href ? (
                    <a className={styles.catLink} href={c.href}>
                      {c.label}{" "}
                      {typeof c.count === "number" && (
                        <span className={styles.catCount}>
                          ({c.count.toLocaleString()})
                        </span>
                      )}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`${styles.catLink} ${styles.catLinkBtn}`}
                      onClick={c.onClick}
                    >
                      {c.label}{" "}
                      {typeof c.count === "number" && (
                        <span className={styles.catCount}>
                          ({c.count.toLocaleString()})
                        </span>
                      )}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={styles.showMore}
              onClick={
                onShowMoreCategories ||
                (() => console.log("show more categories (TODO)"))
              }
            >
              Show more categories <span className={styles.plus}>＋</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------ Sub-components ------------------------ */

function FilterPill({ label, value, onClick, onClear, kind = "default" }) {
  const hasValue = !!value;

  return (
    <div
      className={`${styles.pill} ${
        kind === "primary" ? styles.pillPrimary : ""
      } ${hasValue ? styles.hasValue : ""}`}
    >
      <button type="button" className={styles.pillBtn} onClick={onClick}>
        <span>{label}</span>
        {hasValue && <span className={styles.valueBadge}>{value}</span>}
      </button>

      {hasValue && (
        <button
          type="button"
          className={styles.pillClear}
          aria-label={`Clear ${label}`}
          title={`Clear ${label}`}
          onClick={onClear}
        >
          <IoClose />
        </button>
      )}
    </div>
  );
}
