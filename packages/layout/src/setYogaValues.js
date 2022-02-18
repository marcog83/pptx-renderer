import * as R from 'ramda';
import getMargin from './node/getMargin';
import getPadding from './node/getPadding';
import getPosition from './node/getPosition';
import getDimension from './node/getDimension';
import getBorderWidth from './node/getBorderWidth';
import setDisplay from './node/setDisplay';
import setOverflow from './node/setOverflow';
import setFlexWrap from './node/setFlexWrap';
import setFlexGrow from './node/setFlexGrow';
import setFlexBasis from './node/setFlexBasis';
import setAlignSelf from './node/setAlignSelf';
import setAlignItems from './node/setAlignItems';
import setFlexShrink from './node/setFlexShrink';
import setAspectRatio from './node/setAspectRatio';
import setAlignContent from './node/setAlignContent';
import setPositionType from './node/setPositionType';
import setFlexDirection from './node/setFlexDirection';
import setJustifyContent from './node/setJustifyContent';
import {
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
} from './node/setMargin';
import {
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
} from './node/setPadding';
import {
  setBorderTop,
  setBorderRight,
  setBorderBottom,
  setBorderLeft,
} from './node/setBorderWidth';
import {
  setPositionTop,
  setPositionRight,
  setPositionBottom,
  setPositionLeft,
} from './node/setPosition';
import {
  setWidth, 
  setMinWidth,
  setMaxWidth,
  setMinHeight,
  setMaxHeight,
} from './node/setDimension';

export const setYogaValues = node => {
    R.compose(
      // setNodeHeight(node),
      setWidth(node.style.width),
      setMinWidth(node.style.minWidth),
      setMaxWidth(node.style.maxWidth),
      setMinHeight(node.style.minHeight),
      setMaxHeight(node.style.maxHeight),
      setMarginTop(node.style.marginTop),
      setMarginRight(node.style.marginRight),
      setMarginBottom(node.style.marginBottom),
      setMarginLeft(node.style.marginLeft),
      setPaddingTop(node.style.paddingTop),
      setPaddingRight(node.style.paddingRight),
      setPaddingBottom(node.style.paddingBottom),
      setPaddingLeft(node.style.paddingLeft),
      setPositionType(node.style.position),
      setPositionTop(node.style.top),
      setPositionRight(node.style.right),
      setPositionBottom(node.style.bottom),
      setPositionLeft(node.style.left),
      setBorderTop(node.style.borderTopWidth),
      setBorderRight(node.style.borderRightWidth),
      setBorderBottom(node.style.borderBottomWidth),
      setBorderLeft(node.style.borderLeftWidth),
      setDisplay(node.style.display),
      setFlexDirection(node.style.flexDirection),
      setAlignSelf(node.style.alignSelf),
      setAlignContent(node.style.alignContent),
      setAlignItems(node.style.alignItems),
      setJustifyContent(node.style.justifyContent),
      setFlexWrap(node.style.flexWrap),
      setOverflow(node.style.overflow),
      setAspectRatio(node.style.aspectRatio),
      setFlexBasis(node.style.flexBasis),
      setFlexGrow(node.style.flexGrow),
      setFlexShrink(node.style.flexShrink),
    )(node);
  };