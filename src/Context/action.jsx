export const SignupFailureAction = { type: "ERROR" };
export const SignupLoading = { type: "LOADING" };
// export const SignupSuccess = (value)=>{ type: "SUCCESS",payload : value };

export const SignupSuccess = (value) => {
    return {
      type: "INCREMENT_COUNT_BY_VALUE",
      payload: value
    };
  };

