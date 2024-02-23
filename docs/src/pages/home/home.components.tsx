import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

// HomePage Properties
import { HomePageProperties } from './home.types';
import './home.css';

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
      <main className={'flex-grow-1'} role={'main'}>
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
              <div className={'d-grid gap-2 my-2 '}>
                <LinkContainer to='/gettingStarted' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_muti_line_btn'}>Getting Started</p>
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/api' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_btn'}>API</p>
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className={'d-grid gap-2 my-2'}>
                <LinkContainer to='/examples' style={{ minHeight: '4em' }}>
                  <Button variant='dark'>
                    <p className={'home_btn'}>Examples</p>
                  </Button>
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
