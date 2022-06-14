import headerStyles from "../styles/Layout.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className={headerStyles.footer}>
        <a
          href="https://vertrical.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={headerStyles.logo}>
            <Image src="/image.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
