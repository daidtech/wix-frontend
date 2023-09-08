import React from 'react';
import './App.css';
import Header from 'layouts/admin/Header/Header';
import Sidebar from 'layouts/admin/Sidebar/Sidebar';
import Products from 'components/Product/Product';
import AdminLayout from 'layouts/admin';

function App() {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
}

export default App;
