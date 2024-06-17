/* eslint-disable @typescript-eslint/no-use-before-define */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'lib:button';
import { action } from '@storybook/addon-actions';
import {
	Canvas,
	Controls,
	Title,
	Subtitle,
	Description,
} from '@storybook/blocks';

const meta: Meta<typeof Button> = {
	title: 'Design System/Button',
	component: Button,
	args: {
		label: 'Learn More',
		onClick: action('Button clicked'),
	},
	parameters: {
		componentSubtitle: 'Interactive element',
		layout: 'centered',
		controls: { expanded: true },
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle />
					<Description />
					<h3>Default</h3>
					<Canvas of={Default} sourceState="shown" />
					<h3>Props</h3>
					<Controls />
				</>
			),
		},
	},
	tags: ['autodocs'],
};

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {};
