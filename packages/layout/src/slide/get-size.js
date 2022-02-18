
import { emu2px } from '../utils/measures';
export function getSize(ctx) {
    const { width, height } = ctx.getLayout();
 
    return {
      height: emu2px(height),
      width: emu2px(width)
    };
  }