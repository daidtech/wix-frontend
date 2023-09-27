import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './Product.scss';
import TitlePage from 'components/TitlePage/TitlePage';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'type', name: 'Type' },
  { key: 'sku', name: 'SKU' },
  { key: 'price', name: 'Price' },
  { key: 'inventory', name: 'Inventory' },
];

const rows = [
  { id: 1, name: 0, type: 'Example', sku: 'Example', price: 'Example 1', inventory: 'Example' },
  { id: 2, name: 1, type: 'Example', sku: 'Example', price: 'Example2', inventory: 'Example' },
  { id: 3, name: 20, type: 'Example', sku: 'Example', price: 'Example3', inventory: 'Example' },
  { id: 4, name: 4, type: 'Example', sku: 'Example', price: 'Example4', inventory: 'Example' },
  { id: 5, name: 5, type: 'Example', sku: 'Example', price: 'Example5', inventory: 'Example' },
  { id: 6, name:6, type: 'Example', sku: 'Example', price: 'Example6', inventory: 'Example' },
];

function Products() {
  return (
    <div className='products-page'>
      <TitlePage title='Products' badge='12'>
        <DropdownButton
          align="end"
          title="More Action"
          className='action-more-action round'
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        align="end"
        title={<div><BsFillBookmarkPlusFill />"New Product"</div>}
        className='action-new-product'
      >
        <Dropdown.Item eventKey="1" href="/products/new" >
          <h6>Physical product</h6>
          <span className='item-description'>e.g., t-shirt, shoes, or skateboard</span>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <h6>Digital file</h6>
          <span className='item-description'>e.g., eBook, printable, or digital album</span>
        </Dropdown.Item>
      </DropdownButton>
      </TitlePage>
      <DataGrid className='products-grid' columns={columns} rows={rows} />
    </div>
  )
}

export default Products;