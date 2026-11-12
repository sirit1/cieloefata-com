-- Cuaderno de estudio (Escuela, Lectura diaria, Maná).
-- La fuente de verdad es esta tabla, ligada a la cuenta.
-- No guarda los actos de obediencia de cuaderno_actos: esa tabla no se toca.

create table if not exists cuaderno_notas (
  id text primary key,
  user_id text not null,
  shelf text not null check (shelf in ('escuela', 'lectura', 'mana')),
  texto text not null default '',
  audio bytea,
  audio_mime text,
  fuente text not null default '',
  texto_seleccionado text not null default '',
  referencia text not null default '',
  dia integer,
  seccion text not null default '',
  titulo_dia text not null default '',
  pasaje text not null default '',
  fecha_lectura date,
  mana_ref text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cuaderno_notas_user_created
  on cuaderno_notas (user_id, created_at desc);

create index if not exists cuaderno_notas_user_shelf
  on cuaderno_notas (user_id, shelf, created_at desc);

create table if not exists cuaderno_higiene (
  user_id text primary key,
  last_export_at timestamptz,
  last_aviso_at timestamptz,
  export_pendiente_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists cuaderno_higiene_log (
  id text primary key,
  user_id text not null,
  at timestamptz not null,
  motivo text not null
);

create index if not exists cuaderno_higiene_log_user
  on cuaderno_higiene_log (user_id, at desc);

create table if not exists cuaderno_higiene_meta (
  id integer primary key check (id = 1),
  last_run_at timestamptz
);

insert into cuaderno_higiene_meta (id, last_run_at)
values (1, null)
on conflict (id) do nothing;
