import * as R from 'ramda';
import Yoga from '@react-pdf/yoga';

const isRow = R.equals('row');
const isColumn = R.equals('column');
const isRowReverse = R.equals('row-reverse');
const isColumnReverse = R.equals('column-reverse');

/**
 * Set flex direction attribute to node's Yoga instance
 *
 * @param {String} flex direction value
 * @param {Object} node instance
 * @return {Object} node instance
 */
const setFlexDirection = value =>
  R.tap(node => {
    const yogaNode = node._yogaNode;

    if (yogaNode) {
      const yogaValue = R.cond([
        [isColumn, R.always(Yoga.FLEX_DIRECTION_COLUMN)],
        [isRowReverse, R.always(Yoga.FLEX_DIRECTION_ROW_REVERSE)],
        [isColumnReverse, R.always(Yoga.FLEX_DIRECTION_COLUMN_REVERSE)],
        [R.T, R.always(Yoga.FLEX_DIRECTION_ROW)],
      ])(value);
      console.log('setFlexDirection',yogaValue)
      yogaNode.setFlexDirection(yogaValue);
    }
  });

export default setFlexDirection;
