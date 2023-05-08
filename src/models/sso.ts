import { $ } from '../utils/dom';

export class SSO {
    
    private $element!: Element;

    setConfig(config: { selector: string }) {
        const $element = $(config.selector);

        if (!$element) {
            console.error('ERROR: reference does not exist');
            return;
        }

        this.$element = $element;
    }

}
