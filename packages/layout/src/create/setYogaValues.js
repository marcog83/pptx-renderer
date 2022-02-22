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

export const setYogaValues = node => {
    R.compose(
      setHeight(node.box.height),
      setWidth(node.box.width),
      setMinWidth(node.box.minWidth),
      setMaxWidth(node.box.maxWidth),
      setMinHeight(node.box.minHeight),
      setMaxHeight(node.box.maxHeight),
      setMarginTop(node.box.marginTop),
      setMarginRight(node.box.marginRight),
      setMarginBottom(node.box.marginBottom),
      setMarginLeft(node.box.marginLeft),
      setPaddingTop(node.box.paddingTop),
      setPaddingRight(node.box.paddingRight),
      setPaddingBottom(node.box.paddingBottom),
      setPaddingLeft(node.box.paddingLeft),
      setPositionType(node.box.position),
      setPositionTop(node.box.top),
      setPositionRight(node.box.right),
      setPositionBottom(node.box.bottom),
      setPositionLeft(node.box.left),
      setBorderTop(node.box.borderTopWidth),
      setBorderRight(node.box.borderRightWidth),
      setBorderBottom(node.box.borderBottomWidth),
      setBorderLeft(node.box.borderLeftWidth),
      setDisplay(node.box.display),
      setFlexDirection(node.box.flexDirection),
      setAlignSelf(node.box.alignSelf),
      setAlignContent(node.box.alignContent),
      setAlignItems(node.box.alignItems),
      setJustifyContent(node.box.justifyContent),
      setFlexWrap(node.box.flexWrap),
      setOverflow(node.box.overflow),
      setAspectRatio(node.box.aspectRatio),
      setFlexBasis(node.box.flexBasis),
      setFlexGrow(node.box.flexGrow),
      setFlexShrink(node.box.flexShrink),
    )(node);
  };