let ageQuery = {
  query: [
    {
      code: "Region",
      selection: {
        filter: "vs:RegionLän07",
        values: ["01", "14"]
      }
    },
    {
      code: "Alder",
      selection: {
        filter: "agg:Ålder10år",
        values: ["15-24"]
      }
    },
    {
      code: "Kon",
      selection: {
        filter: "item",
        values: ["1"]
      }
    },
    {
      code: "Tid",
      selection: {
        filter: "item",
        values: ["2017"]
      }
    }
  ],
  response: {
    format: "json"
  }
};
ageQuery = JSON.stringify(ageQuery);
const ageUrl =
  "http://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy";
