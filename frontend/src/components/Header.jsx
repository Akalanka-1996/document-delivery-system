import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
 
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Document Delivery</Link>
      </div>
     
    </header>
  )
}

export default Header