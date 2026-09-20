import { Loader2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fondoArrancar, fondoBajoVoz, fondoCallar, silenciarResto } from "@/lib/fondo";
import { trozos, type VoiceRole, type VozParte } from "@/lib/voice-split";

function vocesLatam() {
  const es = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("es"));
  const spain = /es-es|lucia|lucía|elvira|álvaro|alvaro|castilian|españa/i;
  return es.filter((v) => !spain.test(`${v.lang} ${v.name}`));
}

function pickVoice(role: VoiceRole) {
  const es = vocesLatam();
  if (role === "guide") {
    return es.find((v) => /paulina|sabina|dalia|elena|mónica|monica|soledad/i.test(v.name)) ?? es[0] ?? null;
  }
  return es.find((v) => /jorge|juan|carlos|pablo|diego|gonzalo|luciano/i.test(v.name)) ?? es[0] ?? null;
}

function playBrowser(text: string, role: VoiceRole): Promise<void> {
  return new Promise((resolve) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.slice(0, 4000));
    u.lang = "es-MX";
    u.rate = role === "divine" ? 0.78 : role === "scripture" ? 0.88 : 0.94;
    u.pitch = role === "divine" ? 0.78 : 0.92;
    const v = pickVoice(role);
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    }
    u.onend = () => resolve();
    u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
}

async function fetchMp3(text: string, role: VoiceRole): Promise<{ bytes?: Uint8Array; noKey?: boolean }> {
  try {
    const r = await fetch("/api/voz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, role }),
    });
    if (r.status === 204) return { noKey: true };
    if (r.ok) {
      const buf = new Uint8Array(await r.arrayBuffer());
      if (buf.byteLength >= 200) return { bytes: buf };
    }
  } catch {
    /* */
  }
  return {};
}

function playBytes(el: HTMLAudioElement, bytes: Uint8Array): Promise<void> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(new Blob([bytes.buffer as ArrayBuffer], { type: "audio/mpeg" }));
    el.onended = () => {
      URL.revokeObjectURL(url);
      resolve();
    };
    el.onerror = () => {
      URL.revokeObjectURL(url);
      resolve();
    };
    el.src = url;
    silenciarResto(el);
    void el.play().catch(() => resolve());
  });
}

export function Escuchar({
  texto,
  partes,
  etiqueta = "Oír el estudio",
}: {
  texto?: string;
  partes?: VozParte[];
  etiqueta?: string;
}) {
  const [on, setOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const stop = useRef(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      stop.current = true;
      window.speechSynthesis?.cancel();
      fondoCallar();
      if (audio.current) {
        audio.current.pause();
        audio.current.removeAttribute("src");
      }
    };
  }, []);

  function halt() {
    stop.current = true;
    window.speechSynthesis.cancel();
    fondoCallar();
    if (audio.current) {
      audio.current.pause();
      audio.current.removeAttribute("src");
    }
    setOn(false);
    setLoading(false);
  }

  async function toggle() {
    if (on || loading) {
      halt();
      return;
    }
    stop.current = false;
    setLoading(true);
    setOn(true);
    silenciarResto();
    await fondoArrancar();
    fondoBajoVoz(true);

    const cola: VozParte[] =
      partes && partes.length
        ? partes
        : [{ role: "scripture", text: texto ?? "" }];

    try {
      if (!audio.current) audio.current = new Audio();
      const el = audio.current;
      el.volume = 1;

      for (const parte of cola) {
        const chunks = trozos(parte.text);
        for (const chunk of chunks) {
          if (stop.current) return;
          const got = await fetchMp3(chunk, parte.role);
          if (stop.current) return;
          if (got.bytes) {
            setLoading(false);
            fondoBajoVoz(true);
            await playBytes(el, got.bytes);
            continue;
          }
          setLoading(false);
          fondoBajoVoz(true);
          await playBrowser(chunk, parte.role);
        }
      }
    } finally {
      fondoCallar();
      if (!stop.current) {
        setOn(false);
        setLoading(false);
      }
    }
  }

  const label = loading ? "Preparando la voz" : on ? "Silenciar" : etiqueta;

  return (
    <button
      type="button"
      onClick={() => void toggle()}
      aria-pressed={on}
      aria-label={label}
      className="inline-flex min-h-11 items-center gap-2 border border-gold px-3 text-gold"
    >
      {loading ? (
        <Loader2 size={16} aria-hidden className="animate-spin" />
      ) : on ? (
        <VolumeX size={16} aria-hidden />
      ) : (
        <Volume2 size={16} aria-hidden />
      )}
      {label}
    </button>
  );
}
