import { screen, render } from '@testing-library/react';
import { userEvent as user } from '@testing-library/user-event';
import { vi } from 'vitest';

import { Button } from 'lib:button';


describe('<Button />', () => {
	test('renders with required props', async () => {
		render(<Button label="Hello World!" onClick={() => true} />);

		const button = await screen.findByRole('button');

		expect(button).toHaveTextContent('Hello World!');
		expect(button).toHaveAccessibleName('Hello World!');
	});

	test('renders with additional props', async () => {
		render(
			<Button
				label="Hello World!"
				onClick={() => true}
				submit
				a11y={{ 'aria-controls': 'id' }}
				id="hello"
			/>
		);

		const button = await screen.findByRole('button');

		expect(button).toHaveAttribute('type', 'submit');
		expect(button).toHaveAttribute('aria-controls', 'id');
		expect(button).toHaveAttribute('id', 'hello');
	});

	test('is interactive', async () => {
		const mock = vi.fn(() => true);

		const { rerender } = render(<Button label="Hello World!" onClick={mock} />);

		const button = await screen.findByRole('button');

		expect(mock).toHaveBeenCalledTimes(0);
		expect(button).toBeEnabled();

		await user.click(button);

		expect(mock).toHaveBeenCalledTimes(1);

		rerender(
			<Button
				label="Hello World!"
				onClick={() => true}
				disabled
			/>
		);

		expect(button).toBeDisabled();

		await user.click(button);

		expect(mock).toHaveBeenCalledTimes(1);
	});
});
