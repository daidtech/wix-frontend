import './Sidebar.scss';
import Accordion from 'react-bootstrap/Accordion';
import Subitem from 'components/Subitem/Subitem'
import { BsChevronRight } from 'react-icons/bs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className='sidebar'>
      <header>
        <button>
          <div className="progress-bar-content">
            <div className='d-flex'>
              <a href="#" className='side-bar-progress-title'>
                <span>Let's set up your business</span>
              </a>
              <BsChevronRight/>
            </div>
            <div className="wrap-progress-bar">
              <ProgressBar now={10} />
            </div>
            <div className='side-bar-progress-text'>0/8 completed</div>
          </div>
        </button>
      </header>
      <Accordion defaultActiveKey="0">

        <Accordion.Item bsPrefix="sidebar-accordion" eventKey="0">
          <Accordion.Header>Store Products</Accordion.Header>
          <Accordion.Body>
            <Subitem
              link={'/products'}
              className={location.pathname = '/products' ? 'active' : ''}>
              Products
            </Subitem>
            <Subitem link={'#'}> Inventory </Subitem>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix="sidebar-accordion" eventKey="1">
          <Accordion.Header>Orders</Accordion.Header>
          <Accordion.Body>
            <Subitem link={'#'}> Orders </Subitem>
            <Subitem link={'#'}> Abandoned Carts </Subitem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <footer>

      </footer>
    </div>
  )
}

export default Sidebar;