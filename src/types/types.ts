export type ProductsItemType = {
  id: number;
  name: string;
  img: string[];
  url: string;
  smallImages: string[]
  middleImages: string[];
  largeImages: string[];
}

export type ProductsTypes = {
  [key: number]: ProductsItemType;
}

export interface CollectionsType {
  url: string,
  sliderTitle: string,
  seasonName: string,
  sliderDescription: string,
  id: number,
  text: string,
  sliderItems: ProductsItemType[]
}
