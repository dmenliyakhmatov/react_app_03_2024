import { ReactNode } from 'react';
import { BaseContainer } from './base-container';
import { ContentWrapper } from './content-wrapper';
import { Header, HeaderProps } from './header';
import { MainContent } from './main-content';
import { Sidebar } from './sidebar';

type PageWrapperProps = {
  children: ReactNode;
  onSearchChange?: HeaderProps['onSearchChange'];
};

export const PageWrapper = ({ children, onSearchChange }: PageWrapperProps) => {
  return (
    <BaseContainer>
      <Header onSearchChange={onSearchChange} />

      <ContentWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </BaseContainer>
  );
};
