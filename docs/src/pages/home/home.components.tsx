import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// HomePage Properties
import { HomePageProperties } from './home.types';

// Package properties
import projectProps from '../../../../package.json';

const HomePage: FC<HomePageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'h-100 flex-grow-1'} role={'main'}>
        <Container fluid id={'home.container'} className={'text-center content'}>
          <Row className={'my-2'}>
            <h1>React Classification Banner</h1>
          </Row>
          <Row className={'my-2'}>
            <h5>
              A library to generate UK Security Classification Banners based on{' '}
              <a href='https://www.gov.uk/government/publications/government-security-classifications/government-security-classifications-policy-html'>
                UK Government Guidance
              </a>
              .
            </h5>
            <br></br>
            <h5>
              The UK has 3 Classification levels and various rules on handling instructions, this library provides a TSX
              Component which will generate a banner in the correct colours, with text laid out correctly and
              accessibility features incorporated.
            </h5>
          </Row>

          <Row>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/gettingStarted'>
                  <Button variant='dark'>Getting Started</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/api'>
                  <Button variant='dark'>API</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/examples'>
                  <Button variant='dark'>Examples</Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
          <Row className={'my-2'}>
            <p>Current Version: {projectProps.version}</p>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { HomePage };
