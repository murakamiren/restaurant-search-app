import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC, memo, useId } from "react";

import CommonFormProps from "@/@types/form/commonFormPropsType";

type Props = { isFirst?: boolean; isLast?: boolean } & CommonFormProps;

const TextInput: FC<Props> = ({ register, registerName, labelText, isFirst, isLast }) => {
  const id = useId();
  return (
    <FormControl variant="floating" flex="1">
      <Input
        placeholder=" "
        id={`${id}-${registerName}`}
        {...register(registerName)}
        borderLeftRadius={isFirst ? "md" : { base: "md", lg: 0 }}
        borderRightRadius={isLast ? "md" : { base: "md", lg: 0 }}
      />
      <FormLabel htmlFor={`${id}-${registerName}`}>{labelText}</FormLabel>
    </FormControl>
  );
};

const TextInputMemo = memo<Props>(({ register, registerName, labelText, isFirst, isLast }) => (
  <TextInput
    register={register}
    registerName={registerName}
    labelText={labelText}
    isFirst={isFirst}
    isLast={isLast}
  />
));
TextInputMemo.displayName = "TextInputMemo";

export default TextInputMemo;
