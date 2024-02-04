import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetBannerExamples } from './codeWords.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const CodeWordsBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'h-100 flex-grow-1'} role={'main'}>
        <Container fluid id={'simple.container'} className={'content'}>
          <CodeWordsBannerExamplesComponent />
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const CodeWordsBannerExamplesComponent: FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Container>
      <Row>
        <h2>Create Security Banners with Codewords</h2>
      </Row>
      <Row>
        <p>
          The React Classification Banner aims to provide a UK Security Classification banner, the standard includes the
          concept of code words.
        </p>
        <p>
          Code words provide security cover for a particular asset or event and are commonly applied to SECRET and TOP
          SECRET assets as a result the banner will not display code words for OFFICAL banners. The descriptor concept
          is expected at OFFICIAL.
        </p>
        <p>
          Government bodies will manage their code word listings and so no rules are applied to code words other than
          ensuring they are non duplicating.
        </p>
        <p></p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <SecurityBanner records={{ classification: 'OFFICIAL', codeWords: ['CODE', 'EXAMPLE', 'WORDS'] }} />
        <SecurityBanner records={{ classification: 'SECRET', codeWords: ['CODE', 'EXAMPLE', 'WORDS'] }} />
        <SecurityBanner records={{ classification: 'TOP SECRET', codeWords: ['CODE', 'EXAMPLE', 'WORDS'] }} />
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

export { CodeWordsBannerExamplesPage, CodeWordsBannerExamplesComponent };
