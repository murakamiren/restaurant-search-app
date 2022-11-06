import SearchFormValueType from "../form/searchFormValueType";

type SearchParamType = {
  lat: number;
  lng: number;
  start?: number;
} & SearchFormValueType;

export default SearchParamType;
