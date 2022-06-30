export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  price: string;
  decription: string;
  coingecko_rank: string;
  coingecko_score: string;
}
