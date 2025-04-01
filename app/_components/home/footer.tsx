import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col p-4">
      <Link
        href={"https://github.com/abucoders/lensfocus"}
        target="_blank"
        className="text-sm opacity-80"
      >
        v 1.0.0
      </Link>
    </footer>
  );
};

export default Footer;
