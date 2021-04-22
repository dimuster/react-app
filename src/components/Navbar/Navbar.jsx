import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item + " " + s.active}><a href="#s">Profile</a></div>
      <div className={s.item}><a href="#s">News</a></div>
      <div className={s.item}><a href="#s">Messages</a></div>
    </nav>
  );
};

export default Navbar;