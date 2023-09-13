import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './Product.scss';
import TitlePage from 'components/TitlePage/TitlePage';

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

function Edit() {
  return (
    <div className='edit-product'>
      <TitlePage></TitlePage>
      <h1>Edit product</h1>
    </div>
  )
}

export default Edit;