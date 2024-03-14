import zoundifyImage from "../../assets/zoundify.png";
import "./Header.css";
export default function Header() {
  return (
    <>
      <nav>
        <img
          src={zoundifyImage}
          alt="zoundify image"
          className="login-page-new__logo-img"
        />
      </nav>
    </>
  );
}
