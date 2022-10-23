import '../Header/header.css'
import Icon from '../../assets/logo.svg'
import IconXicara from '../../assets/icon-xicara.svg'
import IconCarrinho from '../../assets/icon-carrinho.svg'
import IconUser from '../../assets/user-1.png'
import Search from '../../assets/search.png'
import Menu from '../../assets/menu.png'

export function Header() {
   return (
      <div className='aaa'>
          <div className='header'>
            <div className='menu-busca'>
               <nav className='menu'>
                  <a href="#"><img src={Menu} alt="" className='icon' /></a>
               </nav>
               <div className='busca'>
                  <input type="text" name='busca' id='busca' /><a href="#"><img src={Search} alt="" className='img-busca' /></a>
               </div>
            </div>
            <div className='logo'>
               <img src={Icon} alt="" className='img-logo' />
            </div>
            <div className='carrinho'>
               <a href="#"><img src={IconXicara} alt="" className='icon' /></a>
               <a href="#"><img src={IconCarrinho} alt="" className='icon' /></a>
               <a href="#"><img src={IconUser} alt="" className='icon-user' /></a>
            </div>
         </div>
         <div className='busca-2'>
            <input type="text" name='busca-2' id='busca-2' /><a href="#"><img src={Search} alt="" className='img-busca-2' /></a>
         </div>
      </div>
   )
}
