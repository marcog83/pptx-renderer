import * as R from 'ramda';
import getMargin from '../node/getMargin';
import getPadding from '../node/getPadding';
import getPosition from '../node/getPosition';
import getDimension from '../node/getDimension';
import getBorderWidth from '../node/getBorderWidth';
import setDisplay from '../node/setDisplay';
import setOverflow from '../node/setOverflow';
import setFlexWrap from '../node/setFlexWrap';
import setFlexGrow from '../node/setFlexGrow';
import setFlexBasis from '../node/setFlexBasis';
import setAlignSelf from '../node/setAlignSelf';
import setAlignItems from '../node/setAlignItems';
import setFlexShrink from '../node/setFlexShrink';
import setAspectRatio from '../node/setAspectRatio';
import setAlignContent from '../node/setAlignContent';
import setPositionType from '../node/setPositionType';
import setFlexDirection from '../node/setFlexDirection';
import setJustifyContent from '../node/setJustifyContent';
import {
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
} from '../node/setMargin';
import {
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
} from '../node/setPadding';
import {
  setBorderTop,
  setBorderRight,
  setBorderBottom,
  setBorderLeft,
} from '../node/setBorderWidth';
import {
  setPositionTop,
  setPositionRight,
  setPositionBottom,
  setPositionLeft,
} from '../node/setPosition';
import {
  setWidth,
  setMinWidth,
  setMaxWidth,
  setMinHeight,
  setMaxHeight,
  setHeight,
} from '../node/setDimension';

export const setYogaValues = style => R.compose(
  setHeight(style.height),
  setWidth(style.width),
  setMinWidth(style.minWidth),
  setMaxWidth(style.maxWidth),
  setMinHeight(style.minHeight),
  setMaxHeight(style.maxHeight),
  setMarginTop(style.marginTop),
  setMarginRight(style.marginRight),
  setMarginBottom(style.marginBottom),
  setMarginLeft(style.marginLeft),
  setPaddingTop(style.paddingTop),
  setPaddingRight(style.paddingRight),
  setPaddingBottom(style.paddingBottom),
  setPaddingLeft(style.paddingLeft),
  setPositionType(style.position),
  setPositionTop(style.top),
  setPositionRight(style.right),
  setPositionBottom(style.bottom),
  setPositionLeft(style.left),
  setBorderTop(style.borderTopWidth),
  setBorderRight(style.borderRightWidth),
  setBorderBottom(style.borderBottomWidth),
  setBorderLeft(style.borderLeftWidth),
  setDisplay(style.display),
  setFlexDirection(style.flexDirection),
  setAlignSelf(style.alignSelf),
  setAlignContent(style.alignContent),
  setAlignItems(style.alignItems),
  setJustifyContent(style.justifyContent),
  setFlexWrap(style.flexWrap),
  setOverflow(style.overflow),
  setAspectRatio(style.aspectRatio),
  setFlexBasis(style.flexBasis),
  setFlexGrow(style.flexGrow),
  setFlexShrink(style.flexShrink),
);
