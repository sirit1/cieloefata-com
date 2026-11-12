import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { encabezadosCuenta } from "@/lib/cuaderno-cuenta";
import { apartadoEnVista, citaDeLaSeccionVisible } from "@/lib/cuaderno-dom";
import {
  ESTANTES,
  contextoEscuela,
  contextoLectura,
  contextoMana,
  fechaValida,
  moduloDeDia,
  type ContextoNota,
  type Estante,
  type NotaEstudio,
} from "@/lib/cuaderno-estudio";
import {
  borrarNotaEstudio,
  confirmarExportacionCuaderno,
  crearNotaEstudio,
  editarNotaEstudio,
  listarNotasEstudio,
  type EstadoCuaderno,
} from "@/lib/cuaderno-estudio.functions";
import { MANA_SEMANA_API, MANA_URL } from "@/lib/recibir";

type Leccion = { n: number; titulo: string; cita: string };
type AudioLocal = { blob: Blob; mime: string; url: string };
type Mana = { ref: string; texto: string };

type Reconocedor = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult:
    | ((ev: {
        results: ArrayLike<{ isFinal: boolean; 0?: { transcript?: string } }>;
      }) => void)
    | null;
};

export function CuadernoLado({ dia }: { dia: Leccion }) {
  const [abierto, setAbierto] = useState(false);
  const abrirRef = useRef<HTMLButtonElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;
    cerrarRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAbierto(false);
        abrirRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <div className={abierto ? "cuaderno-ancla abierto" : "cuaderno-ancla"}>
      <button
        ref={abrirRef}
        type="button"
        className="cuaderno-abrir"
        aria-expanded={abierto}
        aria-controls="cuaderno-estudio"
        onClick={() => setAbierto(true)}
      >
        Cuaderno
      </button>
      {abierto ? (
        <button
          type="button"
          className="cuaderno-velo"
          aria-label="Cerrar el cuaderno"
          onClick={() => setAbierto(false)}
        />
      ) : null}
      <aside
        id="cuaderno-estudio"
        className="cuaderno-lado"
        role={abierto ? "dialog" : "complementary"}
        aria-modal={abierto ? true : undefined}
        aria-label="Cuaderno de estudio"
      >
        <button
          ref={cerrarRef}
          type="button"
          className="cuaderno-cerrar"
          onClick={() => {
            setAbierto(false);
            abrirRef.current?.focus();
          }}
        >
          Cerrar
        </button>
        <CuadernoEstudio leccion={dia} />
      </aside>
    </div>
  );
}

export function CuadernoEstudio({ leccion }: { leccion: Leccion | null }) {
  const baseId = useId();
  const { user, isPending } = useCurrentUserState();
  const conCuenta = Boolean(user) && (!authEnabled || !user?.isDevFallback);
  const [estante, setEstante] = useState<Estante>(
    leccion ? "escuela" : "escuela",
  );
  const [notas, setNotas] = useState<NotaEstudio[]>([]);
  const [estado, setEstado] = useState<EstadoCuaderno | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [texto, setTexto] = useState("");
  const [textoSel, setTextoSel] = useState("");
  const [selBloqueada, setSelBloqueada] = useState(false);
  const [contextoSesion, setContextoSesion] = useState<ContextoNota | null>(
    null,
  );
  const [fecha, setFecha] = useState("");
  const [pasaje, setPasaje] = useState("");
  const [diaManual, setDiaManual] = useState("");
  const [tituloManual, setTituloManual] = useState("");
  const [seccionManual, setSeccionManual] = useState("");
  const [citaManual, setCitaManual] = useState("");
  const [refMana, setRefMana] = useState("");
  const [incluirMana, setIncluirMana] = useState(true);
  const [seccion, setSeccion] = useState("");
  const [soloDia, setSoloDia] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [exportando, setExportando] = useState(false);
  const [audioPendiente, setAudioPendiente] = useState<AudioLocal | null>(null);
  const [grabando, setGrabando] = useState(false);
  const [sinDictado, setSinDictado] = useState(false);
  const [mana, setMana] = useState<Mana | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTexto, setEditTexto] = useState("");
  const [borrarId, setBorrarId] = useState<string | null>(null);
  const [avisoPulsado, setAvisoPulsado] = useState(false);
  const recRef = useRef<MediaRecorder | null>(null);
  const vozRef = useRef<Reconocedor | null>(null);
  const trozos = useRef<Blob[]>([]);
  const dictado = useRef("");
  const audioRef = useRef<AudioLocal | null>(null);
  audioRef.current = audioPendiente;

  useEffect(() => {
    let vivo = true;
    fetch(MANA_SEMANA_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Partial<Mana> | null) => {
        if (vivo && d?.ref && d?.texto) setMana({ ref: d.ref, texto: d.texto });
      })
      .catch(() => undefined);
    return () => {
      vivo = false;
    };
  }, []);

  useEffect(() => {
    if (!leccion) return;
    const actualizar = () => {
      const visto = apartadoEnVista();
      if (visto.seccion) setSeccion(visto.seccion);
    };
    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => {
      window.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
    };
  }, [leccion]);

  useEffect(() => {
    if (isPending || !conCuenta) {
      if (!isPending) {
        setNotas([]);
        setEstado(null);
      }
      return;
    }
    let vivo = true;
    setCargando(true);
    listarNotasEstudio()
      .then((res) => {
        if (!vivo) return;
        setNotas(res.notas);
        setEstado(res.estado);
        setError("");
      })
      .catch((err) => {
        if (vivo) setError(mensajeError(err));
      })
      .finally(() => {
        if (vivo) setCargando(false);
      });
    return () => {
      vivo = false;
    };
  }, [conCuenta, isPending, user?.id]);

  useEffect(() => {
    const onBorrador = (ev: Event) => {
      const detalle = (ev as CustomEvent<ContextoNota>).detail;
      if (!detalle?.shelf) return;
      setEstante(detalle.shelf);
      setContextoSesion(detalle);
      setTextoSel(detalle.textoSeleccionado);
      setSelBloqueada(Boolean(detalle.textoSeleccionado));
      setAvisoPulsado(true);
    };
    const onActualizado = () => {
      if (!conCuenta) return;
      listarNotasEstudio()
        .then((res) => {
          setNotas(res.notas);
          setEstado(res.estado);
        })
        .catch(() => undefined);
    };
    window.addEventListener("cuaderno-estudio-borrador", onBorrador);
    window.addEventListener("cuaderno-estudio-actualizado", onActualizado);
    return () => {
      window.removeEventListener("cuaderno-estudio-borrador", onBorrador);
      window.removeEventListener("cuaderno-estudio-actualizado", onActualizado);
    };
  }, [conCuenta]);

  useEffect(() => {
    return () => {
      try {
        recRef.current?.stop();
      } catch {
        /* la grabación ya terminó */
      }
      try {
        vozRef.current?.stop();
      } catch {
        /* el reconocimiento ya terminó */
      }
      if (audioRef.current) URL.revokeObjectURL(audioRef.current.url);
    };
  }, []);

  function contextoParaGuardar(): ContextoNota {
    if (contextoSesion && contextoSesion.shelf === estante) {
      return {
        ...contextoSesion,
        textoSeleccionado: textoSel || contextoSesion.textoSeleccionado,
      };
    }
    if (estante === "escuela") {
      const dia = leccion?.n ?? Number(diaManual);
      const visto = leccion ? apartadoEnVista() : null;
      const seccionUsada = visto?.seccion || (leccion ? seccion : seccionManual);
      const enMemoria = visto ? visto.enMemoria : seccionUsada === "Versículo para memorizar";
      return contextoEscuela({
        dia: Number.isFinite(dia) ? dia : 0,
        titulo: leccion?.titulo ?? tituloManual,
        seccion: seccionUsada,
        citaMemoria: enMemoria && leccion ? leccion.cita : citaManual,
        citaEnBloque: leccion ? citaDeLaSeccionVisible(seccionUsada) : "",
        textoSeleccionado: textoSel,
      });
    }
    if (estante === "mana") {
      const ref = mana?.ref || refMana;
      const mostrado = incluirMana && mana?.texto ? mana.texto : "";
      return contextoMana({
        ref,
        textoSeleccionado: textoSel || mostrado,
        fuente: ref ? `Maná · ${ref}` : "Maná",
      });
    }
    return contextoLectura({
      fecha,
      pasaje,
      textoSeleccionado: textoSel,
      referencia: pasaje,
    });
  }

  async function guardar(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!conCuenta) {
      setAvisoPulsado(true);
      return;
    }
    if (estante === "lectura" && !fechaValida(fecha)) {
      setError(
        "Indica la fecha de la lectura. No hay un plan armado: la escribes tú.",
      );
      return;
    }
    if (estante === "lectura" && !pasaje.trim()) {
      setError("Indica el pasaje que estás leyendo, tal como lo nombras.");
      return;
    }
    if (estante === "mana" && !(mana?.ref || refMana.trim())) {
      setError("Indica la referencia del maná, tal como la ves en RevelatiO.");
      return;
    }
    setGuardando(true);
    try {
      const ctx = contextoParaGuardar();
      let audioBase64: string | undefined;
      let audioMime: string | undefined;
      if (audioPendiente) {
        audioBase64 = await blobABase64(audioPendiente.blob);
        audioMime = audioPendiente.mime;
      }
      const res = await crearNotaEstudio({
        data: { ...ctx, texto: texto.trim(), audioBase64, audioMime },
      });
      setNotas(res.notas);
      setEstado(res.estado);
      setTexto("");
      setTextoSel("");
      setSelBloqueada(false);
      setContextoSesion(null);
      setPasaje("");
      setCitaManual("");
      limpiarAudio();
      setSinDictado(false);
    } catch (err) {
      setError(mensajeError(err));
    } finally {
      setGuardando(false);
    }
  }

  function limpiarAudio() {
    setAudioPendiente((prev) => {
      if (prev) URL.revokeObjectURL(prev.url);
      return null;
    });
  }

  async function alternarGrabacion() {
    setError("");
    if (grabando) {
      try {
        recRef.current?.stop();
      } catch {
        setGrabando(false);
      }
      try {
        vozRef.current?.stop();
      } catch {
        /* sin reconocimiento */
      }
      return;
    }
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setError("Este navegador no puede grabar. Puedes escribir la nota.");
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError(
        "El navegador no permitió el micrófono. Puedes escribir la nota.",
      );
      return;
    }
    dictado.current = "";
    trozos.current = [];
    const Ctor = ctorVoz();
    if (!Ctor) setSinDictado(true);
    else {
      const voz = new Ctor();
      voz.lang = "es-MX";
      voz.continuous = true;
      voz.interimResults = true;
      voz.onresult = (ev) => {
        let final = "";
        for (let i = 0; i < ev.results.length; i += 1) {
          const fila = ev.results[i];
          if (fila?.isFinal) final += fila[0]?.transcript ?? "";
        }
        if (final.trim()) {
          dictado.current = final.replace(/\s+/g, " ").trim();
          setTexto(dictado.current);
        }
      };
      try {
        voz.start();
        vozRef.current = voz;
        setSinDictado(false);
      } catch {
        setSinDictado(true);
      }
    }
    const mime = elegirMime();
    const rec = mime
      ? new MediaRecorder(stream, { mimeType: mime })
      : new MediaRecorder(stream);
    rec.ondataavailable = (ev) => {
      if (ev.data.size > 0) trozos.current.push(ev.data);
    };
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      const type = (rec.mimeType || "audio/webm").split(";")[0] || "audio/webm";
      const blob = new Blob(trozos.current, { type });
      const url = URL.createObjectURL(blob);
      setAudioPendiente((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return { blob, mime: type, url };
      });
      if (dictado.current) setTexto(dictado.current);
      setGrabando(false);
    };
    recRef.current = rec;
    rec.start();
    setGrabando(true);
  }

  async function exportar() {
    setExportando(true);
    setError("");
    try {
      const res = await fetch("/api/cuaderno/exportar", {
        headers: encabezadosCuenta(),
      });
      if (!res.ok)
        throw new Error("No se pudo generar el PDF desde la cuenta.");
      const blob = await res.blob();
      if (blob.size < 80)
        throw new Error("El PDF llegó vacío. No se registró la exportación.");
      const dispo = res.headers.get("Content-Disposition") ?? "";
      const nombre =
        /filename="([^"]+)"/.exec(dispo)?.[1] ?? "Cuaderno_Cielo_Efata.pdf";
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = nombre;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      await confirmarExportacionCuaderno();
      const lista = await listarNotasEstudio();
      setNotas(lista.notas);
      setEstado(lista.estado);
    } catch (err) {
      setError(mensajeError(err));
    } finally {
      setExportando(false);
    }
  }

  const q = busqueda.trim().toLowerCase();
  const delEstante = notas.filter((n) => {
    if (n.shelf !== estante) return false;
    if (estante === "escuela" && leccion && soloDia && n.dia !== leccion.n)
      return false;
    if (!q) return true;
    const bolsa = [
      n.texto,
      n.fuente,
      n.referencia,
      n.textoSeleccionado,
      n.seccion,
      n.pasaje,
      n.manaRef,
      n.tituloDia,
    ]
      .join(" ")
      .toLowerCase();
    return bolsa.includes(q);
  });
  const grupos = agrupar(delEstante, estante);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const callback = `${pathname}${searchStr}`;
  const citaVisible =
    leccion && estante === "escuela"
      ? citaDeLaSeccionVisible(seccion) ||
        (seccion === "Versículo para memorizar" ? leccion.cita : "")
      : "";

  return (
    <div className="cuaderno-panel">
      <p className="cuaderno-kicker">Cuaderno de estudio</p>
      <h2 className="cuaderno-titulo">Tres estantes, una cuenta</h2>
      <p className="cuaderno-lead">
        Escuela, lectura diaria y maná. Si hay cuenta, las notas viven en ella y
        se ven en cualquier aparato donde entres. Al salir, dejan de verse hasta
        que vuelves a entrar.
      </p>

      {isPending ? (
        <p className="cuaderno-meta">Comprobando la cuenta…</p>
      ) : null}

      {!isPending && !conCuenta ? (
        <div
          className={
            avisoPulsado
              ? "cuaderno-aviso cuaderno-aviso-fuerte"
              : "cuaderno-aviso"
          }
          role="alert"
        >
          <p className="cuaderno-aviso-titulo">
            Sin una cuenta, estas notas se pierden.
          </p>
          <p>
            El cuaderno de estudio no se guarda en este aparato. Si no abres una
            cuenta, lo que escribas o grabes desaparece al salir de la página.
            No queda guardado.
          </p>
          <BotonesCuenta callbackURL={callback} />
        </div>
      ) : null}

      {conCuenta && estado && estado.borradas > 0 ? (
        <div className="cuaderno-aviso cuaderno-aviso-ultimo" role="alert">
          <p className="cuaderno-aviso-titulo">
            Las notas de estudio se borraron.
          </p>
          <p>
            Pasaron 24 horas desde el último aviso y no hubo una exportación. Se
            eliminaron el texto y el audio. La cuenta sigue abierta. Lo que
            guardes ahora empieza otro ciclo.
          </p>
        </div>
      ) : null}

      {conCuenta &&
      estado?.borradoEn &&
      estado.borradas === 0 &&
      notas.length === 0 ? (
        <div className="cuaderno-aviso cuaderno-aviso-ultimo" role="alert">
          <p className="cuaderno-aviso-titulo">
            Las notas de estudio se borraron.
          </p>
          <p>
            El {fechaHumana(estado.borradoEn)} se cumplieron 24 horas desde el
            último aviso, sin exportación. La cuenta quedó limpia de notas. La
            cuenta misma sigue abierta.
          </p>
        </div>
      ) : null}

      {conCuenta && estado?.fase === "ultimo" ? (
        <div className="cuaderno-aviso cuaderno-aviso-ultimo" role="alert">
          <p className="cuaderno-aviso-titulo">
            Último aviso: te quedan 24 horas.
          </p>
          <p>
            Si no exportas el cuaderno completo
            {estado.borraEn ? ` antes del ${fechaHumana(estado.borraEn)}` : ""},
            se borrarán de forma permanente todas las notas de estudio, el texto
            y el audio. La cuenta queda limpia y abierta. Esta acción no se
            deshace.
          </p>
        </div>
      ) : null}

      {conCuenta && estado?.fase === "aviso" ? (
        <div className="cuaderno-aviso" role="status">
          <p className="cuaderno-aviso-titulo">
            Han pasado 30 días sin una exportación completa.
          </p>
          <p>
            Exporta todas tus notas en un solo PDF. El plazo corre desde la
            última exportación, o desde la primera nota si todavía no has
            exportado. Si llegan a 40 días y pasa un día más sin exportar, las
            notas se borran de la cuenta.
          </p>
        </div>
      ) : null}

      <div
        className="cuaderno-estantes"
        role="tablist"
        aria-label="Estantes del cuaderno"
      >
        {ESTANTES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-selected={estante === item.id}
            className={
              estante === item.id
                ? "cuaderno-estante activo"
                : "cuaderno-estante"
            }
            onClick={() => {
              if (item.id !== estante && selBloqueada) {
                setTextoSel("");
                setSelBloqueada(false);
                setContextoSesion(null);
              }
              setEstante(item.id);
            }}
          >
            {item.nombre}
          </button>
        ))}
      </div>

      {leccion && estante === "escuela" ? (
        <p className="cuaderno-seccion" aria-live="polite">
          Estás en: {seccion || "el comienzo de la lección"}. La nota guarda el
          día {leccion.n}
          {seccion ? `, la sección «${seccion}»` : ""}
          {citaVisible ? ` y la cita «${citaVisible}»` : ""}.
        </p>
      ) : null}

      <form onSubmit={guardar} noValidate className="cuaderno-form">
        {estante === "escuela" && leccion ? (
          <p className="cuaderno-meta">
            Día {leccion.n}: {leccion.titulo}
          </p>
        ) : null}
        {estante === "escuela" && !leccion ? (
          <>
            <label className="cuaderno-campo" htmlFor={`${baseId}-dia`}>
              Día del curso
              <input
                id={`${baseId}-dia`}
                inputMode="numeric"
                value={diaManual}
                onChange={(e) => setDiaManual(e.target.value)}
                placeholder="Número de día, si lo sabes"
              />
            </label>
            <label className="cuaderno-campo" htmlFor={`${baseId}-titulo`}>
              Título del día
              <input
                id={`${baseId}-titulo`}
                value={tituloManual}
                onChange={(e) => setTituloManual(e.target.value)}
              />
            </label>
            <label className="cuaderno-campo" htmlFor={`${baseId}-seccion`}>
              Sección
              <input
                id={`${baseId}-seccion`}
                value={seccionManual}
                onChange={(e) => setSeccionManual(e.target.value)}
              />
            </label>
            <label className="cuaderno-campo" htmlFor={`${baseId}-cita`}>
              Versículo citado, si lo copias tal como está
              <input
                id={`${baseId}-cita`}
                value={citaManual}
                onChange={(e) => setCitaManual(e.target.value)}
              />
            </label>
          </>
        ) : null}

        {estante === "lectura" ? (
          <>
            <label className="cuaderno-campo" htmlFor={`${baseId}-fecha`}>
              Fecha de la lectura
              <input
                id={`${baseId}-fecha`}
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>
            <label className="cuaderno-campo" htmlFor={`${baseId}-pasaje`}>
              Pasaje que estás leyendo
              <input
                id={`${baseId}-pasaje`}
                value={pasaje}
                onChange={(e) => setPasaje(e.target.value)}
                placeholder="El libro, el capítulo y el versículo, como tú los nombras"
              />
            </label>
            <p className="cuaderno-meta">
              No hay un plan de lectura armado. Escribes el pasaje y la fecha.
            </p>
          </>
        ) : null}

        {estante === "mana" ? (
          <div
            className="cuaderno-mana"
            data-cuaderno-shelf="mana"
            data-ref={mana?.ref ?? ""}
          >
            {mana ? (
              <>
                <p className="cuaderno-meta">Maná de RevelatiO · {mana.ref}</p>
                <blockquote>«{mana.texto}»</blockquote>
                <label className="cuaderno-check">
                  <input
                    type="checkbox"
                    checked={incluirMana}
                    onChange={(e) => setIncluirMana(e.target.checked)}
                  />
                  Guardar este texto tal como llegó, sin parafrasearlo
                </label>
              </>
            ) : (
              <>
                <p className="cuaderno-meta">
                  El maná sale de RevelatiO. Aquí no hay otra lista.
                </p>
                <p>
                  <a href={MANA_URL} rel="noopener noreferrer">
                    Abrir el maná en RevelatiO
                  </a>
                </p>
                <label className="cuaderno-campo" htmlFor={`${baseId}-mana`}>
                  Referencia del maná, tal como la ves
                  <input
                    id={`${baseId}-mana`}
                    value={refMana}
                    onChange={(e) => setRefMana(e.target.value)}
                  />
                </label>
              </>
            )}
          </div>
        ) : null}

        <label className="cuaderno-campo" htmlFor={`${baseId}-nota`}>
          Tu nota
          <textarea
            id={`${baseId}-nota`}
            rows={4}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </label>

        {estante === "lectura" ? (
          <label className="cuaderno-campo" htmlFor={`${baseId}-sel`}>
            Texto del pasaje, si lo pegas tal como lo lees
            <textarea
              id={`${baseId}-sel`}
              rows={3}
              value={textoSel}
              onChange={(e) => setTextoSel(e.target.value)}
            />
          </label>
        ) : textoSel ? (
          <div className="cuaderno-seleccion">
            <p className="cuaderno-kicker">Texto seleccionado</p>
            <p>{textoSel}</p>
            {selBloqueada ? (
              <button
                type="button"
                className="cuaderno-link"
                onClick={() => {
                  setTextoSel("");
                  setSelBloqueada(false);
                  setContextoSesion(null);
                }}
              >
                Quitar la selección de este borrador
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="cuaderno-voz">
          <button
            type="button"
            className="cuaderno-btn"
            aria-pressed={grabando}
            onClick={() => void alternarGrabacion()}
          >
            {grabando ? "Detener la grabación" : "Grabar nota de voz"}
          </button>
          {sinDictado ? (
            <p className="cuaderno-meta">
              Este navegador no transcribe (se pidió es-MX). El audio puede
              guardarse en la cuenta y la nota se escribe a mano.
            </p>
          ) : null}
          {audioPendiente ? (
            <>
              <audio
                controls
                src={audioPendiente.url}
                className="cuaderno-audio"
              />
              {!conCuenta ? (
                <p className="cuaderno-meta">
                  Este audio solo está en esta página. Si sales, se pierde. No
                  es la copia de la cuenta.
                </p>
              ) : (
                <p className="cuaderno-meta">
                  Al guardar, el audio queda en la cuenta, no en el aparato.
                </p>
              )}
            </>
          ) : null}
        </div>

        <button
          type="submit"
          className="cuaderno-btn cuaderno-btn-principal"
          disabled={guardando || grabando}
        >
          {conCuenta
            ? guardando
              ? "Guardando en la cuenta…"
              : "Guardar en la cuenta"
            : "No se puede guardar sin cuenta"}
        </button>
      </form>

      {error ? (
        <p className="cuaderno-error" role="alert">
          {error}
        </p>
      ) : null}

      {conCuenta ? (
        <div className="cuaderno-exportar">
          <button
            type="button"
            className="cuaderno-btn"
            onClick={() => void exportar()}
            disabled={exportando}
          >
            {exportando
              ? "Preparando el PDF…"
              : "Exportar todo el cuaderno (PDF)"}
          </button>
          <p className="cuaderno-meta">
            Un solo archivo, con los tres estantes, las fechas, el texto, la
            fuente, el texto seleccionado y la referencia. Las notas de voz se
            mencionan.
          </p>
        </div>
      ) : null}

      <label className="cuaderno-campo" htmlFor={`${baseId}-buscar`}>
        Buscar en {ESTANTES.find((e) => e.id === estante)?.nombre}
        <input
          id={`${baseId}-buscar`}
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Palabra, pasaje o día"
        />
      </label>
      {leccion && estante === "escuela" ? (
        <label className="cuaderno-check">
          <input
            type="checkbox"
            checked={soloDia}
            onChange={(e) => setSoloDia(e.target.checked)}
          />
          Solo el día {leccion.n}
        </label>
      ) : null}

      {cargando ? (
        <p className="cuaderno-meta">Cargando las notas de la cuenta…</p>
      ) : null}
      {!cargando && grupos.length === 0 ? (
        <p className="cuaderno-meta">
          Todavía no hay notas en este estante{q ? " con esa búsqueda" : ""}.
        </p>
      ) : (
        grupos.map((grupo) => (
          <section key={grupo.titulo} className="cuaderno-grupo">
            <h3>{grupo.titulo}</h3>
            <ul>
              {grupo.notas.map((nota) => (
                <li key={nota.id} className="cuaderno-nota">
                  <p className="cuaderno-meta">{fechaHumana(nota.createdAt)}</p>
                  {editId === nota.id ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        void editarNotaEstudio({
                          data: { id: nota.id, texto: editTexto },
                        })
                          .then(() => listarNotasEstudio())
                          .then((res) => {
                            setNotas(res.notas);
                            setEstado(res.estado);
                            setEditId(null);
                          })
                          .catch((err) => setError(mensajeError(err)));
                      }}
                    >
                      <label
                        className="cuaderno-campo"
                        htmlFor={`${baseId}-edit-${nota.id}`}
                      >
                        Tu nota
                        <textarea
                          id={`${baseId}-edit-${nota.id}`}
                          rows={3}
                          value={editTexto}
                          onChange={(ev) => setEditTexto(ev.target.value)}
                        />
                      </label>
                      <button type="submit" className="cuaderno-btn">
                        Guardar el cambio
                      </button>
                    </form>
                  ) : (
                    <p className="cuaderno-cuerpo">
                      {nota.texto.trim() || "Sin texto escrito."}
                    </p>
                  )}
                  <p>
                    <span className="cuaderno-kicker">Qué se consultó</span>{" "}
                    {nota.fuente || "—"}
                  </p>
                  <p>
                    <span className="cuaderno-kicker">Texto seleccionado</span>{" "}
                    {nota.textoSeleccionado.trim() || "Sin texto seleccionado."}
                  </p>
                  <p>
                    <span className="cuaderno-kicker">
                      Capítulo o versículo
                    </span>{" "}
                    {nota.referencia || "—"}
                  </p>
                  {nota.tieneAudio ? <Reproductor id={nota.id} /> : null}
                  <div className="cuaderno-acciones">
                    <button
                      type="button"
                      className="cuaderno-link"
                      onClick={() => {
                        setEditId(nota.id);
                        setEditTexto(nota.texto);
                      }}
                    >
                      Editar la nota
                    </button>
                    {borrarId === nota.id ? (
                      <>
                        <p className="cuaderno-meta">
                          Se borrará de la cuenta, el texto y el audio.
                        </p>
                        <button
                          type="button"
                          className="cuaderno-link"
                          onClick={() => {
                            void borrarNotaEstudio({ data: { id: nota.id } })
                              .then(() => listarNotasEstudio())
                              .then((res) => {
                                setNotas(res.notas);
                                setEstado(res.estado);
                                setBorrarId(null);
                              })
                              .catch((err) => setError(mensajeError(err)));
                          }}
                        >
                          Confirmar el borrado
                        </button>
                        <button
                          type="button"
                          className="cuaderno-link"
                          onClick={() => setBorrarId(null)}
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        className="cuaderno-link"
                        onClick={() => setBorrarId(nota.id)}
                      >
                        Borrar de la cuenta
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
      <p className="cuaderno-pie">
        Las notas de estudio tienen su fuente en la cuenta, no en este aparato.
      </p>
    </div>
  );
}

function Reproductor({ id }: { id: string }) {
  const [pedir, setPedir] = useState(false);
  if (!pedir) {
    return (
      <button
        type="button"
        className="cuaderno-link"
        onClick={() => setPedir(true)}
      >
        Oír la nota de voz de la cuenta
      </button>
    );
  }
  return <AudioCuenta id={id} />;
}

function AudioCuenta({ id }: { id: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [fallo, setFallo] = useState(false);
  useEffect(() => {
    let vivo = true;
    let obj: string | null = null;
    fetch(`/api/cuaderno/audio/${id}`, { headers: encabezadosCuenta() })
      .then(async (res) => {
        if (!res.ok) throw new Error("sin audio");
        const blob = await res.blob();
        obj = URL.createObjectURL(blob);
        if (vivo) setUrl(obj);
      })
      .catch(() => {
        if (vivo) setFallo(true);
      });
    return () => {
      vivo = false;
      if (obj) URL.revokeObjectURL(obj);
    };
  }, [id]);
  if (fallo)
    return (
      <p className="cuaderno-meta">No se pudo leer el audio de la cuenta.</p>
    );
  if (!url)
    return <p className="cuaderno-meta">Cargando el audio de la cuenta…</p>;
  return <audio controls src={url} preload="none" className="cuaderno-audio" />;
}

function BotonesCuenta({ callbackURL }: { callbackURL: string }) {
  return (
    <div className="cuaderno-cuentas">
      <p className="cuaderno-kicker">Crear o abrir una cuenta</p>
      {GROK_PROVIDERS.map((p) => (
        <button
          key={p.providerId}
          type="button"
          className="cuaderno-btn"
          onClick={() => void signIn(p.providerId, { callbackURL })}
        >
          Entrar con {p.label}
        </button>
      ))}
    </div>
  );
}

function agrupar(
  notas: NotaEstudio[],
  estante: Estante,
): { titulo: string; notas: NotaEstudio[] }[] {
  const map = new Map<string, NotaEstudio[]>();
  const ordenadas = notas.slice().sort((a, b) => {
    if (estante === "escuela" && (a.dia ?? 999) !== (b.dia ?? 999))
      return (a.dia ?? 999) - (b.dia ?? 999);
    if (
      estante === "lectura" &&
      (a.fechaLectura ?? "") !== (b.fechaLectura ?? "")
    ) {
      return (b.fechaLectura ?? "").localeCompare(a.fechaLectura ?? "");
    }
    if (estante === "mana" && a.manaRef !== b.manaRef)
      return a.manaRef.localeCompare(b.manaRef, "es");
    return b.createdAt.localeCompare(a.createdAt);
  });
  for (const nota of ordenadas) {
    let titulo = "Notas";
    if (estante === "escuela") {
      titulo = `${moduloDeDia(nota.dia)} · ${nota.dia ? `Día ${nota.dia}` : "Sin día"}${nota.tituloDia ? `: ${nota.tituloDia}` : ""}`;
    } else if (estante === "lectura") {
      titulo =
        [nota.fechaLectura, nota.pasaje].filter(Boolean).join(" · ") ||
        "Sin fecha ni pasaje";
    } else {
      titulo = nota.manaRef ? `Maná · ${nota.manaRef}` : "Maná sin referencia";
    }
    const lista = map.get(titulo) ?? [];
    lista.push(nota);
    map.set(titulo, lista);
  }
  return [...map.entries()].map(([titulo, items]) => ({
    titulo,
    notas: items,
  }));
}

function ctorVoz(): (new () => Reconocedor) | null {
  const w = window as Window & {
    SpeechRecognition?: new () => Reconocedor;
    webkitSpeechRecognition?: new () => Reconocedor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function elegirMime(): string {
  if (typeof MediaRecorder === "undefined") return "";
  const candidatos = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/ogg",
  ];
  return candidatos.find((c) => MediaRecorder.isTypeSupported(c)) ?? "";
}

async function blobABase64(blob: Blob): Promise<string> {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = "";
  const paso = 0x8000;
  for (let i = 0; i < bytes.length; i += paso) {
    binary += String.fromCharCode(...bytes.subarray(i, i + paso));
  }
  return btoa(binary);
}

function fechaHumana(iso: string): string {
  const fecha = new Date(iso);
  if (Number.isNaN(fecha.getTime())) return iso;
  return fecha.toLocaleString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function mensajeError(err: unknown): string {
  const texto = err instanceof Error ? err.message : "";
  if (
    !texto ||
    texto === "Unauthorized" ||
    /fetch|network|Failed/i.test(texto)
  ) {
    return "No se pudo completar la acción en la cuenta. La nota no quedó guardada en este aparato.";
  }
  return texto;
}
