export type TReview = {
  id: number;
  text: string;
}

export type TGoods = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}

export type TPage = {
  page: number;
	amount: number;
	total: number;
	products: TGoods[];
}
