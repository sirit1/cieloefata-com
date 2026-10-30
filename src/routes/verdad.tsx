import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { VerdadForm } from "@/components/verdad-form";
import { RegaloVerdad } from "@/components/regalo-verdad";
import { HazloCon2 } from "@/components/hazlo-con-2";
import { registrarLlegada } from "@/lib/hazlo-con-2";
import { ANCLAS_VERDAD } from "@/components/caja-verdad";
import { LETRAS_SENCILLAS, RETO_6_DIAS, VERDAD_GUIA } from "@/lib/verdad-guia";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/verdad")({
  component: VerdadPage,
  head: () =>
    pageHead({
      path: "/verdad",
      title: tituloSeccion("Método V.E.R.D.A.D.: guía gratis y reto de 6 días"),
      description:
        "Aprende a estudiar la Biblia con seis preguntas: Ver, Entorno, Revelación, Doctrina, Argumento y Decisión. Hoja imprimible, guía gratis y reto de 6 días.",
      image: "/verdad/og-verdad.jpg",
      imageWidth: 1200,
      imageHeight: 630,
    }),
});

function VerdadPage() {
  useEffect(() => {
    const ref = registrarLlegada(window.location.search);
    if (ref) track("hazlo2_llegada", { ref });
  }, []);
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">V.E.R.D.A.D. · el método de estudio bíblico de Cielo Efata</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight md:text-6xl">La Biblia no se lee, se estudia.</h1>
      <p className="mt-3 font-serif text-2xl italic text-ink-soft">
        No solo se lee: se profundiza. Seis preguntas para abrir la Escritura.
      </p>
      <p className="mt-6 text-lg leading-relaxed">
        Un método para leer la Biblia por capítulos enteros, en su lugar, y salir obedeciendo. Son seis preguntas,
        siempre en el mismo orden, que caben en una hoja. Lo formuló Alejandro Sirit para esta escuela y lo
        desarrolla a fondo en su libro <em>Éfata: La Escritura Abierta</em>.
      </p>
      <blockquote className="mt-6 border-l-4 border-gold pl-4 font-serif text-xl italic">
        «Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos.»
        <span className="mt-1 block font-sans text-sm not-italic text-gold">Santiago 1:22 · RVR1960</span>
      </blockquote>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a href="#recibir" className="btn btn-gold">Quiero la guía gratis</a>
        <a href={VERDAD_GUIA.hoja} download className="btn btn-ghost" onClick={() => track("verdad_hoja")}>
          Descargar la hoja (PDF, 1 página)
        </a>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Las seis preguntas</h2>
        <ol className="mt-6 space-y-6">
          {LETRAS_SENCILLAS.map((p, i) => (
            <li key={`${p.l}-${i}`} id={ANCLAS_VERDAD[i]} className="flex scroll-mt-24 gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-navy font-sans text-sm font-semibold text-parchment">
                {p.l}
              </span>
              <div>
                <p className="font-sans text-xs tracking-widest text-gold uppercase">{p.nombre} · {p.ref}</p>
                <p className="mt-1 font-serif text-2xl">{p.pregunta}</p>
                <p className="mt-1 leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-relaxed">
          <strong>¿Estás empezando?</strong> Haz la versión breve en quince minutos: lee el capítulo entero, hazle una
          pregunta honesta al texto («¿qué dice aquí de Dios?») y escoge un solo acto para esta semana.
        </p>
        <p className="mt-4 leading-relaxed">
          <a href={VERDAD_GUIA.revelatio} className="text-link underline" onClick={() => track("verdad_revelatio")}>
            Hazlo paso a paso en RevelatiO con Marcos 1
          </a>
          : cada letra tiene su recuadro, tocas una palabra para ver su número Strong y, al final, guardas tu estudio o se
          lo envías a tu testigo por WhatsApp.
        </p>
      </section>

      <section id="escritura" className="mt-14 scroll-mt-24 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">La Escritura se interpreta con la Escritura</h2>
        <p className="mt-4 font-serif text-xl italic">
          «Lo que no encuentras en la Biblia, no esperes, no abandones, no busques a nadie: la misma Escritura te
          contesta.»
          <span className="mt-1 block font-sans text-sm not-italic text-gold">Alejandro Sirit</span>
        </p>
        <p className="mt-4 leading-relaxed">
          Si un versículo te deja una pregunta, no la archives: llévala a otros pasajes. No es leer sin el Espíritu,
          porque el Espíritu que inspiró el texto es el que lo alumbra. Pablo enseñaba «acomodando lo espiritual a lo
          espiritual» (1 Corintios 2:13); el verbo griego es συγκρίνω (<em>synkrínō</em>, G4793): comparar, poner
          una cosa junto a otra.
        </p>
        <aside className="mt-6 border-l-4 border-gold bg-parchment/60 p-5" aria-label="Norma normans non normata">
          <p className="kicker">Principio de la Reforma</p>
          <p className="mt-1 font-serif text-2xl italic">Norma normans non normata</p>
          <p className="mt-2 leading-relaxed">
            «La norma que norma y no es normada.» La Escritura mide todo lo demás (tradición, maestros, comentarios y
            la propia experiencia), y nada de eso la mide a ella. Por eso no se lee para adaptarla a tu situación: tu
            situación se pone delante del texto. La fórmula latina es de los teólogos luteranos posteriores a la{" "}
            <em>Fórmula de Concordia</em> (1577), que llama a la Escritura la única regla y norma para juzgar toda
            doctrina; la Confesión de Fe de Westminster (1646, cap. 1, secc. 9) enseña que la regla infalible para
            interpretar la Escritura es la Escritura misma.
          </p>
          <p className="mt-2 font-serif italic">
            «¡A la ley y al testimonio! Si no dijeren conforme a esto, es porque no les ha amanecido.»{" "}
            <span className="font-sans text-sm not-italic text-gold">Isaías 8:20 · RVR1960</span>
          </p>
        </aside>
        <h3 className="mt-8 font-serif text-2xl">Dos herramientas gratis en RevelatiO</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>
            <strong>Referencias:</strong> pasajes que tratan el mismo asunto (el Tesoro de la Escritura y
            OpenBible.info). Son pistas: lee cada uno en su capítulo.
          </li>
          <li>
            <strong>Strong y Concordancia:</strong> toca una palabra, mira su número Strong y sigue la misma palabra
            original por toda la Biblia, aunque la Reina-Valera la traduzca de varias maneras.
          </li>
        </ul>
        <h3 className="mt-8 font-serif text-2xl">Ejemplo: «creed en el evangelio» (Marcos 1:15)</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed">
          <li>
            Jesús dice: «arrepentíos, y creed en el evangelio» (Marcos 1:15). ¿Qué evangelio? El capítulo no lo
            define.
          </li>
          <li>
            Toca «evangelio»: εὐαγγέλιον (<em>euangélion</em>, G2098), «buen mensaje». Aparece 77 veces en el Textus
            Receptus.
          </li>
          <li>Marcos 1:1: «Principio del evangelio de Jesucristo, Hijo de Dios». Tiene nombre propio.</li>
          <li>
            1 Corintios 15:3–4 lo define: «Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue
            sepultado, y que resucitó al tercer día, conforme a las Escrituras».
          </li>
          <li>
            Romanos 1:16 dice qué hace: «es poder de Dios para salvación a todo aquel que cree».
          </li>
          <li>
            Vuelve a Marcos 1: creer el evangelio es creer la buena noticia de Jesucristo, muerto por nuestros pecados
            y resucitado. La misma Escritura contestó.
          </li>
        </ol>
        <p className="mt-4 leading-relaxed">
          Cada aparición se lee en su contexto, y la respuesta vuelve siempre al pasaje de donde salió la pregunta.{" "}
          <a href={VERDAD_GUIA.revelatio} className="text-link underline" onClick={() => track("verdad_escritura")}>
            Pruébalo en Marcos 1 con RevelatiO
          </a>
          .
        </p>
      </section>

      <section id="reto" className="mt-14 scroll-mt-24 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">El reto de 6 días</h2>
        <p className="mt-3 leading-relaxed">
          Una letra por día, con Santiago 1, en quince o veinte minutos. Mejor si lo haces con un amigo.
        </p>
        <ol className="mt-6 space-y-4">
          {RETO_6_DIAS.map((d) => (
            <li key={d.dia} className="leading-relaxed">
              <span className="font-sans text-xs tracking-widest text-gold uppercase">Día {d.dia} · {d.letra}</span>
              <p className="mt-1">{d.tarea}</p>
            </li>
          ))}
        </ol>
        <a href={VERDAD_GUIA.revelatioReto} className="btn btn-ghost mt-6">Abrir Santiago 1 con la guía</a>
        <HazloCon2 lugar="verdad-reto" />
      </section>

      <section id="recibir" className="mt-14 scroll-mt-24 border-t border-rule pt-10">
        <div className="flex flex-col gap-6 sm:flex-row">
          <img src={VERDAD_GUIA.portada} alt="Portada de la guía V.E.R.D.A.D." width={160} height={256} className="h-auto w-40 shrink-0 border border-rule" loading="lazy" />
          <div>
            <h2 className="font-serif text-3xl">La guía gratuita</h2>
            <p className="mt-3 leading-relaxed">
              {VERDAD_GUIA.paginas} páginas: de dónde nace el método, las seis letras con el ejemplo de Marcos 1, su
              fundamento bíblico (RVR1960, con hebreo, griego y números Strong explicados), las objeciones más comunes
              respondidas con la Escritura, la versión breve, el reto y la hoja para imprimir. En PDF y EPUB.
            </p>
          </div>
        </div>
        <div className="mt-8"><RegaloVerdad id="guia-metodo" /></div>
        <p className="mt-6 text-sm text-ink-soft">¿Quieres además el estudio semanal? Es opcional:</p>
        <VerdadForm />
      </section>

      <section id="escuchar" className="mt-14 scroll-mt-24 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Escúchalo</h2>
        <p className="mt-3 leading-relaxed">
          El episodio 0 del pódcast de Cielo Efata, «Cómo estudiar la Biblia con V.E.R.D.A.D.», en la voz de su autor,
          se publicará aquí y en la página del{" "}
          <a href="/podcast" className="text-link underline">pódcast</a>. Mientras tanto, la guía y la hoja ya están
          disponibles.
        </p>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Para ir más hondo</h2>
        <p className="mt-3 leading-relaxed">
          <em>Éfata: La Escritura Abierta</em> dedica un capítulo a cada letra e incluye ocho laboratorios, un currículo
          de 52 semanas para grupos y células y respuestas modelo.{" "}
          <Link to="/recibir" search={{ libro: "efata" }} className="text-link underline">Lee gratis el capítulo 1</Link>{" "}
          o{" "}
          <a href={VERDAD_GUIA.efataKindle} className="text-link underline" rel="noopener" onClick={() => track("verdad_efata")}>
            consíguelo en Amazon
          </a>
          . La explicación completa del método está en{" "}
          <Link to="/metodo" className="text-link underline">Cómo leer</Link>.
        </p>
        <p className="mt-4 leading-relaxed">
          <a href={VERDAD_GUIA.tarjeta} download className="text-link underline" onClick={() => track("verdad_tarjeta")}>
            Descarga la tarjeta para compartir
          </a>{" "}
          y envíasela a quien quiera hacer el reto contigo.
        </p>
      </section>
    </main>
  );
}
