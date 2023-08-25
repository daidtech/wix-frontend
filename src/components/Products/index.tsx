import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './styles.scss';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function Products() {
  return <DataGrid columns={columns} rows={rows} />;
}

export default Products;