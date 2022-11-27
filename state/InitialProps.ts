import { selector } from 'recoil';
import { getData, setData } from '../firebase/firestore';

export default selector({
  key: 'InitialPropsState',
  get: async ({ get }) => {
    try {
      const response = await getData('account').then((data: any) => {
        return data.docs.map((item: any) => item.data());
      });
      return response;
    } catch (error) {
      console.log(`에러 발생`);
    }
  },
});
