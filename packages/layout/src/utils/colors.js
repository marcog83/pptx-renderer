import colorString from 'color-string';

export const normalize = str => {
        const colorNormalized = colorString.get.rgb(str);
        const color=colorString.to.hex(colorNormalized) 
        console.log(str,color)
  //  const color = hex ?? keyword;
    return color && color.toUpperCase().replace('#', '');
};