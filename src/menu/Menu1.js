import "../styles/styles.css"

const menu1 = () => {
return(
    <div>
        <header class="header">
            <div class="container">
                <div class="btn-menu">
                    <label for="btn-menu">☰</label>
                </div>
                <div class="logo">
                    <h1>Up chiapas</h1>
                </div>
                <nav class="menu">
                    <a href="#">Inicio</a>
                    <a href="#">login</a>
                    <a href="#">Sign off</a>
                </nav>
            </div>
        </header>
        <div class="capa"></div>

        <input type="checkbox" id="btn-menu" />
            <div class="container-menu">
                <div class="cont-menu">
                    <nav>
                        <a href="#">Tabla1</a>
                        <a href="#">Tabla2</a>
                        <a href="#">Tabla3</a>
                        <a href="#">Tabla4</a>

                    </nav>
                    <label for="btn-menu">✖️</label>
                </div>
            </div>
    </div>
)
}
export default menu1;