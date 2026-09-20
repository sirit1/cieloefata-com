/** Pad de capilla. Instrumental, bajo, para no competir con la Palabra. */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let duck = 1;

function ensure() {
  if (ctx && master) return { ctx, master };
  const C = new AudioContext();
  const out = C.createGain();
  out.gain.value = 0;
  out.connect(C.destination);

  const filter = C.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 640;
  filter.Q.value = 0.6;
  filter.connect(out);

  const notes = [146.83, 220, 293.66, 174.61];
  notes.forEach((freq, i) => {
    const osc = C.createOscillator();
    const g = C.createGain();
    osc.type = i % 2 === 0 ? "sine" : "triangle";
    osc.frequency.value = freq;
    g.gain.value = i === 0 ? 0.12 : 0.055;
    osc.connect(g);
    g.connect(filter);
    osc.start();
  });

  const lfo = C.createOscillator();
  const lfoG = C.createGain();
  lfo.frequency.value = 0.07;
  lfoG.gain.value = 80;
  lfo.connect(lfoG);
  lfoG.connect(filter.frequency);
  lfo.start();

  ctx = C;
  master = out;
  return { ctx: C, master: out };
}

function target() {
  return duck * 0.055;
}

export async function fondoArrancar() {
  const { ctx: C, master: m } = ensure();
  if (C.state === "suspended") await C.resume();
  const now = C.currentTime;
  m.gain.cancelScheduledValues(now);
  m.gain.setValueAtTime(m.gain.value, now);
  m.gain.linearRampToValueAtTime(target(), now + 1.6);
}

export function fondoBajoVoz(hablando: boolean) {
  duck = hablando ? 0.38 : 1;
  if (!ctx || !master) return;
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(target(), now + 0.45);
}

export function fondoCallar() {
  if (!ctx || !master) return;
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0, now + 0.8);
}

export function silenciarResto(excepto?: HTMLMediaElement) {
  document.querySelectorAll("audio, video").forEach((el) => {
    const m = el as HTMLMediaElement;
    if (m === excepto) return;
    m.pause();
    m.volume = Math.min(m.volume, 0.12);
  });
}
