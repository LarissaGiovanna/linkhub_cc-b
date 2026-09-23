// ============================================================
//  CESAR School · Linkhub da Turma — Configuração Central
//  Lugar para editar todas as informações de forma estruturada
// ============================================================

const CONFIG = {

  // ── Identidade ──────────────────────────────────────────
  turma: "CC 3º Turma B",
  semestre: "2025.2",
  whatsappLink: "https://chat.whatsapp.com/FPcl8G1mwT9AoM7KHsrsbH",

  // ── Links Institucionais ─────────────────────────────────
  links: [
    {
      label: "Portal do Aluno (Lyceum)",
      url: "https://cesar.lyceum.com.br/AOnline3/#/home/avisos",
      icon: "🎓",
      type: "link",
    },
    {
      label: "Site Graduação (Horários, Rematrícula, Estágio)",
      url: "https://sites.google.com/cesar.school/graduacao/home",
      icon: "📝",
      type: "link",
    },
    {
      label: "Comunidade CESAR School",
      url: "https://a.cesar.school/ConviteCC",
      icon: "👥",
      type: "link",
    },
    {
      label: "Portal de Carreiras - Workalove",
      url: "https://workability.worka.love/#/",
      icon: "💼",
      type: "link",
    },
    {
      label: "Manual do Estudante",
      url: "assets/pdfs/Manual-do-Estudante-2026.2-CESAR-School.pdf",
      icon: "📖",
      type: "pdf",
    }
  ],

  // ── Disciplinas (com link do Classroom) ──────────────────
  disciplinas: [
    { nome: "Infraestrutura de Software (SO)",  classroom: "https://classroom.google.com/u/1/c/ODcxNTA2MTk0MDM2" },
    { nome: "Algoritmos e Estrutura de Dados (AED)",           classroom: "https://classroom.google.com/u/1/c/ODcxNTE0MjU1Nzc5" },
    { nome: "Programação Orientada a Objetos (POO)",     classroom: "https://classroom.google.com/u/2/c/ODcxMjA4NDIxNzI0" },
    { nome: "Infraestrutura de Hardware",  classroom: "https://classroom.google.com/u/1/c/ODcxNTk4MDk4NDM5" },
    { nome: "Metodologia Cientifica",      classroom: "https://classroom.google.com/u/1/c/ODc0NTM4MDI0NDU5" },
    { nome: "Projeto 03",                  classroom: "#" },
  ],


  // nota: aulas online têm online: true
  // nota: aulas de Projeto variam por grupo (ter/qua/qui) — indicado com aviso
  grade: [
    {
      dia: "Segunda-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Infraestrutura de Software (SO)", sala: "Sala 207 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Algoritmos e Estrutura de Dados (AED)", sala: "Sala 207 · Brum" },
      ],
    },
    {
      dia: "Terça-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Programação Orientada a Objetos (POO)", sala: "Sala 207 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Infraestrutura de Hardware", sala: "Sala 207 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 03 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Quarta-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Infraestrutura de Software (SO)", sala: "Sala 207 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Algoritmos e Estrutura de Dados (AED)", sala: "Sala 207 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 03 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Quinta-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Programação Orientada a Objetos (POO)", sala: "Sala 207 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Infraestrutura de Hardware", sala: "Sala 207 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 03 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Sexta-feira",
      emoji: "🛋️",
      zoomLink: "https://cesar.zoom.us/j/87531836098",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Metodologia Cientifica", sala: "Online 😴", online: true },
        { horario: "10:30 – 11:30", disciplina: "Metodologia Cientifica", sala: "Online 😴", online: true },
      ],
    },
  ],

  // ── Provas ───────────────────────────────────────────────
  provas: [
    { data: "2026-10-05", disciplina: "Infraestrutura de Software (SO)", tipo: "Avaliação 01 · 1ª Unidade", horario: "08:15 - 10:15", sala: "Sala 207 · Brum" },
    { data: "2026-11-30", disciplina: "Infraestrutura de Software (SO)", tipo: "Avaliação 02 · 2ª Unidade", horario: "08:15 - 10:15", sala: "Sala 207 · Brum" },
    { data: "2026-09-30", disciplina: "Algoritmos e Estrutura de Dados (AED)", tipo: "Avaliação 02 - 1º Módulo", horario: "08:15 - 12:30", sala: "Sala 207 · Brum" },
    { data: "2026-12-02", disciplina: "Algoritmos e Estrutura de Dados (AED)", tipo: "Avaliação - 2º Módulo", horario: "10:30 - 12:30", sala: "Sala 207 · Brum" },
    { data: "2026-10-01", disciplina: "Programação Orientada a Objetos (POO)", tipo: "Avaliação 01 · 1ª Unidade", horario: "08:15 - 10:15", sala: "Sala 207 · Brum" },
    { data: "2026-12-01", disciplina: "Programação Orientada a Objetos (POO)", tipo: "Avaliação 02 · 2ª Unidade", horario: "08:15 - 10:15", sala: "Sala 207 · Brum" },
    { data: "2026-10-01", disciplina: "Infraestrutura de Hardware", tipo: "Avaliação 01 · 1ª Unidade", horario: "10:30 - 12:30", sala: "Sala 207 · Brum" },
    { data: "2026-12-03", disciplina: "Infraestrutura de Hardware", tipo: "Avaliação 02 · 2ª Unidade", horario: "10:30 - 12:30", sala: "Sala 207 · Brum" },
    { data: "2026-09-25", disciplina: "Projeto 03", tipo: "Status Report 1", horario: "8:30", sala: "Online" },
    { data: "2026-11-12", disciplina: "Projeto 03", tipo: "Status Report 2", horario: "A confirmar", sala: "A confirmar" },
    { data: "2026-10-02", disciplina: "Metodologia Científica", tipo: "Apresentação dos artigos", horario: "08:15 - 11:30", sala: "Online" },
  ],

  // ── Monitorias ───────────────────────────────────────────
  // Para múltiplos horários da mesma disciplina, use entradas separadas
  monitorias: [
    { disciplina: "Infraestrutura de Software (SO)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Algoritmos e Estrutura de Dados (AED)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Programação Orientada a Objetos (POO)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Infraestrutura de Hardware", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Metodologia Cientifica", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Projeto 03", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
  ],

};