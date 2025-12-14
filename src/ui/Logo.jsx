function Logo() {
  return (
    <div className="hidden sm:block text-center mb-6">
      <img
        src="/logo-light.png"
        alt="Logo"
        className="h-24 w-auto mx-auto block dark:hidden"
      />
      <img
        src="/logo-dark.png"
        alt="Logo"
        className="h-24 w-auto mx-auto hidden dark:block"
      />
    </div>
  );
}

export default Logo;
