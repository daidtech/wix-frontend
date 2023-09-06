import React from 'react';
import './App.css';
import Header from 'layouts/admin/header/Header';
import Sidebar from 'layouts/admin/sidebar/Sidebar';
import Products from 'components/Products';
import AdminLayout from 'layouts/admin';

function App() {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
}

export default App;
