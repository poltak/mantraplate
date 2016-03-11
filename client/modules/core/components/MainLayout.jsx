import React from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';

const Layout = ({content = () => null}) => (
  <Grid>
    <Row>
      <Col xs={6} md={8} xsOffset={3} mdOffset={4}>
        <PageHeader>
          Impossible List
        </PageHeader>
      </Col>
    </Row>

    <Row>
    	{content()}
    </Row>
  </Grid>
);

export default Layout;
