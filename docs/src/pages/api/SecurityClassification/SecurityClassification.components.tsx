import { FC, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Prism from 'prismjs';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { RBTable } from '@pallassystems/react-bootstrap-table';

// Getting Started Page Properties
import { ApiPageProperties } from '../api.types';

// For code highlighting
import 'prismjs/themes/prism.min.css';
import { ApiTableConfiguration } from '../api.data';
import { SecurityClassificationColumnDefData } from './SecurityClassification.data';

const ApiSecurityClassificationPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <main role={'main'}>
      <BannerNavBar {...navBarProps} />
      <Container id='intro' className={'my-2'}>
        <Row>
          <h1>SecurityClassification</h1>
        </Row>
        <Row>
          <p>Information required to define a the table columns and data mapppings.</p>
        </Row>
        <Row>
          <RBTable data={SecurityClassificationColumnDefData} {...ApiTableConfiguration} />
        </Row>
        <Row>
          <h2>Example</h2>
        </Row>
        <Row>
          <pre className={'language-javascript'}>
            <code>{JSON.stringify({}, null, 2)}</code>
          </pre>
        </Row>
      </Container>
      <Footer {...footerProps} />
    </main>
  );
};

export { ApiSecurityClassificationPage };
