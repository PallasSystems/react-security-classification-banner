import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ApiPageProperties } from './api.types';
import { ApiTablePageData, ApiTableTypesPageData } from './api.data';

const ApiHeadPage: FC<ApiPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'}>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <Container id='intro' className={'my-2'}>
        <Row className={'my-2'}>
          <h1>API Reference</h1>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            {ApiTablePageData.map((value) => {
              return (
                <li>
                  <LinkContainer to={value.link}>
                    <a>{value.text}</a>
                  </LinkContainer>
                </li>
              );
            })}
          </ul>
        </Row>
        <Row className={'my-2'}>
          <h2>Types</h2>
        </Row>
        <Row>
          <p>
            Several of the fields are locked to specific values (similar to enumerates), this section outlines those
            types and the acceptable values.
          </p>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            {ApiTableTypesPageData.map((value) => {
              return (
                <li>
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
  );
};

export { ApiHeadPage };
