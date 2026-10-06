import { ConLemas } from "@/components/lema";

/** Párrafo de prosa con las citas bíblicas entre asteriscos (*…*) en cursiva, como en los manuscritos. */
export function Prosa({ texto, className = "mt-5 text-lg leading-relaxed" }: { texto: string; className?: string }) {
  const partes = texto.split(/\*([^*]+)\*/g);
  return (
    <p className={className}>
      {partes.map((parte, i) =>
        i % 2 === 1 ? (
          <em key={i}>
            <ConLemas>{parte}</ConLemas>
          </em>
        ) : (
          <ConLemas key={i}>{parte}</ConLemas>
        ),
      )}
    </p>
  );
}
