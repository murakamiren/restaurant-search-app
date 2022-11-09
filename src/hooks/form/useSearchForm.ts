import { useToast } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { SubmitHandler } from "react-hook-form";

import SearchParamType from "@/@types/api/searchParamType";
import SearchFormValueType from "@/@types/form/searchFormValueType";
import { searchParamAtom } from "@/store/searchParamAtom";
import { startAtom } from "@/store/startAtom";

import { useGeolocation } from "../useGeolocation";

const useSearchForm = () => {
  const setStart = useSetAtom(startAtom);
  const setSearchParam = useSetAtom(searchParamAtom);
  const toast = useToast();
  const { currentPos, errorMessage } = useGeolocation();

  const onSubmit: SubmitHandler<SearchFormValueType> = async (FormValue) => {
    if (!currentPos && errorMessage)
      return toast({
        title: "位置情報が取得できません",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

    setStart(() => 1);

    console.log(currentPos);

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
