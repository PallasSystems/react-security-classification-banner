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
import { OrganisationColumnDefData } from './Organisation.data';

const GetOrganisationCode = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    "\t\t\t<SecurityBanner classification={'OFFICIAL'} originatingEntity={'NATO'} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};

const ApiOrganisationPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'}>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <Container id='intro' className={'my-2'}>
        <Row>
          <h1>Organisation</h1>
        </Row>
        <Row>
          <p>The Organisation type operates as an enumerate and has a limited selection of allowed values.</p>
        </Row>
        <Row>
          <RBTable data={OrganisationColumnDefData} {...ApiEnumTableConfiguration} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <p>Below we have provided an example of the setting being used with the library.</p>
        </Row>
        <Row>
          <SecurityBanner classification={'OFFICIAL'} originatingEntity={'NATO'} />
        </Row>
        <Row>
          <h3>Source Code</h3>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{GetOrganisationCode()}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiOrganisationPage };
