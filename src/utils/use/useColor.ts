import config from 'src/config';
import { palette } from 'stores/content/colors';
import { colors, setCssVar } from 'quasar';

import lighten = colors.lighten;
import getPaletteColor = colors.getPaletteColor;

export function useColor(id: number) {
  const color = palette.find((item) => item.id === id) ?? palette[0];

  setCssVar('primary', color.primary);

  setCssVar(
    'primary',
    lighten(getPaletteColor('primary'), config.is_dark ? 30 : 0)
  );
}
