import { describe, expect, it } from '@jest/globals';
import { makeHTML } from '../src/make-html';

describe('html', () => {
  it('Creates a html string', () => {
    const input ={
        content: '<strong>hi</strong>',
        metadata: {
            date: 'DATE',
        },
    };

    const parsed = makeHTML(input);

    const output = `
    <section>
     <strong>hi</strong>
    <p>Skrifað: DATE</p>
    </section>`
        
    expect(parsed).toBe(output);
   });

});