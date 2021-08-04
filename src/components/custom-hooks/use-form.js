import React, { useEffect, useState } from "react";

export default function useForm(values, isDirty, validateForm, afterSubmit) {
  const [error, setError] = useState({});
  useEffect(() => {
    if (isDirty) {
      let formError = validateForm(values);
      setError(formError);
      if (!formError) {
        afterSubmit();
      }
    }
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formError = validateForm(values);

    setError(formError);
    // console.log("formError", formError);
    if (Object.keys(formError).length == 0) {
      afterSubmit();
    }
  };

  return { error, handleSubmit };
}
