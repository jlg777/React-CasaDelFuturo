import { Link, Outlet } from "react-router-dom"

const Rutas = () => {
  return (
    <>
    <header>
        <Link to="index">index</Link>
        <Link to="about">about</Link>
        <Link to="main">main</Link>
    </header>
    <section>
        <Outlet />
    </section>
    </>
  )
}
export default Rutas