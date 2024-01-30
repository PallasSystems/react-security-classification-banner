import React, { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from './examples.types';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ExamplePageData } from './example.data';

const ExamplesHeadPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'h-100 flex-grow-1'} role={'main'}>
        <Container fluid id={'examples.container'} className={'content'}>
          <Row>
            <h1>Examples</h1>
          </Row>
          <Row className={'mx-3'}>
            <ul>
              {ExamplePageData.map((value) => {
                return (
                  <li key={value.text}>
                    <LinkContainer to={value.link}>
                      <a>{value.text}</a>
                    </LinkContainer>
                  </li>
                );
              })}
            </ul>
          </Row>
        </Container>
        <Footer {...footerProps} />
      </main>
    </>
  );
};

export { ExamplesHeadPage };
