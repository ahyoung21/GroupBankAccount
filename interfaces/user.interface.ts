export interface UserInputInterface {
  name: string;
  email: string;
  password: string;
  matchPassword: string;
}

export interface UserErrorMsgInterface {
  regMessage: string;
  pwdMessage: string;
  common: string;
}
