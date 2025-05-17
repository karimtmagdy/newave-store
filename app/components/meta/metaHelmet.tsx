import type { MetaFunction } from "react-router";

export const siteName = "Newave Store";

type Meta = {
  page: string;
  description: string;
};

export const meta: MetaFunction = ({data }: any) => {
//   const {  } = data;
    const page = data?.title;
    const description = data?.description;
  return [
    { charSet: "utf-8" },
    { title: `Admin ${page} - ${siteName}` },
    { name: "description", content: `Admin ${description} for ${siteName}` },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  ];
};
