/** Contrato con RevelatiO: el contacto se guarda en sus `leads` (Neon), no en Cielo. */
export const RECIBIR_API = "https://revelatio.app/api/casa/recibir";
export const MANA_SEMANA_API = "https://revelatio.app/api/casa/mana?semana=1";
export const MANA_URL = "https://revelatio.app/mana?casa=1";

export type RecibirPayload = {
  leadId: string;
  nombre: string;
  email?: string;
  telefono?: string;
  libro: string;
  semanal: boolean;
  consentimiento: true;
  origen: string;
};

export function validarRecibir(input: {
  nombre: string;
  email: string;
  telefono: string;
  semanal: boolean;
  consentimiento: boolean;
}): string | null {
  if (!input.nombre.trim()) return "Escribe tu nombre.";
  const email = input.email.trim();
  const tel = input.telefono.replace(/\D/g, "");
  if (!email && !tel) return "Deja un correo o un WhatsApp.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "Revisa el correo.";
  if (input.telefono.trim() && tel.length < 8) return "Revisa el número de WhatsApp, con su código de país.";
  if (input.semanal && !tel) return "El pasaje de la semana llega por WhatsApp: deja tu número.";
  if (!input.consentimiento) return "Marca la casilla de consentimiento para descargarlo.";
  return null;
}

export function leadIdLocal(): string {
  const KEY = "cielo-lead-id";
  try {
    const prev = localStorage.getItem(KEY);
    if (prev) return prev;
    const id = `cielo_${crypto.randomUUID().replace(/-/g, "")}`;
    localStorage.setItem(KEY, id);
    return id;
  } catch {
    return `cielo_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  }
}
