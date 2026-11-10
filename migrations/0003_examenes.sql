-- Exámenes y certificados del Curso Experto Bíblico.
-- user_id es text (el usuario de vista previa es 'dev-user', no un uuid).

create table if not exists examen_intentos (
  id text primary key,
  user_id text not null,
  examen_id text not null,
  numero integer not null check (numero >= 1 and numero <= 2),
  iniciado_en timestamptz not null default now(),
  vence_en timestamptz not null,
  entregado_en timestamptz,
  puntaje integer,
  aprobado boolean,
  respuestas text not null default '{}',
  unique (user_id, examen_id, numero)
);

create index if not exists examen_intentos_user_examen
  on examen_intentos (user_id, examen_id);

create table if not exists examen_eventos (
  id text primary key,
  intento_id text not null references examen_intentos (id) on delete cascade,
  user_id text not null,
  tipo text not null,
  en timestamptz not null default now()
);

create index if not exists examen_eventos_intento
  on examen_eventos (intento_id, en);

create table if not exists certificados (
  codigo text primary key,
  user_id text not null,
  examen_id text not null,
  nombre text not null,
  titulo text not null,
  puntaje integer not null,
  emitido_en date not null default current_date,
  unique (user_id, examen_id)
);
