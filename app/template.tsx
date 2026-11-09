/** Sipario rosso e nero che si alza a ogni cambio di pagina. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="curtain" aria-hidden="true">
        <span />
        <span />
      </div>
      {children}
    </>
  );
}
