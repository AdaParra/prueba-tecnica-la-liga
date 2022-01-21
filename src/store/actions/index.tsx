export const actionUserList = (users) => ({
  type: "USER_INFORMATION",
  payload: users,
});

export const actionResetUserList = () => ({
  type: "RESET_USER_INFORMATION",
});
