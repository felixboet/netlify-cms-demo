import React from "react";

export function useAsyncImport(file) {
  const [data, setData] = React.useState({});
  //console.log("data from async:" + data);

  async function getData() {
    const response = await fetch(file);
    const data = await response.json();

    setData(data);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return data;
}

export default function replaceAll(str) {
  const settings = useAsyncImport("/admin/personal.json");

  var mapObj = {
    "{{sitetitle}}": settings.sitetitle,
    "{{tagline}}": settings.tagline,
    "{{siteowner}}": settings.siteowner,
    "{{email}}": settings.email,
    "{{phone}}": settings.phone,
    "{{address1}}": settings.address1,
    "{{address2}}": settings.address2,
    "{{address3}}": settings.address3,
    "{{address4}}": settings.address4,
    "{{website}}": settings.website,
    "{{github}}": settings.github,
    "{{twitter}}": settings.twitter,
    "{{facebook}}": settings.facebook,
    "{{instagram}}": settings.instagram,
    "{{year}}": new Date().getFullYear(),
  };
  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

  return str.replace(re, function (matched) {
    return mapObj[matched];
  });
}
