import { Directive } from 'vue';
import useHaptic from 'src/utils/useHaptic';

export default <Directive<HTMLElement, string>>{
  updated() {
    useHaptic();
  },
};
