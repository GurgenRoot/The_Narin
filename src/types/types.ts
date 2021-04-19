export interface ProductsTypes {
  id: number,
  name: string,
  img: Array<string>,
  url: string,
  smallImages: Array<string>,
  middleImages: Array<string>,
  largeImages: Array<string>
}

export interface CollectionsType {
  url: string,
  sliderTitle: string,
  seasonName: string,
  sliderDescription: string,
  id: number,
  text: string,
  sliderItems: Array<ProductsTypes>
}
