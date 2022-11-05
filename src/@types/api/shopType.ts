export interface Shop {
  access: string;
  address: string;
  band: string;
  barrier_free: string;
  budget: Budget;
  budget_memo: string;
  capacity: number;
  card: string;
  catch: string;
  charter: string;
  child: string;
  close: string;
  coupon_urls: CouponUrls;
  course: string;
  english: string;
  free_drink: string;
  free_food: string;
  genre: Genre;
  horigotatsu: string;
  id: string;
  karaoke: string;
  ktai_coupon: number;
  large_area: Area;
  large_service_area: Area;
  lat: number;
  lng: number;
  logo_image: string;
  lunch: string;
  middle_area: Area;
  midnight: string;
  mobile_access: string;
  name: string;
  name_kana: string;
  non_smoking: string;
  open: string;
  other_memo: string;
  parking: string;
  party_capacity: number;
  pet: string;
  photo: Photo;
  private_room: string;
  service_area: Area;
  shop_detail_memo: string;
  show: string;
  small_area: Area;
  station_name: string;
  tatami: string;
  tv: string;
  urls: Urls;
  wedding: string;
  wifi: string;
}

export interface Budget {
  average: string;
  code: string;
  name: string;
}

export interface CouponUrls {
  pc: string;
  sp: string;
}

export interface Genre {
  catch: string;
  code: string;
  name: string;
}

export interface Area {
  code: string;
  name: string;
}

export interface Photo {
  mobile: Mobile;
  pc: PC;
}

export interface Mobile {
  l: string;
  s: string;
}

export interface PC {
  l: string;
  m: string;
  s: string;
}

export interface Urls {
  pc: string;
}
