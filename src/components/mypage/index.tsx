import { Link } from "react-router-dom";
import { IcBack } from "assets";
import styles from "./styles.module.scss";

interface Ilist {
  links: {
    to: string;
    text: string;
  }[];
  title: string;
}

const Mypage = ({ links, title }: Ilist) => (
  <article className={styles.list}>
    <em className={styles.listTitle}>{title}</em>
    {links.map((link, i) => (
      <Link to={link.to} className={styles.listLink} key={i}>
        {link.text}
        <IcBack />
      </Link>
    ))}
  </article>
);

export default Mypage;
