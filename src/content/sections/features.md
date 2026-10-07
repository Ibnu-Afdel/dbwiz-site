---
section: features
title: "Everything you open psql for. Without the psql."
cells:
  - title: "Finds them for you"
    body: "Running and stopped Postgres, MySQL, and MariaDB containers show up on launch. Start a stopped one with a single key."
    icon: "ph:magnifying-glass"
    shot: home
    shot_alt: "The DBWiz home menu listing detected database containers, two running and two stopped"
    span: wide
  - title: "Credentials, recovered"
    body: "Known defaults, then `docker inspect`, then your project's `.env`. You usually type nothing, and passwords never touch disk."
    icon: "ph:key"
    span: narrow
  - title: "Query plans in plain language"
    body: "One key turns `EXPLAIN` into a readable tree, with the slow steps called out and what to do about them."
    icon: "ph:tree-structure"
    shot: plan
    shot_alt: "The DBWiz query plan viewer explaining a full table scan and suggesting an index"
    span: full
  - title: "Change data safely"
    body: "Edit a cell, insert or delete a row. DBWiz shows the exact SQL first, and anything destructive asks you to type the name."
    icon: "ph:shield-check"
    span: narrow
  - title: "Browse without SQL"
    body: "Databases, tables, rows. Filter with a quick `WHERE`, jump with type-to-find, open any cell's full value."
    icon: "ph:table"
    shot: browse
    shot_alt: "DBWiz previewing the rows of an orders table in its results grid"
    span: wide
more_title: "Also in the box"
more:
  - { title: "Tabs", body: "Several connections open at once. DBWiz remembers where you were." }
  - { title: "Beyond local Docker", body: "Any host and port, SSH tunnels, and Docker scans on a server over SSH." }
  - { title: "Admin chores", body: "Databases, users, grants, backup and restore, schema diffs, DDL export." }
  - { title: "A real SQL editor", body: "Autocomplete, a formatter, history, and an optional vim mode." }
  - { title: "Scriptable", body: "`list`, `query`, `dump`, `health`, `schema` and more, with JSON output for CI." }
  - { title: "One static binary", body: "Pure Go drivers, no runtime to install. SQLite files need nothing at all." }
---
