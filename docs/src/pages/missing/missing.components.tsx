import { FC } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { BannerNavBar, Footer, PallasSVG } from '@pallassystems/website-core';
import { MissingPageProperties } from './missing.types.js';

const MissingPage: FC<MissingPageProperties> = ({ footerProps, navBarProps }) => {
  return (
    <main role={'main'}>
      <BannerNavBar {...navBarProps} />
      <Container fluid id={'Missing.Container'} className={'content'}>
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
      <Footer {...footerProps} />
    </main>
  );
};

export { MissingPage };
