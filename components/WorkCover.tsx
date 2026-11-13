import Image from "next/image";
import type { Work } from "@/data/works";
import { PhoneBooking, PoolPlan } from "./BookingIllustration";
import { Parallax } from "./Parallax";

/**
 * Copertina di un lavoro, riempie il contenitore (che deve essere `relative`).
 * - Con screenshot: su telefono mostra lo screenshot mobile, da tablet in su quello desktop.
 * - Senza screenshot: logo del cliente ed eventuale illustrazione.
 */
export function WorkCover({
  work,
  preload = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  labelPosition = "right-3 bottom-3",
}: {
  work: Work;
  preload?: boolean;
  sizes?: string;
  /** Classi di posizione dell'etichetta "Schema illustrativo". */
  labelPosition?: string;
}) {
  const desktop = work.immagini.find((i) => i.tipo === "desktop");
  const mobile = work.immagini.find((i) => i.tipo === "mobile");

  if (desktop) {
    return (
      <Parallax>
        {mobile && (
          <Image
            src={mobile.src}
            alt={mobile.alt}
            fill
            loading={preload ? "eager" : "lazy"}
            fetchPriority={preload ? "high" : "auto"}
            sizes="100vw"
            className="object-cover object-top md:hidden"
          />
        )}
        <Image
          src={desktop.src}
          alt={desktop.alt}
          fill
          loading={preload ? "eager" : "lazy"}
          sizes={sizes}
          className={`object-cover object-top ${mobile ? "hidden md:block" : ""}`}
        />
      </Parallax>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b0d0e]">
      {work.illustrazione === "prenotazione-lettini" && (
        <>
          <Parallax>
            <PoolPlan className="h-full w-full opacity-70" />
          </Parallax>
          <PhoneBooking
            logo={work.logo}
            className="absolute right-[6%] bottom-[-14%] w-[44%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] sm:w-[30%] md:right-[8%] md:bottom-[-18%] md:w-[24%]"
          />
        </>
      )}
      {work.logo ? (
        /* eslint-disable-next-line @next/next/no-img-element -- SVG statico, non serve ottimizzarlo */
        <img
          src={work.logo}
          alt={`Logo ${work.nome}`}
          loading="lazy"
          decoding="async"
          className="absolute top-[14%] left-[7%] w-[56%] max-w-[520px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] sm:w-[44%] md:w-[38%]"
        />
      ) : (
        <span
          aria-hidden="true"
          data-label={work.nome}
          className="display absolute inset-0 flex items-center justify-center text-5xl text-line before:content-[attr(data-label)] md:text-7xl"
        />
      )}
      {work.illustrazione && (
        <span className={`absolute ${labelPosition} z-10 bg-ink/70 px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase`}>
          Schema illustrativo
        </span>
      )}
    </div>
  );
}
