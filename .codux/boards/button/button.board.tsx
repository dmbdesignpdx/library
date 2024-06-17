import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../src/lib/button';

/* eslint-disable-next-line react-refresh/only-export-components */
export default createBoard({
	name: 'Button',
	Board: () => (
		<Button
			label="Hello There"
			onClick={() => { }}
		/>
	),
	isSnippet: true,
});
