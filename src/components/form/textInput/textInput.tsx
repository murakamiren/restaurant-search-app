import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC, memo, useId } from "react";

import CommonFormProps from "@/@types/form/commonFormPropsType";

type Props = CommonFormProps;

const TextInput: FC<Props> = ({ register, registerName, labelText }) => {
  const id = useId();
  return (
    <FormControl variant="floating" flex="1">
      <Input placeholder=" " id={`${id}-${registerName}`} {...register(registerName)} />
      <FormLabel htmlFor={`${id}-${registerName}`}>{labelText}</FormLabel>
    </FormControl>
  );
};

const TextInputMemo = memo<Props>(({ register, registerName, labelText }) => (
  <TextInput register={register} registerName={registerName} labelText={labelText} />
));
TextInputMemo.displayName = "TextInputMemo";

export default TextInputMemo;
