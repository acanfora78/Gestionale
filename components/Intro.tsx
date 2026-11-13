import { IntroSkip } from "./IntroSkip";
import { WorkingCartoon } from "./WorkingCartoon";

/**
 * Sequenza d'apertura stile pellicola: conto alla rovescia 3-2-1,
 * poi la scena a cartone animato del titolare al lavoro con "Un film di FΛRGE STUDIO",
 * poi la pagina sale. Solo CSS.
 * Lo script in layout la nasconde se è già stata vista in questa sessione.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-leader">
        <div className="intro-sweep" />
        <div className="intro-count">
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
      </div>
      <div className="intro-scene">
        <WorkingCartoon uid="intro" />
        <p className="intro-title">
          Un film di
          <strong>
            F<span className="text-accent">Λ</span>RGE STUDIO
          </strong>
        </p>
      </div>
      <IntroSkip />
    </div>
  );
}
