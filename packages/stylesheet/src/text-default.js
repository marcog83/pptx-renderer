import * as R from 'ramda';

 
export const textDefault=(style)=>R.mergeRight({
  valign:"top",
  align:"left",
  fontFace:"Calibri",
  fontSize:18,
  wrap:true,
})(style)