import '@testing-library/jest-dom';
import React from 'react';

import Button from '../../../src/components/Button';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('Basic Button', () => {

  const labelText = 'Basic Button';

  it('should render a basic Button', () => {
    const component = <Button label={labelText} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it('should render a basic Button with label', () => {
    const component = <Button label={labelText} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const basicButton = getByTestId('button');

    expect(basicButton).toHaveTextContent(labelText);
  });

  it('should render a basic Button with aria label', () => {
    const component = <Button label={labelText} />
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const basicButton = getByTestId('button');

    expect(basicButton).toHaveAttribute('aria-label', labelText);
  });
});