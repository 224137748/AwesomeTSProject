import { Payload } from 'types';
import { set, forEach } from 'lodash-es';

/**
 * 用于更新状态的辅助函数
 * @param state redux state
 * @param payload 要更新的路径跟值
 */
export const setDataHelper = <T extends object>(state: T, payload: Payload) => {
  if (Array.isArray(payload)) {
    forEach(payload, (item) => {
      set(state, item.path, item.value);
    });
  } else {
    set(state, payload.path, payload.value);
  }
};
