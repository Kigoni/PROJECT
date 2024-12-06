import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const INITIAL_TOOLTIP_STATE = { content: '', x: 0, y: 0, visible: false };

const Worldmap: React.FC = () => {
  const [tooltip, setTooltip] = useState(INITIAL_TOOLTIP_STATE);

  return (
    <div className="relative min-h-screen flex flex-col items-center" style={{ backgroundColor: '#ccd6e8' }}>
      {/* Header */}
      <header className="mt-10 mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          <span className="bg-gradient-to-r from-[#2ECC71] via-[#FFD700] to-[#E67E22] text-transparent bg-clip-text">
            Browse African Countries' Journals
          </span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Click on any country to explore its rich academic and research contributions.
        </p>
      </header>

      {/* Map Container */}
      <div className="relative w-3/5 h-3/5 mx-auto  rounded-lg overflow-hidden ">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 324, center: [20, 5] }}
          className="w-full h-full"
        >
          <Geographies geography="https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: '#ffd372', stroke: '#888', strokeWidth: 0.75 },
                    hover: { fill: '#ffb347', stroke: '#555', strokeWidth: 0.9 },
                    pressed: { fill: '#ffb347', stroke: '#555', strokeWidth: 0.9 },
                  }}
                  onMouseMove={(e) =>
                    setTooltip({
                      content: geo.properties.name,
                      x: e.clientX,
                      y: e.clientY,
                      visible: true,
                    })
                  }
                  onMouseLeave={() =>
                    setTooltip((prev) => ({ ...prev, visible: false }))
                  }
                  onClick={() =>
                    (window.location.href = `https://afrijour.web.app/?query=${geo.properties.name
                      .replace(/\s+/g, '')
                      .toLowerCase()}`)
                  }
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {tooltip.visible && (
          <div
            className="absolute bg-gray-50 px-3 py-2 rounded-lg shadow-lg text-sm pointer-events-none transform -translate-x-1/2 -translate-y-full z-10 border border-gray-200"
            style={{ left: tooltip.x, top: tooltip.y - 10 }}
          >
            <span className="font-medium text-gray-800">{tooltip.content}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Worldmap;
