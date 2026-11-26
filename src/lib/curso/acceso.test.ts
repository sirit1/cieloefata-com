import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import {
  CURSO_CUENTA,
  CURSO_DESCRIPCION,
  CURSO_LEAD,
  CURSO_PORTADA,
  CURSO_RITMO,
  CURSO_TITULO,
  alumnoConNombreYCorreo,
  leccionCerradaPara,
  leccionRequiereInscripcion,
  mensajeAuth,
  validarInscripcion,
} from "./acceso.ts";

const PROHIBIDO = /lecciones abiertas|lecciones disponibles|30 lecciones|treinta lecciones|diez lecciones/i;

describe("acceso al curso", () => {
  it("deja el día 1 abierto y cierra del 2 en adelante cuando hay auth", () => {
    assert.equal(leccionRequiereInscripcion(1), false);
    assert.equal(leccionRequiereInscripcion(2), true);
    assert.equal(leccionRequiereInscripcion(30), true);
    assert.equal(leccionCerradaPara(1, true, null), false);
    assert.equal(leccionCerradaPara(2, true, null), true);
    assert.equal(leccionCerradaPara(2, true, { name: "Ana", email: "ana@iglesia.org" }), false);
    assert.equal(leccionCerradaPara(2, true, { name: "", email: "ana@iglesia.org" }), true);
    assert.equal(leccionCerradaPara(2, true, { name: "Ana", email: "" }), true);
    assert.equal(leccionCerradaPara(2, true, { name: "Dev User", email: "dev@example.com" }), true);
    assert.equal(leccionCerradaPara(2, true, { name: "Vista", email: "a@viewer.grok.invalid" }), true);
  });

  it("no cierra lecciones cuando la auth local está apagada", () => {
    assert.equal(leccionCerradaPara(2, false, null), false);
    assert.equal(leccionCerradaPara(30, false, null), false);
  });

  it("exige nombre y correo al abrir cuenta, y solo correo y contraseña al entrar", () => {
    assert.equal(alumnoConNombreYCorreo({ name: "Ana", email: "ana@iglesia.org" }), true);
    assert.equal(
      validarInscripcion({
        nombre: "",
        email: "ana@iglesia.org",
        contrasena: "una-frase-larga",
        consentimiento: true,
        modo: "crear",
      }),
      "Escribe tu nombre.",
    );
    assert.equal(
      validarInscripcion({
        nombre: "Ana",
        email: "ana@iglesia.org",
        contrasena: "corta",
        consentimiento: true,
        modo: "crear",
      }),
      "La contraseña necesita entre 8 y 128 caracteres.",
    );
    assert.equal(
      validarInscripcion({
        nombre: "Ana",
        email: "ana@iglesia.org",
        contrasena: "una-frase-larga",
        consentimiento: false,
        modo: "crear",
      }),
      "Marca la casilla para que la escuela guarde tu nombre y tu correo.",
    );
    assert.equal(
      validarInscripcion({
        nombre: "",
        email: "ana@iglesia.org",
        contrasena: "una-frase-larga",
        consentimiento: false,
        modo: "entrar",
      }),
      null,
    );
    assert.equal(
      mensajeAuth({ code: "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL" }, "crear"),
      "Ese correo ya tiene cuenta. Entra con él.",
    );
    assert.equal(mensajeAuth({ code: "NAME_REQUIRED" }, "crear"), "Escribe tu nombre.");
  });

  it("dice 365 lecciones, a su tiempo, sin rachas ni plazos, y con certificado", () => {
    const prosa = [CURSO_TITULO, CURSO_DESCRIPCION, CURSO_LEAD, CURSO_RITMO, CURSO_CUENTA, CURSO_PORTADA].join("\n");
    assert.match(CURSO_TITULO, /365 lecciones/);
    assert.match(prosa, /se lee y se escudriña la Escritura a su tiempo/i);
    assert.match(prosa, /no hay rachas ni plazos/i);
    assert.match(prosa, /al finalizar el curso hay certificado/i);
    assert.equal(PROHIBIDO.test(prosa), false);
    assert.ok(CURSO_DESCRIPCION.length >= 120 && CURSO_DESCRIPCION.length <= 160);
    for (const ruta of [
      "src/routes/curso/index.tsx",
      "src/routes/index.tsx",
      "src/routes/gratis.tsx",
      "src/components/gratis-form.tsx",
    ]) {
      const texto = readFileSync(new URL(`../../../${ruta}`, import.meta.url), "utf8");
      assert.equal(PROHIBIDO.test(texto), false, ruta);
    }
    const indice = readFileSync(new URL("./index.ts", import.meta.url), "utf8");
    const apertura = readFileSync(new URL("./apertura.server.ts", import.meta.url), "utf8");
    assert.equal(indice.includes("el Dios de la Escritura no es mudo"), false);
    assert.equal(indice.includes("cortaplumas"), false);
    assert.equal(apertura.includes("el Dios de la Escritura no es mudo"), true);
  });
});
