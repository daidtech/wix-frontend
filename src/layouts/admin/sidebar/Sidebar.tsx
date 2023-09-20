import React from 'react';
import './Sidebar.scss';
import Accordion from 'react-bootstrap/Accordion';
import Subitem from 'components/Subitem'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item bsPrefix="sidebar-accordion" eventKey="0">
          <Accordion.Header>Store Products</Accordion.Header>
          <Accordion.Body>
            <Subitem link={'/products'}> Products </Subitem>
            <Subitem link={'google.com'}> Inventory </Subitem>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix="sidebar-accordion" eventKey="1">
          <Accordion.Header>Orders</Accordion.Header>
          <Accordion.Body>
            <Subitem link={'google.com'}> Orders </Subitem>
            <Subitem link={'google.com'}> Abandoned Carts </Subitem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Sidebar;