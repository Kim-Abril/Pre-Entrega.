import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { PublicLayout } from './loyaut/PublicLayout';
import { AdminLayout } from './loyaut/AdminLayout';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Login } from './components/Login/Login';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route element={<PublicLayout/>}>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<CartView/>}/>
          </Route>
          <Route path="/admin/login" element={<Login/>} />
          <Route path='/admin' element={
            <ProtectedRoute>
              <AdminLayout/>
            </ProtectedRoute>
          } >
            <Route index element={<Navigate to={"dashboard"}/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='products/new' element={<ProductFormContainer/>}/>
            <Route path='products/success/:id' element={<ProductSuccess/>}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
