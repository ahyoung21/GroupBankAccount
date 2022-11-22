export interface UserInputInterface<Type> {
  name?: string;
  email: Type;
  password: string;
  matchPassword?: string;
}

export interface UserErrorMsgInterface {
  regMessage: string;
  pwdMessage: string;
  common: string;
}
