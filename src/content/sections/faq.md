---
section: faq
title: "Questions"
items:
  - q: "Which databases does it support?"
    a: "PostgreSQL, MySQL, MariaDB, and SQLite files. User and permission management works on the server engines; SQLite has no user model."
  - q: "Do I need Docker?"
    a: "Only for detecting containers. You can also open a SQLite file, or connect to any Postgres or MySQL by host and port, directly or through an SSH tunnel."
  - q: "Does it run on macOS or Windows?"
    a: "Not today. DBWiz is built for Linux on x86_64 and arm64. It runs on any distro and feels most at home on Omarchy."
  - q: "Is it safe to point at real data?"
    a: "Every change shows its SQL before it runs, destructive actions ask you to type the name, and remote targets get a REMOTE badge plus an extra confirmation. Passwords are never stored or logged."
  - q: "Why would it ask for sudo?"
    a: "Only when your user can't reach the Docker socket, which is the Omarchy 4 default. With `--sudo` it asks once and uses it only for its own docker commands."
  - q: "Is it free?"
    a: "Yes. DBWiz is open source under the MIT license."
---
