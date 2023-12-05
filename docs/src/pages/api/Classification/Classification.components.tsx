import { FC, useEffect } from 'react';
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
import { ClassificationColumnDefData } from './Classification.data';

const GetClassificationCode = (): string => {
  return (
    'const SecurityBannerPage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    "\t\t\t<SecurityBanner classification={'OFFICIAL'} />\n" +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};

const ApiClassificationPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'my-2'}>
        <Row>
          <h1>Classification</h1>
        </Row>
        <Row>
          <p>The Classification type operates as an enumerate and has a limited selection of allowed values.</p>
        </Row>
        <Row>
          <RBTable data={ClassificationColumnDefData} {...ApiEnumTableConfiguration} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <p>Below we have provided an example of the setting being used with the library.</p>
        </Row>
        <Row>
          <SecurityBanner classification={'OFFICIAL'} />
        </Row>
        <Row>
          <h3>Source Code</h3>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{GetClassificationCode()}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiClassificationPage };
