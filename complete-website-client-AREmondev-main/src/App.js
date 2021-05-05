import './App.css'

import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import HomeScreen from './Screen/HomeScreen'
import ReviewScreen from './Screen/ReviewScreen'
import SignUp from './components/Signup/Signup'
import OrderScreen from './Screen/OrderScreen'
import OrderListScreen from './Screen/OrderListScreen'
import ManageOrder from './Screen/ManageOrderScreen'
import AddServiceScreen from './Screen/AddServiceScreen'
import MakeAdminScreen from './Screen/MakeAdminScreen'
import ManageServiceScreen from './Screen/ManageServiceScreen'
import DashBoardScreen from './Screen/DashBoardScreen'
import AdminScreen from './Screen/AdminScreen'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          <ProtectedRoute path="/review">
            <ReviewScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/order">
            <OrderScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/order-list">
            <OrderListScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/manageorder">
            <ManageOrder />
          </ProtectedRoute>
          <ProtectedRoute path="/addservice">
            <AddServiceScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard">
            <DashBoardScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/admin">
            <AdminScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/makeadmin">
            <MakeAdminScreen />
          </ProtectedRoute>
          <ProtectedRoute path="/manageservice">
            <ManageServiceScreen />
          </ProtectedRoute>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
