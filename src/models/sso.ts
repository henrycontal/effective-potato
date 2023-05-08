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

    render() {
        const $frame = document.createElement('iframe');
        const source = 'https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik';
        $frame.setAttribute('src', source);

        this.$element.append($frame);
    }

}
