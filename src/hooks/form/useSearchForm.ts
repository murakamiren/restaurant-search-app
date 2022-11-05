import { useToast } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { SubmitHandler } from "react-hook-form";

import SearchParamType from "@/@types/api/searchParamType";
import SearchFormValueType from "@/@types/form/searchFormValueType";
import { searchParamAtom } from "@/store/searchParamAtom";

import { useGeolocation } from "../useGeolocation";

const useSearchForm = () => {
  const setSearchParam = useSetAtom(searchParamAtom);
  const toast = useToast();
  const { currentPos, errorMessage, getPos } = useGeolocation();
  const onSubmit: SubmitHandler<SearchFormValueType> = (FormValue) => {
    getPos();

    if (!currentPos && errorMessage)
      return toast({
        title: "位置情報が取得できません",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    console.log(FormValue);

    if (currentPos) {
      const param: SearchParamType = {
        lat: currentPos.coords.latitude,
        lng: currentPos.coords.longitude,
        range: FormValue.range,
        name_any: FormValue.name_any,
        keyword: FormValue.keyword,
      };

      setSearchParam(() => param);
    }
  };

  return onSubmit;
};

export default useSearchForm;
