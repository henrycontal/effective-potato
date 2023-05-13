import { ENCODED_TEMPLATE } from '../constants';
import { AppConfig } from '../domain/config';

export const encodedSource = () => `data:text/html;base64,${ENCODED_TEMPLATE}`;

export const getUriWithParams = (uri: string, config: AppConfig): string => {
    const usp = new URL(uri);
    usp.searchParams.append('str', config.strategy);
    return usp.toString();
};
