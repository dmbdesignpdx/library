import type {
	AriaAttributes,
	ForwardedRef,
} from 'react';


export interface BaseElement {

	/** A unique id */
	id?: string;

	/** Add more styles to the component */
	className?: string;

	/** Aria attributes as an object literal */
	a11y?: AriaAttributes;

	/** A unique id for Testing Library */
	testid?: string;
}


export type InteractiveElement = BaseElement & {

	/** The text of the element */
	label: string;

	/** Use to toggle disable */
	disabled?: boolean;
}


type Anchor = InteractiveElement & {
	href: string;
	submit?: never;
	as?: 'link';
	ref?: ForwardedRef<HTMLAnchorElement>;
}

type Button = InteractiveElement & {
	href?: never;
	submit?: boolean;
	as?: 'button';
	ref?: ForwardedRef;
}

export type ActionElement = Anchor | Button
