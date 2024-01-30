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
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'h-100 flex-grow-1'} role={'main'}>
        <Container fluid id={'getting.started.container'} className={'content'}>
          <Row className={'my-2'}>
            <GettingStartedInstallComponent />
          </Row>
          <Row className={'my-2'}>
            <GettingStartedUsageComponent />
          </Row>
        </Container>
        <Footer {...footerProps} />
      </main>
    </>
  );
};

export { GettingStartedPage };
