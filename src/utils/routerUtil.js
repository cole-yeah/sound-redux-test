import pathRegexp, { compile } from 'path-to-regexp'

const compileOptions = options => Object.keys(options)
    .map(key => `${key}=${options[key]}`)
    .join('&')

export const compileHash = route => {
    const { path, keys, options } = route;

    const toPath = compile(path);
    const query = compileOptions(options);
    return `#/${toPath(keys)}${query === '' ? '' : `?${query}`}`;
}