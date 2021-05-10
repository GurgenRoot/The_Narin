export default [
  { id: 1, description: 'Product weight', descriptionValue: '1kg' },
  { id: 2, description: 'Shipping total weight', descriptionValue: '1.5kg' },
  { id: 3, description: 'Product dimension', descriptionValue: '52 x 14 x 52cm' },
  { id: 4, description: 'Materials', descriptionValue: 'Leather' },
  { id: 5, description: 'Min. stripe length', descriptionValue: '20cm' },
  { id: 6, description: 'Max. stripe length', descriptionValue: '30cm' },
];

export interface TProductInformation {
  id: number,
  description: string,
  descriptionValue: string
}
