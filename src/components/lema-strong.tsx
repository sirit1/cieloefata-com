import { ConLemas } from "@/components/lema";
import { strongDe } from "@/lib/strong";

export function LemaStrong({ orig, sense }: { orig: string; sense: string }) {
  const tokens = orig.split(/\s+/).filter(Boolean);
  return (
    <li className="border-t border-rule/40 py-5">
      <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
        {tokens.map((t) => {
          const e = strongDe(t);
          return (
            <span key={t} className="inline-flex min-w-[6rem] flex-col">
              <span className="font-serif text-2xl italic text-[var(--color-verse)]">
                <ConLemas>{t}</ConLemas>
              </span>
              {e ? (
                <span className="mt-1 font-sans text-xs tracking-[0.12em] text-gold uppercase">
                  {e.strong}
                </span>
              ) : null}
              {e ? (
                <span className="mt-0.5 text-sm text-ink-soft">{e.gloss}</span>
              ) : null}
            </span>
          );
        })}
      </div>
      <p className="mt-3 leading-relaxed">
        <ConLemas>{sense}</ConLemas>
      </p>
    </li>
  );
}
