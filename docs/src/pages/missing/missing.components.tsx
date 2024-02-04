import React, { FC } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { BannerNavBar, Footer, PallasSVG } from '@pallassystems/website-core';
import { SecurityBanner } from '@pallassystems/react-security-classification-banner';

import { MissingPageProperties } from './missing.types.js';

const MissingPage: FC<MissingPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <>
      <BannerNavBar
        {...navBarProps}
        prefixRow={() => {
          return <SecurityBanner />;
        }}
      />
      <main className={'h-100 flex-grow-1'} role={'main'}>
        <Container fluid id={'missing.container'} className={'content text-center'}>
          <Row align='center' id={'Missing.Container.ImageRow'}>
            <Col className={'text-dark'} id={'Missing.Container.ImageRow.Coloumn'}>
              <PallasSVG id='Missing.Container.ImageRow.Coloumn.Image' />
            </Col>
          </Row>
          <Row align={'center'} id={'Missing.Container.TextRow'}>
            <Col className={'text-dark'} id={'Missing.Container.TextRow.Coloumn'}>
              <h1 id={'Missing.Container.TextRow.Coloumn.Text'}>Missing Page</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { MissingPage };
