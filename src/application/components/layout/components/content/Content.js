import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import useThemeState from 'application/hooks/use-theme-state';
import useThemeChanged from 'application/hooks/use-theme-changed';
import DarkMode from './backgrounds/dark-mode';
import LightMode from './backgrounds/light-mode';
import { ContentStyle } from './Content.styled';

const Content = ({ children }) => {
  const { isFirstTheme } = useThemeChanged();
  const [isLightMode] = useThemeState();
  const theme = useTheme();

  return (
    <ContentStyle isLightMode={isLightMode}>
      <LightMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} />
      <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} />
      {children}
    </ContentStyle>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
