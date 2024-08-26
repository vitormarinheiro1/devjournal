import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center border border-t py-6">
      <div className="flex flex-row items-center gap-2">
        <div className="py-2 text-xs text-zinc-300">© 2024 DevTrek. All rights reserved.</div>
        <button>
          <Link href="https://github.com/vitormarinheiro1/devtrek" target="_blank">
            <FaGithub className="hover:text-gray-400" size={18} />
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
