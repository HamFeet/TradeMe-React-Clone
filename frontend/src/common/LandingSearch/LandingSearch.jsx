import React, { useState } from "react";
import styles from "./LandingSearch.module.css";
import { IoSearchOutline } from "react-icons/io5";

/**
 * LandingSearch (Search hero)
 *
 * Props:
 *  - title?: string                          // Headline text
 *  - placeholder?: string                    // Input placeholder
 *  - defaultQuery?: string                   // Starting value in the input
 *  - onSearch?: (query: string) => void      // Called when user clicks "Search" or presses Enter
 *  - categories?: Array<{ label: string, value: string, href?: string }>
 *  - onCategorySelect?: (value: string) => void // when a category pill is clicked
 *  - gradient?: string                       // custom CSS gradient for hero
 *  - className?: string
 */
export default function LandingSearch({
  title = "KIA ORA! READY TO FIND YOUR NEW?",
  placeholder = "Search all of Trade Me",
  defaultQuery = "",
  onSearch,
  categories = [
    { label: "Marketplace", value: "marketplace" },
    { label: "Jobs", value: "jobs" },
    { label: "Motors", value: "motors" },
    { label: "Property", value: "property" },
    { label: "Services", value: "services" },
  ],
  onCategorySelect,
  gradient = "linear-gradient(90deg, #6068F5 0%, #7C6EDC 50%, #7AB3F1 100%)",
  className = "",
}) {
  const [q, setQ] = useState(defaultQuery);

  const submit = (e) => {
    e?.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{ "--hero-gradient": gradient }}
    >
      <div className={styles.content}>
        <h1 className={`${styles.title} display-lg`}>{title}</h1>

        <form
          className={styles.searchRow}
          onSubmit={submit}
          role="search"
          aria-label="Site search"
        >
          <div className={styles.inputWrap}>
            <IoSearchOutline className={styles.icon} aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className={styles.input}
              type="search"
              placeholder={placeholder}
              aria-label="Search query"
            />
          </div>
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>

        {categories?.length > 0 && (
          <nav className={styles.tabs} aria-label="Explore categories">
            <ul className={styles.tabList}>
              {categories.map((c) => (
                <li key={c.value}>
                  {c.href ? (
                    <a
                      className={`${styles.tab} ${styles[c.value] || ""}`}
                      href={c.href}
                    >
                      {c.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`${styles.tab} ${styles[c.value] || ""}`}
                      onClick={() => onCategorySelect?.(c.value)}
                    >
                      {c.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
