import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from '../examples.types';
import { GetBannerExamples } from './mergeRecords.data';

// For code highlighting
import 'prismjs/themes/prism.min.css';

const MergeRecordsBannerExamplesPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
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
          <MergeRecordsBannerExamplesComponent />
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

const MergeRecordsBannerExamplesComponent: FC = () => {
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
          The React Classification Banner aims to provide a UK Security Classification banner when a UX is handling
          multiple classified assets. To support this the banner can be supplied an array of security classification
          records and will merge the labels to provide a combined security banner.
        </p>
      </Row>
      <Row>
        <h3>Demonstration</h3>
      </Row>
      <Row>
        <SecurityBanner
          records={[
            { classification: 'SECRET', codeWords: ['CODEWORD'] },
            { classification: 'TOP SECRET', codeWords: ['WORDCODE'], nationalityCaveat: ['GBR'] },
          ]}
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

export { MergeRecordsBannerExamplesPage, MergeRecordsBannerExamplesComponent };
