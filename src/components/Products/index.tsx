import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './styles.scss';
import TitlePage from 'components/TitlePage';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function Products() {
  return (
    <div className='products-page'>
      <TitlePage></TitlePage>
      <DataGrid className='products-grid' columns={columns} rows={rows} />
    </div>
  )
}

export default Products;