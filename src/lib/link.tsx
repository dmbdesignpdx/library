import React, {
	type AnchorHTMLAttributes,
	type AriaAttributes,
	type ForwardedRef,
} from 'react';
import { styled } from 'styled-components';
import { Theme } from '../theme';
import type { ActionElement } from '../../types/main';

const { Color, Font } = Theme;


type LinkProps = ActionElement & {
	onClick?: () => void;
}

const Root = styled.button``;


export function Link({
	label,
	href,
	as = 'button',
}: LinkProps) {
	return (
		<Root as={as} href={href}>{label}</Root>
	);
}
