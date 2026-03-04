export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[var(--color-primary)] border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Naya Fytali. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
