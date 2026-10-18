import assert from "node:assert/strict";
import { test } from "node:test";
import {
  desbloqueado,
  enlaceInvitacion,
  enviosHechos,
  miRef,
  nuevoRef,
  origenVerdad,
  refDeQuienInvito,
  refValido,
  registrarLlegada,
  sumarEnvio,
} from "./hazlo-con-2.ts";

function mem(): any {
  const m = new Map<string, string>();
  return { getItem: (k: string) => (m.has(k) ? m.get(k) : null), setItem: (k: string, v: string) => m.set(k, String(v)) };
}

test("ref estable, corto y válido", () => {
  const s = mem();
  const a = miRef(s);
  assert.ok(refValido(a));
  assert.equal(miRef(s), a);
  assert.equal(nuevoRef(() => 0), "aaaaaaa");
  assert.equal(refValido("ABC"), false);
  assert.equal(refValido("<script>"), false);
});

test("llegada: primer toque, sin autoinvitarse", () => {
  const s = mem();
  const propio = miRef(s);
  assert.equal(registrarLlegada(`?ref=${propio}`, s), null);
  assert.equal(registrarLlegada("?ref=abcd234", s), "abcd234");
  assert.equal(registrarLlegada("?ref=zzzz999", s), null);
  assert.equal(refDeQuienInvito(s), "abcd234");
  assert.equal(registrarLlegada("?ref=<x>", mem()), null);
});

test("dos invitaciones desbloquean", () => {
  const s = mem();
  assert.equal(enviosHechos(s), 0);
  assert.equal(desbloqueado(enviosHechos(s)), false);
  sumarEnvio(s);
  assert.equal(desbloqueado(enviosHechos(s)), false);
  sumarEnvio(s);
  assert.equal(desbloqueado(enviosHechos(s)), true);
});

test("origen y enlace", () => {
  assert.equal(origenVerdad(null), "cieloefata.com/verdad");
  assert.equal(origenVerdad("abcd234"), "cieloefata.com/verdad?ref=abcd234");
  assert.ok(origenVerdad("abcdefghjkmn").length <= 80);
  assert.equal(enlaceInvitacion("abcd234"), "https://www.cieloefata.com/verdad?ref=abcd234#reto");
});
