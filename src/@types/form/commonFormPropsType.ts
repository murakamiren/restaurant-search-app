import { Path, UseFormRegister } from "react-hook-form";

import SearchFormValueType from "./searchFormValueType";

type CommonFormProps = {
  register: UseFormRegister<SearchFormValueType>;
  registerName: Path<SearchFormValueType>;
  labelText: string;
};

export default CommonFormProps;
