import { UseFormRegister } from "react-hook-form";

import SearchFormValueType from "./searchFormValueType";

type CommonFormProps = {
  register: UseFormRegister<SearchFormValueType>;
};

export default CommonFormProps;
