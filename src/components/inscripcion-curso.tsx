import { useState, type FormEvent } from "react";
import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { authClient, authEnabled, signIn } from "@/lib/auth/client";
import { GROK_PROVIDERS } from "@/lib/auth/providers";
import { mensajeAuth, validarInscripcion } from "@/lib/curso/acceso";

type Modo = "crear" | "entrar";
type ErrorAuth = { code?: string; message?: string } | null;

export function InscripcionCurso({
  volver,
  breve = false,
}: {
  volver?: string;
  breve?: boolean;
}) {
  const router = useRouter();
  const aqui = useRouterState({ select: (s) => s.location.pathname });
  const destino = volver && volver.startsWith("/") && !volver.startsWith("//") ? volver : aqui;
  const [modo, setModo] = useState<Modo>("crear");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [consentimiento, setConsentimiento] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    const msg = validarInscripcion({ nombre, email, contrasena, consentimiento, modo });
    setError(msg);
    if (msg) return;
    setEnviando(true);
    const correo = email.trim();
    const resultado =
      modo === "crear"
        ? await authClient.signUp.email({
            name: nombre.trim(),
            email: correo,
            password: contrasena,
            callbackURL: destino,
          })
        : await authClient.signIn.email({
            email: correo,
            password: contrasena,
            callbackURL: destino,
          });
    if (resultado.error) {
      setError(mensajeAuth(resultado.error as ErrorAuth, modo));
      setEnviando(false);
      return;
    }
    try {
      await authClient.getSession();
    } catch {
      /* la cookie ya quedó; la lección se pide de nuevo */
    }
    await router.invalidate();
    setEnviando(false);
  }

  const campo = "mt-2 min-h-12 w-full border border-rule bg-paper px-3";
  return (
    <section className="mt-8 max-w-[40em] border border-rule p-6" aria-labelledby="inscripcion-titulo">
      <h2 id="inscripcion-titulo" className="font-serif text-2xl">
        {modo === "crear" ? "Para seguir" : "Entrar a la cuenta"}
      </h2>
      <p className="mt-3 leading-relaxed">
        {breve
          ? "La cuenta del curso es la del cuaderno: el nombre y el correo. El curso no se cobra."
          : "La primera lección está abierta. Para seguir, el estudiante deja su nombre y su correo. Es la misma cuenta del cuaderno. El curso no se cobra. No hay rachas ni plazos."}
      </p>
      <form onSubmit={enviar} className="mt-5 space-y-5" noValidate>
        {modo === "crear" ? (
          <div>
            <label htmlFor="cuenta-nombre" className="kicker block">
              Nombre
            </label>
            <input
              id="cuenta-nombre"
              name="name"
              autoComplete="name"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={campo}
            />
          </div>
        ) : null}
        <div>
          <label htmlFor="cuenta-email" className="kicker block">
            Correo
          </label>
          <input
            id="cuenta-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={campo}
          />
        </div>
        <div>
          <label htmlFor="cuenta-contrasena" className="kicker block">
            Contraseña
          </label>
          <input
            id="cuenta-contrasena"
            name="password"
            type="password"
            autoComplete={modo === "crear" ? "new-password" : "current-password"}
            required
            minLength={8}
            maxLength={128}
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className={campo}
          />
          <p className="mt-2 text-sm text-ink-soft">
            Sirve para volver a esta misma cuenta, donde quedan el cuaderno y las lecciones.
          </p>
        </div>
        {modo === "crear" ? (
          <label className="flex items-start gap-3 leading-relaxed">
            <input
              type="checkbox"
              checked={consentimiento}
              onChange={(e) => setConsentimiento(e.target.checked)}
              className="mt-1.5 h-5 w-5"
            />
            <span>
              Acepto que la escuela guarde mi nombre y mi correo en la cuenta del curso, para reconocerme cuando vuelva y
              para el cuaderno.{" "}
              <Link to="/privacidad" className="text-link underline">
                Privacidad
              </Link>
            </span>
          </label>
        ) : null}
        {error ? (
          <p role="alert" className="font-sans text-sm text-red-800">
            {error}
          </p>
        ) : null}
        <button type="submit" className="btn btn-gold" disabled={enviando}>
          {enviando ? "Un momento…" : modo === "crear" ? "Abrir la cuenta" : "Entrar"}
        </button>
      </form>
      <p className="mt-5 font-sans text-sm">
        <button
          type="button"
          className="text-link underline"
          onClick={() => {
            setModo(modo === "crear" ? "entrar" : "crear");
            setError(null);
          }}
        >
          {modo === "crear" ? "Ya tengo cuenta" : "Abrir una cuenta nueva"}
        </button>
      </p>
      {authEnabled ? (
        <p className="mt-4 font-sans text-sm">
          Si la cuenta del cuaderno ya está abierta con Google o con X, entra por ahí. Es la misma cuenta.{" "}
          {GROK_PROVIDERS.map((p, i) => (
            <span key={p.providerId}>
              {i > 0 ? " · " : null}
              <button
                type="button"
                className="text-link underline"
                onClick={() => void signIn(p.providerId, { callbackURL: destino })}
              >
                Entrar con {p.label}
              </button>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}
