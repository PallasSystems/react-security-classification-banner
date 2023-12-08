import React, { FC, useEffect } from 'react';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';

// Getting Started Page Properties
import { GettingStartedPageProperties } from './gettingStarted.types';
import { Container, Row } from 'react-bootstrap';

// Project dependencies
import { SimpleBannerExamplesComponent } from '..';
import projectProps from '../../../../package.json';
// For code highlighting
import 'prismjs/themes/prism.min.css';

const GetImportStatement = (): string => {
  return "import { SecurityBanner } from '@pallassystems/react-security-classification-banner';";
};

const GettingStartedUsageComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h1>Usage</h1>
      </Row>
      <Row>
        <p>Here is a brief overview of how to use React Classification Banner (RCB).</p>
      </Row>
      <Row>
        <h4>Import Component</h4>
      </Row>
      <Row>
        <p>Once you have everything installed, you can import from {projectProps.name} like this:</p>
        <pre className={'language-javascript'}>
          <code>{GetImportStatement()}</code>
        </pre>
      </Row>
      <Row>
        <SimpleBannerExamplesComponent />
      </Row>
    </Container>
  );
};

const GettingStartedUsagePage: FC<GettingStartedPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'} className={'flex-shrink-0'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'content my-5'}>
        <GettingStartedUsageComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { GettingStartedUsageComponent, GettingStartedUsagePage };
