import Yoga from '@react-pdf/yoga';
import * as R from 'ramda';
import { layoutText } from '../text/layoutText';
 function _measureShape(page, node, width, widthMode, height, heightMode){
    const text = node.children.reduce((acc, child) => `${acc} ${child.text}`, '');
    const metrics = layoutText(text, node.style.fontSize, {
        fontFamily:node.style.fontFace,
        width: `${width}px`,
        wordBreak:"break-word"
    });
   console.log(node.style);
    if (widthMode === Yoga.MEASURE_MODE_EXACTLY) {     
        console.log(node.type,text,metrics)
        
        return { height: metrics.height };  
    }

    if (widthMode === Yoga.MEASURE_MODE_AT_MOST) {
        node.metrics=metrics;
        console.log("MEASURE_MODE_AT_MOST",text,metrics)
        return {
            height: metrics.height,
            width: Math.min(width, metrics.width),
        };
    }

    return {};
 }
 export const measureShape = R.curryN(6, _measureShape)