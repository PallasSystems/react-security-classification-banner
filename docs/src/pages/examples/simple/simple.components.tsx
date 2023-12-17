import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetBannerExamples } from './simple.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const SimpleBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'}>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <Container id='intro' className={'my-2'}>
        <SimpleBannerExamplesComponent />
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

const SimpleBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create Security Banners</h2>
      </Row>
      <Row>
        <p>
          The React Classification Banner aims to provide a UK Security Classification banner which will default to the
          most basic security classification banner. In this example we are showcasing the default behavour it the
          table.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <SecurityBanner />
        <SecurityBanner records={{ classification: 'OFFICIAL' }} />
        <SecurityBanner records={{ classification: 'SECRET' }} />
        <SecurityBanner records={{ classification: 'TOP SECRET' }} />
      </Row>
      <Row>
        <h5>Source Code</h5>
      </Row>
      <Row>
        <pre className={'language-javascript'}>
          <code>{GetBannerExamples()}</code>
        </pre>
      </Row>
    </Container>
  );
};

export { SimpleBannerExamplesPage, SimpleBannerExamplesComponent };
