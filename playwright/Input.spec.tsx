import { test, expect } from '@playwright/experimental-ct-react';
import Input from '../src/Input';


test.use({ viewport: { width: 500, height: 500 } });

test('event should work', async ({ mount }) => {
    let clicked = false;

    // Mount a component. Returns locator pointing to the component.
    const component = await mount(<Input onClick={() => { clicked = true }} />);

    // As with any Playwright test, assert locator text.
    await expect(component).toHaveClass('form-control');

    // Perform locator click. This will trigger the event.
    await component.click();

    // Assert that respective events have been fired.
    setTimeout(() => {
        expect(clicked).toBeTruthy();
    }, 300);
});