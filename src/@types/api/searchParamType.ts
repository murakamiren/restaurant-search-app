import SearchFormValueType from "../form/searchFormValueType";

type SearchParamType = {
  lat: number;
  lng: number;
} & SearchFormValueType;

export default SearchParamType;
