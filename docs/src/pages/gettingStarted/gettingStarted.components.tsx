import React, { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

import { GettingStartedInstallComponent } from './gettingStarted.install.components';
import { GettingStartedUsageComponent } from './gettingStarted.usage.components';

const GettingStartedPage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'}>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <Container id='intro'>
        <Row className={'my-2'}>
          <GettingStartedInstallComponent />
        </Row>
        <Row className={'my-2'}>
          <GettingStartedUsageComponent />
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { GettingStartedPage };
