import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';
import upperFirst from '../utils/upperFirst';

/**
 * Set generic align attribute to node's Yoga instance
 *
 * @param {string} specific align property
 * @param {string} align value
 * @param {Object} node instance
 * @returns {Object} node instance
 */
const setAlign = (attr) => (value) =>
  R.tap((node) => {
    const yogaNode = node._yogaNode;

    if (yogaNode) {
      const yogaValue = R.cond([
        [ R.equals('flex-start'), R.always(Yoga.ALIGN_FLEX_START) ],
        [ R.equals('center'), R.always(Yoga.ALIGN_CENTER) ],
        [ R.equals('flex-end'), R.always(Yoga.ALIGN_FLEX_END) ],
        [ R.equals('stretch'), R.always(Yoga.ALIGN_STRETCH) ],
        [ R.equals('baseline'), R.always(Yoga.ALIGN_BASELINE) ],
        [ R.equals('space-between'), R.always(Yoga.ALIGN_SPACE_BETWEEN) ],
        [ R.equals('space-around'), R.always(Yoga.ALIGN_SPACE_AROUND) ],
        [
          R.T,
          R.always(attr === 'items' ? Yoga.ALIGN_STRETCH : Yoga.ALIGN_AUTO)
        ]
      ])(value);

      yogaNode[`setAlign${ upperFirst(attr) }`](yogaValue);
    }
  });

export default setAlign;
