import colorString from 'color-string';
//https://drafts.csswg.org/css-color/#named-colors
export const normalize = str => {
    const colorNormalized = colorString.get.rgb(str);
    const color = colorString.to.hex(colorNormalized)
    return color?.toUpperCase().replace('#', '') ?? '';
};