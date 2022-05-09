import * as R from 'ramda';
import * as T from './primitives';

const isType = R.propEq('type');

export const isDocument = isType(T.Document);

export const isSection = isType(T.Section);

export const isSlide = isType(T.Slide);

export const isSlideNumber = isType(T.SlideNumber);

export const isText = isType(T.Text);

export const isImage = isType(T.Image);

export const isShape = isType(T.Shape);

export const isMedia = isType(T.Media);

export const isNotes = isType(T.Notes);

export const isTable = isType(T.Table);

export const isTableRow = isType(T.TableRow);

export const isTableCell = isType(T.TableCell);

export const isChart = isType(T.Chart);

export const isGroup = isType(T.Group);

export const isTextInstance = isType(T.TextInstance);
