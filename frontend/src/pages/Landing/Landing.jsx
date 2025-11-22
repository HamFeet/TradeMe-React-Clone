import React from "react";
import AuctionCarousel from "../../common/Carousel/AuctionCarousel";
import LandingSearch from "../../common/LandingSearch/LandingSearch.jsx";
import CompareButton from "../../common/CompareButton/CompareButton.jsx";
import SearchHeader from "../../common/SearchHeader/SearchHeader.jsx";

function Landing() {
  const handleCompareClick = () => {
    console.log("Open compare (TODO)");
  };

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

      <div
        className="container"
        style={{ gridColumn: "1 / -1", marginTop: 16 }}
      >
        <SearchHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "All Categories" },
          ]}
          title="All Categories"
          onSearch={(q) => console.log("search:", q)}
          onSaveSearch={() => console.log("save search")}
          onClearAll={() => console.log("clear all")}
          filters={[
            {
              key: "category",
              label: "Category",
              value: "All",
              onClick: () => {},
              onClear: () => {},
            },
            { key: "location", label: "All Locations", onClick: () => {} },
            {
              key: "condition",
              label: "New & Used",
              value: "New & Used",
              onClick: () => {},
              onClear: () => {},
            },
            { key: "shipping", label: "Shipping: All", onClick: () => {} },
          ]}
          categoryLinks={[
            { label: "Home & living", count: 8067, href: "#" },
            { label: "Mobile phones", count: 447, href: "#" },
            { label: "Health & beauty", count: 312, href: "#" },
            { label: "Business, farming & industry", count: 5522, href: "#" },
            { label: "Toys & models", count: 367, href: "#" },
            { label: "Antiques & collectables", count: 245, href: "#" },
            { label: "Computers", count: 4721, href: "#" },
            { label: "Electronics & photography", count: 332, href: "#" },
            { label: "Building & renovation", count: 193, href: "#" },
          ]}
          onShowMoreCategories={() => console.log("show more categories")}
        />
      </div>

      <div>
        <AuctionCarousel></AuctionCarousel>
      </div>
      <div style={{ padding: 16 }}>
        <CompareButton count={2} onClick={handleCompareClick} />
        {/* sizes */}
        <div style={{ height: 12 }} />
        <CompareButton size="sm" count={0} onClick={handleCompareClick}>
          Compare
        </CompareButton>
      </div>
    </div>
  );
}

export default Landing;
