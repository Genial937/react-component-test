import { test, expect } from '@playwright/experimental-ct-react';
import Button from './Button';

test.use({ viewport: { width: 500, height: 500 } });

test('event should work', async ({ mount }) => {
    let clicked = false;

    // Mount a component. Returns locator pointing to the component.
    const component = await mount(<Button title='Submit'
        onClick={() => { clicked = true }}>
    </Button>);

    // As with any Playwright test, assert locator text.
    await expect(component).toContainText('Submit');

    // Perform locator click. This will trigger the event.
    await component.click();

    // Assert that respective events have been fired.
    setTimeout(() => {
        expect(clicked).toBeTruthy();
    }, 300);
});