import parseColor from 'parse-color';

export const normalize = str => {
        const { keyword, hex } = parseColor(str);
    const color = hex ?? keyword;
    return color && color.toUpperCase().replace('#', '');
};