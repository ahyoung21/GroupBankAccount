import Link from 'next/link';
import Modal from './index';

interface MenuItems {
  url: string;
  menu: string;
}
const menus: MenuItems[] = [
  { url: '/', menu: 'Home' },
  { url: '/skills', menu: 'Skills' },
  { url: '/projects', menu: 'Project' },
];
interface Iprops {
  onClose: () => void;
}
const Menu = (props: Iprops) => {
  return (
    <Modal onClose={props.onClose}>
      <ul onClick={props.onClose}>
        {menus.map((menuObj) => (
          <li key={menuObj.menu}>
            <Link href={menuObj.url}>{menuObj.menu}</Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Menu;
