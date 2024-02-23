import React, { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ApiPageProperties } from '../api.types';

// For code highlighting
import 'prismjs/themes/prism.min.css';
import { ApiEnumTableConfiguration } from '../api.data';
import { DescriptorColumnDefData } from './Descriptors.data';

const GetDescriptorsCode = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    "\t\t\t<SecurityBanner records={{ classification: 'SECRET', descriptors: ['COMMERCIAL'] }} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};

const ApiDescriptorsPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'flex-grow-1'} role={'main'}>
        <Container fluid id={'descriptors.container'} className={'content'}>
          <Row>
            <h1>Descriptors</h1>
          </Row>
          <Row>
            <p>The Descriptors type operates as an enumerate and has a limited selection of allowed values.</p>
          </Row>
          <Row>
            <RBTable data={DescriptorColumnDefData} {...ApiEnumTableConfiguration} />
          </Row>
          <Row>
            <h2>Example</h2>
          </Row>
          <Row>
            <p>Below we have provided an example of the setting being used with the library.</p>
          </Row>
          <Row>
            <SecurityBanner records={{ classification: 'SECRET', descriptors: ['COMMERCIAL'] }} />
          </Row>
          <Row>
            <h3>Source Code</h3>
          </Row>
          <Row>
            <pre className={'language-javascript'}>
              <code>{GetDescriptorsCode()}</code>
            </pre>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { ApiDescriptorsPage };
