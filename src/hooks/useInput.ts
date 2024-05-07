import React, { useState, useCallback } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValue(e.target.value);
    },
    [value]
  );
  return [value, onChange, setValue] as const;
};
export default useInput;
