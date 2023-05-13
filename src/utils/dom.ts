
export const createFrame = (uri: string) => {
    const $frame = document.createElement('iframe');

    $frame.setAttribute('id', 'sso-iframe');
    
    // const source = encodedSource();

    $frame.setAttribute('src', uri);

    return $frame;
};
