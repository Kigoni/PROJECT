import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useNavigate } from "react-router-dom";

// Journal data for each African country
type CountryData = {
  id: number;
  country: string;
  journal_count: number;
  top_journal: string;
};

type CountryInfo = {
  countryName: string;
  journalCount: number;
  topJournal: string;
};

const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson";

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<CountryInfo | null>(null);
  const [countryData, setCountryData] = useState<{ [key: string]: CountryData }>({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://aphrc.site/journal_api/api/country/");
        const data = await response.json();
        const countryMap: { [key: string]: CountryData } = {};
        data.forEach((country: CountryData) => {
          countryMap[country.id] = country;
        });
        setCountryData(countryMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setIsLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  const handleMouseEnter = (geo: any) => {
    const country = countryData[geo.properties.cartodb_id];
    if (country) {
      setTooltipContent({
        countryName: country.country,
        journalCount: country.journal_count,
        topJournal: country.top_journal,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const handleCountryClick = (countryName: string) => {
    if (countryName) {
      navigate(`/analytics?country=${encodeURIComponent(countryName)}`);
    }
  };

  if (isLoading) {
    return <div className="text-center text-white">Loading map data...</div>;
  }

  return (
    <div className="relative w-full h-auto">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 280,
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Sphere
          id="sphere"
          fill="#FFFFFF"
          stroke="#E4E5E6"
          strokeWidth={0.5}
        />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const country = countryData[geo.properties.cartodb_id];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() =>
                    handleCountryClick(country?.country || "Unknown Country")
                  }
                  style={{
                    default: {
                      fill: "#ffd372",
                      stroke: "#888",
                      strokeWidth: 0.75,
                    },
                    hover: {
                      fill: "#ffb347",
                      stroke: "#555",
                      strokeWidth: 0.9,
                    },
                    pressed: {
                      fill: "#ff9c33",
                      stroke: "#333",
                      strokeWidth: 1,
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltipContent && (
        <Tooltip id="country-tooltip">
          <div className="p-4 rounded shadow-xl bg-gray-800 text-white">
            <h3 className="font-bold">{tooltipContent.countryName}</h3>
            <p>Number of Journals: {tooltipContent.journalCount}</p>
            <p>Top Journal: {tooltipContent.topJournal}</p>
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default WorldMap;
