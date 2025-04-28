export const CITIES = [
  {
    'id': 1,
    'text': '<h1>something</h1><p>jiofewjf wefofwejoifewoi</p>'
  },
  {
    'id': 1,
    'text': '<h1>something</h1><p>jiofewjf wefofwejoifewoi</p>'
  },
  {
    'id': 1,
    'text': '<h1>something</h1><p>jiofewjf wefofwejoifewoi</p>'
  }
] as const;

export enum AppRoute {
  Root = '/',
  Good = '/app/:id',
  Order = '/order',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoutes {
  Response = '/reviews',
  Goods = '/products?page=1&page_size=20',
}

export enum FavoritesStatus {
  Added = 1,
  Removed = 0
}

export const calcTotalPrice = (items) => items.reduce((acc, item) => (acc += item.price), 0);
