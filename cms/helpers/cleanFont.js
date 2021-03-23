export default function cleanFont(font) {
  const fontFamilies = {
    "System Font / System Default Sans Serif":
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    "System Font / Monospace":
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    "System Font / Calibri, Candara, Segoe":
      'Calibri,Candara,Segoe,"Segoe UI",Optima,Arial,sans-serif',
    "System Font / Century Gothic, AppleGothic":
      '"Century Gothic",CenturyGothic,AppleGothic,sans-serif',
    "System Font / Gill Sans, Calibri":
      '"Gill Sans","Gill Sans MT",Calibri,sans-serif',
    "System Font / Tahoma, Verdana, Segoe": "Tahoma,Verdana,Segoe,sans-serif",
    "System Font / Trebuchet MS, Lucida Grande":
      '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode",Tahoma,sans-serif',
    "System Font / Verdana, Geneva": "Verdana,Geneva,sans-serif",
    "System Font / Book Antiqua, Palatino":
      '"Book Antiqua",Palatino,"Palatino Linotype","Palatino LT STD",Georgia,serif',
    "System Font / Cambria, Georgia, Times New Roman":
      'Cambria,Georgia,"Times New Roman", Times, serif',
    "System Font / Garamond, Baskerville":
      'Garamond,Baskerville,"Baskerville Old Face","Hoefler Text","Times New Roman",serif',
    "System Font / Georgia, Times": 'Georgia,Times,"Times New Roman",serif',
    "System Font / Goudy Old Style, Garamond, Big Caslon":
      '"Goudy Old Style",Garamond,"Big Caslon","Times New Roman",serif',
    "System Font / Lucida Bright, Georgia": '"Lucida Bright",Georgia,serif',
    "System Font / Palatino, Palatino Linotype, Book Antiqua":
      'Palatino,"Palatino Linotype","Book Antiqua",Georgia,serif',
    "System Font / Baskerville, Hoefler Text, Garamond":
      'Baskerville,"Baskerville Old Face","Hoefler Text",Garamond,"Times New Roman",serif',
    "System Font / Times New Roman":
      'TimesNewRoman,"Times New Roman",Times,Baskerville,Georgia,serif',
    "System Font / Courier New, Lucida Sans Typewriter":
      '"Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",Georgia,monospace',
    "System Font / Lucida Sans Typewriter, monaco, Bitstream Vera Sans Mono":
      '"Lucida Sans Typewriter","Lucida Console",monaco,"Bitstream Vera Sans Mono",monospace',
    "System Font / Copperplate":
      'Copperplate,"Copperplate Gothic Light",fantasy',
  };

  if (typeof fontFamilies[font] !== "undefined") {
    return fontFamilies[font];
  }
  const strippedFont = font.replace("Google Font / ", "");
  return strippedFont;
}
