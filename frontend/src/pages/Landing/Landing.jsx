import React from "react";
import AuctionCarousel from "../../common/Carousel/AuctionCarousel";
import LandingSearch from "../../common/LandingSearch/LandingSearch.jsx";

function Landing() {
  return (
    <div>
      <div className="container" style={{ marginTop: 16 }}>
        <LandingSearch
          onSearch={(q) => console.log("search:", q)}
          onCategorySelect={(val) => console.log("category:", val)}
          categories={[
            {
              label: "Marketplace",
              value: "marketplace",
              href: "/marketplace",
            },
            { label: "Jobs", value: "jobs", href: "/jobs" },
            { label: "Motors", value: "motors", href: "/motors" },
            { label: "Property", value: "property", href: "/property" },
            { label: "Services", value: "services", href: "/services" },
          ]}
        />
      </div>

      <div>
        <AuctionCarousel></AuctionCarousel>
      </div>
    </div>
  );
}

export default Landing;
