import style from "../style.module.css";

const Header = () => {
    return(
        <div>
            <div className={style.header}>
               <img src="./image/logo.png" alt="" />
               <ul className={style.nav}>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
           </div>
        </div>
    )
}

export default Header;