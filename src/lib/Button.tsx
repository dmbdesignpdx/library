import React, {
	type ButtonHTMLAttributes,
} from 'react';
import { styled } from 'styled-components';
import { Theme } from '../theme';
import type { ActionElement } from '../../types/main';

const { Color, Font } = Theme;


type ButtonType = ButtonHTMLAttributes<{}>['type'];

type ButtonProps = ActionElement & {

	/** Identify the button will submit a form */
	submit?: boolean;

	/** Function to call when clicked */
	onClick: () => void;
}

/**
 * Base styled HTML element for the main component.
 * @alias button
 * @see Button
 */
export const Root = styled.button`
    contain: layout;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-inline-size: 17rem;
    min-block-size: 3.5rem;
    padding-inline: 1.5rem;
    font-size: ${Font.Size.BODY};
    font-weight: ${Font.Weight.BLACK};
    line-height: ${Font.LineHeight.NORMAL};
    letter-spacing: ${Font.LetterSpacing.NORMAL};
    background-color: ${Color.WHITE};
    color: ${Color.BLACK};
    border: 1px solid ${Color.BLACK};
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Color.PRIMARY};
        color: ${Color.WHITE};
    }
`;


/**
 * A stylized HTML button to perform an action, not for navigation.
 * @alias button
 */
export function Button({
	className,
	label,
	id,
	a11y,
	ref,
	testid,
	submit = false,
	disabled = false,
	onClick,
	as = 'button',
}: ButtonProps): React.JSX.Element {
	const type: ButtonType = submit ? 'submit' : 'button';

	return (
		<Root
			as={as}
			id={id}
			disabled={disabled}
			className={className}
			type={type}
			onClick={onClick}
			ref={ref}
			data-testid={testid}
			{...a11y}
		>
			<span>{label}</span>
		</Root>
	);
}
