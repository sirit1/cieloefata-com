import type { VoiceRole } from "@/lib/voice-split";

/** Sarah: castellano limpio. Los varones ingleses (Chris, Adam, Daniel, George) gringotizan la Escritura. */
const SARAH = "EXAVITQu4vr4xnSDxMaL";
const JORGE = "Rt1JHkPO27QCUX6Nd5bV";
const FRANCISCO = "IqlEidbJZeC8nXfSwtHV";
const ALEJANDRO = "NWqMOQLlMBaUbjKYqDZR";
const DANTE = "usTmJvQOCyW3nRcZ8OEo";

const GRINGAS = new Set([
  "iP95p4xoKVk53GoZ742B",
  "pNInz6obpgDQGcFmaJgB",
  "onwK4e9ZLuTAKqWW03F9",
  "JBFqnCBsd6RMkjVDRZzb",
  "nPczCjzI2devNBz1zQrb",
  "bIHbv24MWmeRgasZH58o",
  "TX3LPaxmHKxFdv7VOQHJ",
  "N2lVS1w4EtoT3dr4eOWO",
  "cjVigY5qzO86Huf0OWal",
]);

const FALLBACK: Record<VoiceRole, string> = {
  guide: SARAH,
  scripture: JORGE,
  divine: FRANCISCO,
};

const COLA_VARON = [JORGE, FRANCISCO, ALEJANDRO, DANTE];

export function elevenKey() {
  return (
    process.env.ELEVENLABS_API_KEY ||
    process.env.ELEVEN_API_KEY ||
    process.env.XI_API_KEY ||
    ""
  ).trim();
}

function viva(id: string) {
  const t = id.trim();
  if (!t || GRINGAS.has(t)) return "";
  return t;
}

export function elevenVoice(role: VoiceRole) {
  const hembra = viva(process.env.ELEVENLABS_VOICE_HEMBRA || "");
  const varon = viva(process.env.ELEVENLABS_VOICE_VARON || "");
  const dios = viva(process.env.ELEVENLABS_VOICE_DIOS || process.env.ELEVENLABS_VOICE_SUBLIME || "");
  if (role === "guide") return hembra || FALLBACK.guide;
  if (role === "divine") return dios || FALLBACK.divine;
  return varon || FALLBACK.scripture;
}

const SETTINGS: Record<VoiceRole, object> = {
  guide: { stability: 0.32, similarity_boost: 0.72, style: 0.45, use_speaker_boost: false, speed: 1.0 },
  scripture: { stability: 0.35, similarity_boost: 0.75, style: 0.32, use_speaker_boost: false, speed: 0.96 },
  divine: { stability: 0.42, similarity_boost: 0.8, style: 0.22, use_speaker_boost: false, speed: 0.92 },
};

function preparar(texto: string) {
  let t = texto.replace(/\s+/g, " ").trim();
  t = t.replace(/RevelatiO/gi, "Revelatio");
  t = t.replace(/Éfata/gi, "Éfata");
  t = t.replace(/YHWH/g, "Adonai");
  t = t.replace(/—/g, ". ");
  t = t.replace(/;/g, ".");
  t = t.replace(/\s+\./g, ".");
  if (!/[.!?…]$/.test(t)) t += ".";
  return t;
}

async function speak(key: string, voice: string, text: string, role: VoiceRole, withLang = true) {
  const body: Record<string, unknown> = {
    text: preparar(text),
    model_id: "eleven_multilingual_v2",
    voice_settings: SETTINGS[role],
  };
  if (withLang) body.language_code = "es";
  return fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}/stream?output_format=mp3_44100_128`, {
    method: "POST",
    signal: AbortSignal.timeout(role === "divine" ? 22000 : 18000),
    headers: {
      "xi-api-key": key,
      Accept: "audio/mpeg",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function elevenStream(text: string, role: VoiceRole) {
  const key = elevenKey();
  if (!key) return { error: "nockey" as const };
  const wanted = elevenVoice(role);
  const cola =
    role === "guide"
      ? [wanted, SARAH].filter((id, i, a) => id && a.indexOf(id) === i)
      : [wanted, ...COLA_VARON, SARAH].filter((id, i, a) => id && !GRINGAS.has(id) && a.indexOf(id) === i);
  let last = 0;
  for (const id of cola) {
    let r = await speak(key, id, text, role, true);
    if (r.status === 400) r = await speak(key, id, text, role, false);
    last = r.status;
    if (r.ok && r.body) return { stream: r.body };
    if (r.status === 401 || r.status === 403) break;
  }
  return { error: "http" as const, status: last };
}
