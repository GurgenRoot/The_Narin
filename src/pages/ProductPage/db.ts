export interface PackagingBoxesType {
  id: number,
  title: string,
  description: string,
  videoSrc: string
}

const packagingBoxes: Array<PackagingBoxesType> = [
  {
    id: 1,
    title: 'Standard',
    description: 'Elegant, high-quality, and eco-friendly box with durable magnets on the lid that provide a tight and safe seal, securing your bag inside.',
    videoSrc: 'https://www.youtube.com/embed/08EgUyjSy7E'
  },
  {
    id: 2,
    title: 'Wooden Box',
    description: 'Crafted from Armenian wood this box is for the ones who want to make great impression.',
    videoSrc: 'https://www.youtube.com/embed/TkTAb5yOHLs'
  },
  {
    id: 3,
    title: 'Wooden Box - Special Edition',
    description: 'Any name or message of your choice will be engraved on the front of the box.',
    videoSrc: 'https://www.youtube.com/embed/jAh73Cnryjc'
  }
];

export default packagingBoxes;
