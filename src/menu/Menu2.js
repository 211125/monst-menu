import "../styles/estilos.css"
const Menu2 = () => {
  return(
      <div>


          <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
          <label htmlFor="menu-icon"></label>
          <nav className="nav">
              <ul className="pt-5">
                  <li><a href="#">tabla1</a></li>
                  <li><a href="#">tabla2</a></li>
                  <li><a href="#">tabla3</a></li>

              </ul>
          </nav>


      </div>
  )
}
export default Menu2;