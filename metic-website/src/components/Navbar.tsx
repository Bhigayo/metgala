// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-20 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
  <img src="/logo.png" alt="Metic Logo" className="h-8 w-8" />
  <span className="text-white font-bold text-lg">Metic</span>
</div>

      <ul className="hidden md:flex gap-6 text-sm text-white uppercase">
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
