import { Dropdown } from "react-bootstrap";
import './DropdownIcon.scss';

function DropdownIcon() {
  return (
    <div className='wrap-user-icon'>
      <Dropdown className="h-100">
        <Dropdown.Toggle variant="light" className="wrap-icon">
          <img data-hook="content" src="https://lh3.googleusercontent.com/a/AAcHTtc_lY9FduRrJKK6MV_mRft1TrF2NrsSdct-k__O0i6G%3Ds96-c"></img>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Account Name XXX</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2">Account Setting</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3" active> Domain </Dropdown.Item>
          <Dropdown.Item eventKey="4">Business Email</Dropdown.Item>
          <Dropdown.Item eventKey="5">Voucher</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownIcon;