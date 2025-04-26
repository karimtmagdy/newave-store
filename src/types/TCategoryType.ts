import { ApiResponseWithKey } from "./global.types";

export type TCategoryType = {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};
export type CategoryApiResponse = ApiResponseWithKey<
  "categories",
  TCategoryType[]
>;
// isDeleted : boolean,
