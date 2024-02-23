import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetBannerExamples } from './nationalityCaveat.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const NationalityCaveatBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'flex-grow-1'} role={'main'}>
        <Container fluid id={'simple.container'} className={'content'}>
          <NationalityCaveatBannerExamplesComponent />
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const NationalityCaveatBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create Security Banners with Nationality Caveats</h2>
      </Row>
      <Row>
        <p>
          The React Classification Banner aims to provide a UK Security Classification banner, the standard includes the
          concept of restricting access to information to specific countries or organisations and are known as
          Nationality Caveats.
        </p>
        <p>
          Nationality Caveats provide security cover for a particular asset or event and are commonly applied to SECRET
          and TOP SECRET assets as a result the banner will not display nationality caveat for OFFICAL banners.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <SecurityBanner records={{ classification: 'OFFICIAL', codeWords: ['CODEWORD'], nationalityCaveat: ['GBR'] }} />
        <SecurityBanner records={{ classification: 'SECRET', codeWords: ['CODEWORD'], nationalityCaveat: ['NATO'] }} />
        <SecurityBanner
          records={{ classification: 'TOP SECRET', codeWords: ['CODEWORD'], nationalityCaveat: ['AUS', 'GBR'] }}
        />
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

export { NationalityCaveatBannerExamplesPage, NationalityCaveatBannerExamplesComponent };
