// ============================================================
//  CESAR School · Linkhub da Turma — Configuração Central
//  Lugar para editar todas as informações de forma estruturada
// ============================================================

const CONFIG = {

  // ── Identidade ──────────────────────────────────────────
  turma: "CC Turma B",
  semestre: "2026.1",
  whatsappLink: "https://chat.whatsapp.com/DsINbN4jMXgL8Jmdc8P2Un?mode=gi_t",

  // ── Links Institucionais ─────────────────────────────────
  links: [
    {
      label: "Portal do Aluno (Lyceum)",
      url: "https://cesar.lyceum.com.br/AOnline3/#/home/avisos",
      icon: "🎓",
      type: "link",
    },
    {
      label: "Site de Projetos",
      url: "https://sites.google.com/cesar.school/projeto1ccdsg261/home?authuser=0",
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
    },
    {
      label: "Calendário Acadêmico",
      url: "assets/pdfs/Calendário Acadêmico 2026.2 ADM, Design e CC 080626_v2 (2).pdf",
      icon: "📅",
      type: "pdf",
    }
  ],

  // ── Disciplinas (com link do Classroom) ──────────────────
  disciplinas: [
    { nome: "Fundamentos de Desenvolvimento de Software (FDS)",  classroom: "https://classroom.google.com/u/2/c/ODcxMTU0ODU2MzE2" },
    { nome: "Lógica Matemática para Computação (LMC)",           classroom: "https://classroom.google.com/u/2/c/ODcxNTE0Njg2MTY1" },
    { nome: "Interface Humano-Computador (IHC)",     classroom: "https://classroom.google.com/u/2/c/ODcxMjA4NDIxNzI0" },
    { nome: "Programação Imperativa e Funcional (PIF)",  classroom: "https://classroom.google.com/u/2/w/ODcxMjI0MzU4NjY5/t/all" },
    { nome: "FP2: Fundamentos de Projetos",      classroom: "https://classroom.google.com/u/2/c/ODcxNTUxMjQ1MDgw" },
    { nome: "Projeto 02",                  classroom: "https://classroom.google.com/u/2/c/Nzk4NDkwODU0Mzc1" },
  ],


  // nota: aulas online têm online: true
  // nota: aulas de Projeto variam por grupo (ter/qua/qui) — indicado com aviso
  grade: [
    {
      dia: "Segunda-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Fundamentos de Desenvolvimento de Software (FDS)", sala: "Sala 301 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Lógica Matemática para Computação (LMC)", sala: "Sala 301 · Brum" },
      ],
    },
    {
      dia: "Terça-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Interface Humano-Computador (IHC)", sala: "Sala 301 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Programação Imperativa e Funcional (PIF)", sala: "Sala 301 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Quarta-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Fundamentos de Desenvolvimento de Software (FDS)", sala: "Sala 301 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Lógica Matemática para Computação (LMC)", sala: "Sala 301 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Quinta-feira",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "Interface Humano-Computador (IHC)", sala: "Sala 301 · Brum" },
        { horario: "10:30 – 12:30", disciplina: "Programação Imperativa e Funcional (PIF)", sala: "Sala 301 · Brum" },
        { horario: "13:30 – 14:30", disciplina: "Projeto 02 ⚠️ ver grupo", sala: "A sala varia com o grupo · Brum", aviso: true },
      ],
    },
    {
      dia: "Sexta-feira",
      emoji: "🛋️",
      zoomLink: "https://cesar.zoom.us/j/82551008097",
      aulas: [
        { horario: "08:15 – 10:15", disciplina: "FP2: Fundamentos de Projetos", sala: "Online 😴", online: true },
        { horario: "10:30 – 11:30", disciplina: "FP2: Fundamentos de Projetos", sala: "Online 😴", online: true },
      ],
    },
  ],

  // ── Provas ───────────────────────────────────────────────
  provas: [
    { data: "2026-08-20", disciplina: "Programação Imperativa e Funcional (PIF)", tipo: "Mini-Prova 01 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-09-10", disciplina: "Programação Imperativa e Funcional (PIF)", tipo: "Mini-Prova 02 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-09-24", disciplina: "Projeto 02", tipo: "Status Report 1", horario: "A confirmar", sala: "A confirmar" },
    { data: "2026-09-29", disciplina: "Programação Imperativa e Funcional (PIF)", tipo: "Mini-Prova 03 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-09-30", disciplina: "Fundamentos de Desenvolvimento de Software (FDS)", tipo: "AV1 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-10-01", disciplina: "Programação Imperativa e Funcional (PIF)", tipo: "Apresentação do projeto · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-10-01", disciplina: "Interface Humano-Computador (IHC)", tipo: "AV1 (Apresentação) · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-10-05", disciplina: "Lógica Matemática para Computação (LMC)", tipo: "AV1 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-10-06", disciplina: "Interface Humano-Computador (IHC)", tipo: "AV1 (Prova) · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
    { data: "2026-10-09", disciplina: "FP2: Fundamentos de Projetos", tipo: "AV1 · 1ª Unidade", horario: "A confirmar", sala: "Sala 301 · Brum" },
  ],

  // ── Monitorias ───────────────────────────────────────────
  // Para múltiplos horários da mesma disciplina, use entradas separadas
  monitorias: [
    { disciplina: "Fundamentos de Desenvolvimento de Software (FDS)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Lógica Matemática para Computação (LMC)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Interface Humano-Computador (IHC)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Programação Imperativa Funcional (PIF)", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "FP2: Fundamentos de Projetos", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
    { disciplina: "Projeto 02", dia: "—", horario: "A confirmar", sala: "A confirmar", link: "" },
  ],

};