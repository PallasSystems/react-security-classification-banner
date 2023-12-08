import { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// Getting Started Page Properties
import { ExamplesPageProperties } from './examples.types';
import { Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ExamplePageData } from './example.data';

const ExamplesHeadPage: FC<ExamplesPageProperties> = ({ footerProps, navBarProps }) => {
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
          <h1>Examples</h1>
        </Row>
        <Row className={'mx-3'}>
          <ul>
            {ExamplePageData.map((value) => {
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

export { ExamplesHeadPage };
