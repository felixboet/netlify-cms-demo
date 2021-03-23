import React from "react";
import PropTypes from "prop-types";
import {
  Map,
  Marker,
  Polyline,
  Polygon,
  Popup,
  Circle,
  CircleMarker,
  TileLayer,
} from "react-leaflet";

import Carousel from "./carousel.js";
import Divider from "./divider.js";
import Heading from "./heading.js";
import CustomHtml from "./customHtml.js";
import Image from "./image.js";
import Video from "./video.js";
import LinkGroup from "./linkGroup.js";
import List from "./list.js";
import Paragraph from "./paragraph.js";
import RichText from "./richText.js";

const Components = {
  carousel: Carousel,
  divider: Divider,
  heading: Heading,
  customHtml: CustomHtml,
  image: Image,
  video: Video,
  linkGroup: LinkGroup,
  list: List,
  paragraph: Paragraph,
  richText: RichText,
};

//const MyMarker = (props) => {
//  const initMarker = (ref) => {
//    if (ref) {
//      ref.leafletElement.openPopup();
//    }
//  };
//
//  return <Marker ref={initMarker} {...props} />;
//};

const mapStyles = {
  openStreetMaps: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  voyagerWithLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  voyagerWithoutLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  positronWithLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  positronWithoutLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  darkMatterWithLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  darkMatterWithoutLabels: {
    url:
      "https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  eco: {
    url: "https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  flatBlue: {
    url:
      "https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  midnightCommander: {
    url:
      "https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
  antique: {
    url:
      "https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}.png",
    attribution:
      ' &copy; <a target="_blank" href="https://carto.com/attribution">CARTO</a> &#124; &copy; <a target="_blank" href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  },
};

const latLngBounds = [
  ["59.169", "-11.818"],
  ["48.148", "13.805"],
];
const PureMap = (props) => {
  const mapField = props.block.map ? JSON.parse(props.block.map) : null;
  const position = props.block.map
    ? mapField.coordinates.reverse()
    : ["51.5", "-0.09"];

  const TileLayerURL = props.block.mapStyle
    ? mapStyles[props.block.mapStyle].url
    : mapStyles["openStreetMaps"].url;
  const TileLayerAttribution = props.block.mapStyle
    ? mapStyles[props.block.mapStyle].attribution
    : mapStyles["openStreetMaps"].attribution;

  var inner = (
    <div
      className={
        props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ")
      }
    >
      <Map
        bounds={latLngBounds}
        className={props.block.cssClasses && props.block.cssClasses.join(" ")}
      >
        <TileLayer url={TileLayerURL} attribution={TileLayerAttribution} />
        {props.block.layers &&
          props.block.layers.map((layer) => {
            switch (layer.type) {
              case "marker":
                const MarkerMapField = layer.map ? JSON.parse(layer.map) : null;
                const MarkerPosition = layer.map
                  ? MarkerMapField.coordinates.reverse()
                  : ["51.5", "-0.09"];

                return (
                  <Marker
                    position={MarkerPosition}
                    opacity={layer.opacity ? layer.opacity : "1"}
                  >
                    {layer.blocks && (
                      <Popup>
                        {layer.blocks &&
                          layer.blocks.map((block) => (
                            <React.Fragment key={block.id}>
                              {(function () {
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return React.createElement(
                                    Components[block.type],
                                    {
                                      block: block,
                                      frontmatter: props.frontmatter,
                                      getAsset: props.getAsset,
                                    }
                                  );
                                }
                                // component doesn't exist yet
                                return React.createElement(
                                  () => (
                                    <div>
                                      Layout: component "{block.type}" does not
                                      exist.
                                    </div>
                                  ),
                                  { key: "0" }
                                );
                              })()}
                            </React.Fragment>
                          ))}
                      </Popup>
                    )}
                    ;
                  </Marker>
                );
              case "circleMarker":
                const circleMarkerMapField = layer.map
                  ? JSON.parse(layer.map)
                  : null;
                const CircleMarkerPosition = layer.map
                  ? circleMarkerMapField.coordinates.reverse()
                  : ["51.5", "-0.09"];

                return (
                  <CircleMarker
                    center={CircleMarkerPosition}
                    radius={
                      layer.circleMarkerRadius ? layer.circleMarkerRadius : "10"
                    }
                    color={layer.markerColor ? layer.color : "skyblue"}
                    fillColor={
                      layer.markerFillColor ? layer.fillColor : "white"
                    }
                    fillOpacity={
                      layer.markerFillOpacity ? layer.fillOpacity : "0.5"
                    }
                  >
                    {layer.blocks && (
                      <Popup>
                        {layer.blocks &&
                          layer.blocks.map((block) => (
                            <React.Fragment key={block.id}>
                              {(function () {
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return React.createElement(
                                    Components[block.type],
                                    {
                                      block: block,
                                      frontmatter: props.frontmatter,
                                      getAsset: props.getAsset,
                                    }
                                  );
                                }
                                // component doesn't exist yet
                                return React.createElement(
                                  () => (
                                    <div>
                                      Layout: component "{block.type}" does not
                                      exist.
                                    </div>
                                  ),
                                  { key: "0" }
                                );
                              })()}
                            </React.Fragment>
                          ))}
                      </Popup>
                    )}
                    ;
                  </CircleMarker>
                );
              case "circle":
                const circleMapField = layer.map ? JSON.parse(layer.map) : null;
                const CirclePosition = layer.map
                  ? circleMapField.coordinates.reverse()
                  : ["51.5", "-0.09"];

                return (
                  <Circle
                    center={CirclePosition}
                    radius={layer.circleRadius ? layer.circleRadius : "100"}
                    color={layer.color ? layer.color : "skyblue"}
                    fillColor={layer.fillColor ? layer.fillColor : "white"}
                  >
                    {layer.blocks && (
                      <Popup>
                        {layer.blocks &&
                          layer.blocks.map((block) => (
                            <React.Fragment key={block.id}>
                              {(function () {
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return React.createElement(
                                    Components[block.type],
                                    {
                                      block: block,
                                      frontmatter: props.frontmatter,
                                      getAsset: props.getAsset,
                                    }
                                  );
                                }
                                // component doesn't exist yet
                                return React.createElement(
                                  () => (
                                    <div>
                                      Layout: component "{block.type}" does not
                                      exist.
                                    </div>
                                  ),
                                  { key: "0" }
                                );
                              })()}
                            </React.Fragment>
                          ))}
                      </Popup>
                    )}
                    ;
                  </Circle>
                );

              case "line":
                const lineMapField = layer.map ? JSON.parse(layer.map) : null;
                const linePositions = layer.map
                  ? lineMapField.coordinates
                  : [
                      ["51.5", "-0.09"],
                      ["51.2", "-0.02"],
                    ];
                const lineLatLongPositions = [];

                for (var i = 0; i < linePositions.length; i++) {
                  var oldCoordinate = linePositions[i];
                  var newCoordinate = [oldCoordinate[1], oldCoordinate[0]];

                  lineLatLongPositions.push(newCoordinate);
                }

                return (
                  <Polyline
                    positions={lineLatLongPositions}
                    color={layer.lineColor ? layer.lineColor : "skyblue"}
                  >
                    {layer.blocks && (
                      <Popup>
                        {layer.blocks &&
                          layer.blocks.map((block) => (
                            <React.Fragment key={block.id}>
                              {(function () {
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return React.createElement(
                                    Components[block.type],
                                    {
                                      block: block,
                                      frontmatter: props.frontmatter,
                                      getAsset: props.getAsset,
                                    }
                                  );
                                }
                                // component doesn't exist yet
                                return React.createElement(
                                  () => (
                                    <div>
                                      Layout: component "{block.type}" does not
                                      exist.
                                    </div>
                                  ),
                                  { key: "0" }
                                );
                              })()}
                            </React.Fragment>
                          ))}
                      </Popup>
                    )}
                    ;
                  </Polyline>
                );
              case "polygon":
                const polygonMapField = layer.map
                  ? JSON.parse(layer.map)
                  : null;
                const polygonPositions = layer.map
                  ? polygonMapField.coordinates[0]
                  : [
                      ["-9.2642212", "42.0982224"],
                      ["-9.5114136", "-20.5196442"],
                      ["77.636261", "-21.2714592"],
                      ["81.3825989", "42.6016199"],
                      ["-9.2642212", "42.0982224"],
                    ];

                const polygonLatLongPositions = [];
                for (var i = 0; i < polygonPositions.length; i++) {
                  var oldCoordinate = polygonPositions[i];
                  var newCoordinate = [oldCoordinate[1], oldCoordinate[0]];

                  polygonLatLongPositions.push(newCoordinate);
                }

                return (
                  <Polygon
                    positions={polygonLatLongPositions}
                    color={layer.color ? layer.color : "skyblue"}
                    fillColor={layer.fillColor ? layer.fillColor : "white"}
                    fillOpacity={layer.fillOpacity ? layer.fillOpacity : "0.5"}
                  >
                    {layer.blocks && (
                      <Popup>
                        {layer.blocks &&
                          layer.blocks.map((block) => (
                            <React.Fragment key={block.id}>
                              {(function () {
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return React.createElement(
                                    Components[block.type],
                                    {
                                      block: block,
                                      frontmatter: props.frontmatter,
                                      getAsset: props.getAsset,
                                    }
                                  );
                                }
                                // component doesn't exist yet
                                return React.createElement(
                                  () => (
                                    <div>
                                      Layout: component "{block.type}" does not
                                      exist.
                                    </div>
                                  ),
                                  { key: "0" }
                                );
                              })()}
                            </React.Fragment>
                          ))}
                      </Popup>
                    )}
                    ;
                  </Polygon>
                );
              default:
                return null;
            }
          })}
      </Map>
    </div>
  );

  return inner;
};

export default PureMap;

PureMap.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};

PureMap.defaultProps = {
  block: {
    id: null,
    cssClasses: null,
    zoom: 4,
    map: "{ type: 'Point', coordinates: [10, 60] }",
    layers: {
      map: "{ type: 'LineString', coordinates: [[10, 60],[20, 80]] }",
    },
  },
};
