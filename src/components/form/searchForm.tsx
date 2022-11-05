import { Box, Button } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useForm } from "react-hook-form";

import SearchFormValueType from "@/@types/form/searchFormValueType";
import useSearchForm from "@/hooks/form/useSearchForm";

import RangeSelectMemo from "./rangeSelect/rangeSelect";
import TextInputMemo from "./textInput/textInput";

const SearchForm: FC = () => {
  const { handleSubmit, register } = useForm<SearchFormValueType>();
  const onSubmit = useSearchForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex">
        <TextInputMemo register={register} registerName="name_any" labelText="店舗名" />
        <TextInputMemo register={register} registerName="keyword" labelText="キーワード" />
        <RangeSelectMemo
          register={register}
          registerName="range"
          labelText="検索範囲"
          placeholder="現在地からの半径"
        />
        <Button type="submit">検索する</Button>
      </Box>
    </form>
  );
};

const SearchFormMemo = memo(SearchForm);

export default SearchFormMemo;
