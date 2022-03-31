import * as N from '@pptx-renderer/primitives';
import * as R from 'ramda';
import { styleText } from './styles/style-text';
import { styleShape } from './styles/style-shape';
import { styleNotes } from './styles/style-notes';
import { styleSections } from './styles/style-sections';
import { styleSlide } from './styles/style-slide';
import { styleGroup } from './styles/style-group';
import { styleImage } from './styles/style-image';
 
const T = {
    [N.Text]: styleText,
    [N.Image]: styleImage,
    [N.Shape]: styleShape,
    [N.Notes]: styleNotes,
    [N.Section]: styleSections,
    [N.Slide]: styleSlide,
    [N.Group]: styleGroup,
};

export const createStyles = node => {

    const identity = R.evolve({
        children: R.map(createStyles)
    })
    const fn = T[node.type]?.(createStyles) ?? identity;
    return fn(node)
}