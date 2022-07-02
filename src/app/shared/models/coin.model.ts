export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_data: {
    current_price:  {
      usd: number;
    };
    price_change_24h: number;
    total_volume: {
      usd: number;
    };
  }
  description: {
    en: string;
  };
  coingecko_rank: string;
  coingecko_score: string;
  links: {
    homepage: [string];
    blockchain: [string];
  };
}
