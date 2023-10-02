export type Product = {
  name: string,
  isShowInOnlineStore: boolean,
  isShowInPointOfSale: boolean,
  productName: string,
  ribbon?: string,
  description: string,
  categories: string[] | []
}