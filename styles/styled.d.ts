// theme파일에 들어갈 변수들의 타입
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
  }
}
