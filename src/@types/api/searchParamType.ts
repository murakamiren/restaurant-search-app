import SearchFormValueType from "../form/searchFormValueType";

type SearchParamType = {
  lat: number;
  lng: number;
  start?: number;
  order?: number;
} & SearchFormValueType;

export default SearchParamType;
