import { encodedSource } from './string';

export const createFrame = () => {
    const $frame = document.createElement('iframe');
    
    const source = encodedSource();

    $frame.setAttribute('src', source);

    return $frame;
};
