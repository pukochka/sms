import { Directive } from 'vue';
import useHaptic from 'src/utils/use/useHaptic';

export default <Directive<HTMLElement, string>>{
  updated() {
    useHaptic();
  },
};
