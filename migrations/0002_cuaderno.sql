create table if not exists cuaderno_actos (
  user_id text not null,
  ref text not null,
  indicativo text not null default '',
  decision text not null,
  testigo text not null default '',
  note text not null default '',
  at text not null,
  primary key (user_id, at)
);

create index if not exists cuaderno_actos_user_at on cuaderno_actos (user_id, at desc);
