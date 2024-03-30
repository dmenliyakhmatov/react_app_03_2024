import { ReactNode } from 'react';
import { BaseContainer } from './base-container';
import { ContentWrapper } from './content-wrapper';
import { Header } from './header';
import { MainContent } from './main-content';
import { Sidebar } from './sidebar';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  // console.log('render PageWrapper');
  return (
    <BaseContainer>
      <Header />

      <ContentWrapper>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </BaseContainer>
  );
};
