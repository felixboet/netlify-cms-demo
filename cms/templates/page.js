import React from "react";
import Commonmark from "react-commonmark";
import { withState } from "recompose";
import arraysEqual from "../helpers/arraysEqual.js";

const Page = ({ entry, getAsset, fieldsMetaData }) => {
  const frontmatter = entry.get("data").toJS();

  const fieldsMetaDataJS = fieldsMetaData.toJS();

  const [linkState, setLink] = React.useState([]);

  var link = document.createElement("link");
  link.href = "/style/css/main.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  const sameLink = arraysEqual(linkState, link);

  if (sameLink === false) {
    setLink((linkState) => link);
    window.frames[1].frameElement.contentWindow.document.head.append(link);
  }

  /////// dynamic stle for page color: /////////
  // get <style id="pageColorStyle">
  const PageColorStyle = window.frames[1].frameElement.contentWindow.document.getElementById(
    "pageColorStyle"
  );

  // get color from frontmatter/settings or set to orange
  const pageColor = (() => {
    if (frontmatter.settings && frontmatter.settings.color) {
      return frontmatter.settings.color;
    } else {
      return "#ef7b0b";
    }
  })();
  // insert style or replace style content
  PageColorStyle
    ? (PageColorStyle.innerHTML = `#content h1,#content h2,#content h3,#content h4,#content h5,#content h6,#footer-top-main { color:${pageColor}; } #footer-bar,#footer-bar-main,#footer-bar-inner { background-color:${pageColor}; }`)
    : window.frames[1].frameElement.contentWindow.document.head.insertAdjacentHTML(
        "beforeend",
        `<style id="pageColorStyle">#content h1,#content h2,#content h3,#content h4,#content h5,#content h6,#footer-top-main { color:${pageColor}; }  #footer-bar,#footer-bar-main,#footer-bar-inner { background-color:${pageColor}; }</style>`
      );

  /////// return /////////

  return (
    <>
      <div id="outer-container">
        <header>
          {" "}
          <a href="/">
            <img
              src="/assets/images/logo_pic_text.png"
              width="354"
              height="83"
              alt="Logo des Institut Lauterbad e.V. Heilpädagogische Einrichtung für Seelenpflege-bedürtige Kinder und Jugendliche"
            />
          </a>
        </header>

        <div id="main-row">
          <div id="navigation">
            <nav>
              <ul>
                <li>&nbsp;</li>

                <li>&nbsp;</li>

                <li>&nbsp;</li>

                <li>&nbsp;</li>

                <li>&nbsp;</li>
                <li>&nbsp;</li>
              </ul>
            </nav>
          </div>
          <main>
            <div id="content-container">
              {frontmatter.settings && frontmatter.settings.imgTop && (
                <>
                  <div id="clipped-image">
                    {" "}
                    <img
                      class="clipped-image"
                      src={getAsset(frontmatter.settings.imgTop)}
                      width="480"
                      height="310"
                    />
                  </div>
                  <svg class="clipped-image-svg" height="50px" width="50px">
                    <defs>
                      <clipPath id="svgPath">
                        <path
                          fill="#FFFFFF"
                          stroke="#000000"
                          stroke-width="1.5794"
                          stroke-miterlimit="10"
                          d="M0,101.95c14.01,78.38,419.75,227.14,468.35,206.01c40.46,-27.102,-31.655,-286.2,-106.65,-304.47c-70.49,-18.11,-359.699,37.16,-361.7,98.46z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              )}

              <div id="content">
                {frontmatter.blocks &&
                  frontmatter.blocks.map((block) => {
                    switch (block.type) {
                      case "richText": {
                        return (
                          <div className="richtext-container">
                            {block.images && block.images.length > 0 && (
                              <div className="images-left">
                                {block.images.map((image) => (
                                  <img src={getAsset(image.image)} />
                                ))}
                              </div>
                            )}
                            <div className="text-right">
                              <Commonmark
                                source={block.markdown && block.markdown}
                              />
                            </div>
                          </div>
                        );
                      }
                      case "headingWithText": {
                        const divStyle = {
                          color: block.color ? block.color : "",
                        };
                        return (
                          <>
                            <h2 style={divStyle}>
                              {block.heading && block.heading}
                            </h2>

                            <Commonmark
                              source={block.markdown ? block.markdown : " "}
                            />
                          </>
                        );
                      }
                      case "text": {
                        return <p>{block.text && block.text}</p>;
                      }
                      case "linkButton": {
                        const buttonStyle = {
                          backgroundColor: block.color
                            ? block.color
                            : "#ef7b0b",
                        };
                        return (
                          <div className="buttonHolder">
                            <a className="blockButton" style={buttonStyle}>
                              {block.text && block.text}
                            </a>
                          </div>
                        );
                      }
                      case "fileButton": {
                        const buttonStyle = {
                          backgroundColor: block.color
                            ? block.color
                            : "#ef7b0b",
                        };
                        return (
                          <div className="buttonHolder">
                            <a className="blockButton" style={buttonStyle}>
                              {block.text && block.text}
                            </a>
                          </div>
                        );
                      }
                      case "customHtml": {
                        return (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: block.code && block.code,
                            }}
                          />
                        );
                      }

                      case "infobox": {
                        const divStyle = {
                          backgroundColor: block.color ? block.color : "",
                          color: "white",
                          padding: "15px 15px 5px",
                          marginBottom: "15px",
                        };
                        return (
                          <div className="infobox" style={divStyle}>
                            <Commonmark
                              source={block.markdown && block.markdown}
                            />
                          </div>
                        );
                      }
                    }
                  })}
                  

   
  
 {frontmatter.layout && frontmatter.layout == "jobs" && (
                  <div style={{background:"yellow",padding:"30px 30px 15px",marginBottom:"15px"}}><p>Hier werden die Stellenangebote angezeigt. Sie können in der Rubrik <a href="/admin/#/collections/jobs">Stellenangebote</a> bearbeitet werden</p>
                  </div>
                )}


  
              </div>
            </div>

            <div id="pic_under">
              <div className="pic">
                {frontmatter.settings && frontmatter.settings.imgBottom1 && (
                  <img src={getAsset(frontmatter.settings.imgBottom1)} alt="" />
                )}
              </div>
              <div className="pic">
                {frontmatter.settings && frontmatter.settings.imgBottom2 && (
                  <img src={getAsset(frontmatter.settings.imgBottom2)} alt="" />
                )}
              </div>
              <div className="pic">
                {frontmatter.settings && frontmatter.settings.imgBottom3 && (
                  <img src={getAsset(frontmatter.settings.imgBottom3)} alt="" />
                )}
              </div>
            </div>
          </main>
        </div>

        <footer>
          <div id="footer-top">
            <div id="footer-top-inner">
              <div id="footer-top-menu"></div>
              <div id="footer-top-main">
                <span>Leben</span> und <span>Lernen</span> in{" "}
                <span>Kassel</span>
              </div>
            </div>
          </div>
          <div id="footer-bar">
            <div id="footer-bar-inner">
              <div id="footer-bar-menu">
                {" "}
                <nav>
                  <a class="divided footer-text-element" href="/">
                    Home
                  </a>
                  <a class="footer-text-element" href="19.html">
                    Impressum/Datenschutz
                  </a>
                </nav>
              </div>
              <div id="footer-bar-main">
                <address>
                  <span className="divided footer-text-element">
                    Institut Lauterbad
                  </span>
                  <span className="divided footer-text-element">
                    Ehlener Straße 27
                  </span>
                  <span className="divided footer-text-element">
                    34131 Kassel
                  </span>
                  <span className="footer-text-element">
                    Telefon: 0561 - 93 89 60
                  </span>
                  <span className="facebook">
                    <a
                      href="https://www.facebook.com/Institut-Lauterbad-eV-210416338994674"
                      target="_blank"
                    >
                      <img
                        src="/assets/images/facebook.png"
                        width="23"
                        height="23"
                        alt="Zur Facebook-Seite vom Institut Lauterbad e. V."
                      />
                    </a>
                  </span>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
