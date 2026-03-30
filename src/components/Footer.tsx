export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Naya Fytali
        </p>
      </div>
    </footer>
  );
}
