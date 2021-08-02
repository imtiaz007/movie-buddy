/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

const watchList = atom({
  key: '_WATCH_LIST',
  default: [],
});

export { watchList };
