export const actionUserList = users => (
    {
      type: 'USER_LIST',
      payload: users
    }
)

export const actionResetUserList = () => ({
  type: 'RESET_USER_LIST'
})
