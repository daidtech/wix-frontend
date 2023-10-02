export class Product {
  id: number = 0;
  name: string = '';
  isShowInOnlineStore: boolean = false;
  isShowInPointOfSale: boolean = false;
  productName: string = '';
  ribbon?: string;
  description: string = '';
  categories: string[] | [];
}