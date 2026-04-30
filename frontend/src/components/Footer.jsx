const Footer = () => {
  return (
    <footer className="bg-darkerBlue py-8 text-center border-t border-slate-800/50 mt-20 relative z-10">
      <p className="text-lightGrey text-sm font-mono tracking-wide">
        Designed & Built by <span className="text-accentCyan font-bold">J.L. Shasini Lochana</span>
      </p>
      <p className="text-slate-500 text-xs mt-3">
        &copy; {new Date().getFullYear()} SLIIT - Preparation for Professional World (PPW)
      </p>
    </footer>
  );
};

export default Footer;
