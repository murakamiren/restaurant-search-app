import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FC, memo, useId } from "react";

import CommonFormProps from "@/@types/form/commonFormPropsType";
import { selectValue } from "@/constant/form/selectValue";

type Props = { placeholder: string } & CommonFormProps;

const RangeSelect: FC<Props> = ({ register, registerName, labelText, placeholder }) => {
  const id = useId();

  return (
    <FormControl variant="floating" flex="1">
      <Select
        placeholder={placeholder}
        id={`${id}-select`}
        {...register(registerName)}
        borderRadius={{ base: "md", lg: 0 }}
      >
        {Object.keys(selectValue).map((range) => (
          <option key={selectValue[range]} value={selectValue[range]}>
            {range}
          </option>
        ))}
      </Select>
      <FormLabel htmlFor={`${id}-select`}>{labelText}</FormLabel>
    </FormControl>
  );
};

const RangeSelectMemo = memo<Props>(({ register, registerName, labelText, placeholder }) => (
  <RangeSelect
    register={register}
    registerName={registerName}
    labelText={labelText}
    placeholder={placeholder}
  />
));
RangeSelectMemo.displayName = "RangeSelectMemo";

export default RangeSelectMemo;
