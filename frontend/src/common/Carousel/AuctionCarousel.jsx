import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AuctionCarousel.module.css";
import AuctionCard from "../AuctionCard/AuctionCard.jsx";
import cardCss from "../AuctionCard/AuctionCard.module.css";
import { dummyItems } from "../data/dummyItems.js";

//Routes and Context
import { useNavigate } from "react-router-dom";
import { useSelectedItem } from "../../context/SelectedItemContext";

function SkeletonCard() {
  return (
    <article className={`${cardCss.card} ${cardCss.skeleton}`}>
      <div className={`${cardCss.image} ${cardCss.shimmer}`} />
      <div className={`${cardCss.skelLine} ${cardCss.mt12}`} />
      <div className={`${cardCss.skelLine} ${cardCss.w70}`} />
      <div className={cardCss.skelGrid}>
        <div className={cardCss.skelLine} />
        <div className={cardCss.skelLine} />
      </div>
    </article>
  );
}

/**
 * Props:
 *  - useDummy: force using local dummy data (default auto: use if no VITE_API_URL)
 */
export default function AuctionCarousel({
  title = "Cool auctions",
  page = 1,
  limit = 12,
  useDummy,
}) {

  // existing state + hooks...
  const { setSelectedItem } = useSelectedItem();   
  const navigate = useNavigate();                  


  const apiBase = import.meta.env.VITE_API_URL || "";
  const shouldUseDummy = useDummy ?? !apiBase; // if no API URL, fall back to dummy
  const [data, setData] = useState({ results: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const scrollerRef = useRef(null);

  const url = useMemo(() => {
    const u = new URL("/items", apiBase || window.location.origin);
    u.searchParams.set("page", page);
    u.searchParams.set("limit", limit);
    return u.toString();
  }, [apiBase, page, limit]);

  useEffect(() => {
    let alive = true;

    if (shouldUseDummy) {
      setLoading(true);
      const sliced = dummyItems.slice(0, limit);
      if (alive) {
        setData({ results: sliced, total: dummyItems.length, page: 1, limit });
        setErr(null);
        setLoading(false);
      }
      return () => {
        alive = false;
      };
    }

    setLoading(true);
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        if (alive) {
          console.log("API response:", json);
          setData(json);
          setErr(null);
        }
      })
      .catch((e) => alive && setErr(e.message || "Failed to load"))
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [url, limit, shouldUseDummy]);

  const scrollBy = (delta) =>
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.h2}>{title}</h2>
        <div className={styles.navGroup}>
          <button
            className={styles.navBtn}
            onClick={() => scrollBy(-Math.round(window.innerWidth * 0.7))}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={() => scrollBy(Math.round(window.innerWidth * 0.7))}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {err && <div className={styles.error}>Couldn’t load items: {err}</div>}

      {/* <div ref={scrollerRef} className={styles.scroller}>
        {(loading ? Array.from({ length: 4 }) : data.results).map((item, i) => (
          <div key={item?._id || i} className={styles.cardWrap}>
            {loading ? <SkeletonCard /> : <AuctionCard item={item} />}
          </div>
        ))}
      </div> */}
      
      <div ref={scrollerRef} className={styles.scroller}>
        {(loading ? Array.from({ length: 4 }) : data.results).map((item, i) => (
          <div
            key={item?._id || i}
            className={styles.cardWrap}
            onClick={() => {
              setSelectedItem(item);
              navigate("/listing");
            }}
          >
            {loading ? <SkeletonCard /> : <AuctionCard item={item} />}
          </div>
        ))}
      </div>

    </section>
  );
}
