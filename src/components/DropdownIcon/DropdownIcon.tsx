import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import './DropdownIcon.scss';

function DropdownIcon() {
  return (
    <div className='wrap-user-icon'>
      {/* <Dropdown
        align='end'
        title={<div className='wrap-con d-inline'><BsWind/></div>}
        id='dropdown-menu-align-end'
        className='btn-light'
      >
        <Button variant="info">mix it up style-wise</Button>
        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
      </Dropdown> */}
      <Dropdown as={ButtonGroup}>
        <Button variant="light" className="wrap-con">
          <img data-hook="content" src="https://lh3.googleusercontent.com/a/AAcHTtc_lY9FduRrJKK6MV_mRft1TrF2NrsSdct-k__O0i6G%3Ds96-c"></img>
        </Button>
        <Dropdown.Toggle split variant="light" id="dropdown-custom-2" />
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownIcon;