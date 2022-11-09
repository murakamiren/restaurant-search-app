import { Box, Button, Flex } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { FC, memo } from "react";
import { useForm } from "react-hook-form";

import SearchFormValueType from "@/@types/form/searchFormValueType";
import useSearchForm from "@/hooks/component/form/useSearchForm";
import useShopDataFetch from "@/hooks/fetch/useShopDataFetch";
import { searchParamAtom } from "@/store/searchParamAtom";
import { startAtom } from "@/store/startAtom";

import RangeSelectMemo from "./rangeSelect/rangeSelect";
import TextInputMemo from "./textInput/textInput";

const SearchForm: FC = () => {
  const start = useAtomValue(startAtom);
  const [searchParam] = useAtom(searchParamAtom);
  const { handleSubmit, register } = useForm<SearchFormValueType>();
  const { isValidating } = useShopDataFetch(searchParam, start);
  const onSubmit = useSearchForm();

  return (
    <Box w={{ base: "95%", lg: "80%" }} p={8} shadow="lg" borderRadius={8} bgColor="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir={{ base: "column", lg: "row" }} gap={{ base: 4, lg: 0 }}>
          <TextInputMemo register={register} registerName="name_any" labelText="店舗名" isFirst />
          <TextInputMemo register={register} registerName="keyword" labelText="キーワード" />
          <RangeSelectMemo
            register={register}
            registerName="range"
            labelText="検索範囲"
            placeholder="現在地からの半径"
          />
          <Button
            type="submit"
            colorScheme="primary"
            borderLeftRadius={{ base: "md", lg: 0 }}
            isLoading={isValidating}
          >
            検索する
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
