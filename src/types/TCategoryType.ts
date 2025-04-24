export type TCategoryType = {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  // subcategories: TCategoryType[]
  // isDeleted : boolean,
  // parentCategory : string,
};
