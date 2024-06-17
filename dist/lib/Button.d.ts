import {
	default as React, AriaAttributes, ForwardedRef,
} from 'react';

interface ButtonProps {

    /** Optional id */
    id?: string;

    /** Add styles to component */
    extendStyles?: string;

    /** The button text */
    label: string;

    /** Does this button submit a form? */
    submit?: boolean;

    /** Toggle disable */
    disabled?: boolean;

    /** Aria attributes*/
    a11y?: AriaAttributes;

    /** React ref */
    ref?: ForwardedRef<HTMLButtonElement>;

    /** Function to call when clicked */
    onClick: () => void;
}
export declare const Root: import('styled-components/dist/types').IStyledComponentBase<'web', import('styled-components').FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;

/**
 * A stylized button.
 */
export declare function Button({
	extendStyles, label, id, a11y, ref, submit, disabled, onClick,
}: ButtonProps): JSX.Element;
export {};
