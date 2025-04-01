import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 text-white">
      <div className="font-kanit">
        <h1 className="text-4xl font-bold">LensFocus</h1>
        <Link
          href={"https://t.me/abdulloyev"}
          target="_blank"
          className="text-sm opacity-80"
        >
          deposit
        </Link>
      </div>
      <div className="flex items-center gap-4 font-mono">
        <p className="text-xl font-medium">Persistence beats talent.</p>
      </div>
    </header>
  );
};

export default Header;
