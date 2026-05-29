const today = new Date("2026-05-29T00:00:00+07:00");
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const statusesProject = [
  "Новый",
  "Бэклог",
  "Декомпозиция и планирование",
  "В процессе",
  "Приемка",
  "Ожидает",
  "Закрыт",
  "Отмена",
];

const issues = [
  {
    key: "PPM-101",
    issueType: "Project",
    summary: "Billing Platform Migration",
    description: "Migration of billing core to the target platform.",
    teams: "Platform",
    reporter: "Irina Volkova",
    assignee: "Masha Kerbs",
    requestParticipants: "CTO Office",
    agreements: "Payments SLA",
    priority: "Critical",
    quarter: "Q2 2026",
    status: "В процессе",
    targetStart: "2026-03-03",
    startDate: "2026-03-03",
    dsd: "2026-03-14",
    targetEnd: "2026-05-18",
    endDate: "",
    resolutionDate: "",
    passport: "https://jira.example/passport/billing",
    roadmap: "https://confluence.example/roadmap/billing",
    definitionOfDone: "Migration accepted by finance and support.",
    program: "PPM-1",
    statusEntered: "2026-03-18",
    links: [],
  },
  {
    key: "PPM-102",
    issueType: "Project",
    summary: "Customer Data Lake",
    description: "Unified lake for customer analytics.",
    teams: "Data",
    reporter: "Anna Smirnova",
    assignee: "Pavel Ivanov",
    requestParticipants: "",
    agreements: "Data Governance",
    priority: "High",
    quarter: "Q2 2026",
    status: "Ожидает",
    targetStart: "2026-02-20",
    startDate: "2026-02-20",
    dsd: "2026-03-01",
    targetEnd: "2026-06-19",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "https://confluence.example/roadmap/data-lake",
    definitionOfDone: "Reports migrated and reconciled.",
    program: "PPM-1",
    statusEntered: "2026-05-10",
    links: [],
  },
  {
    key: "PPM-103",
    issueType: "Project",
    summary: "Mobile App Checkout",
    description: "Checkout flow refresh for iOS and Android.",
    teams: "Mobile",
    reporter: "Ivan Fedorov",
    assignee: "Elena Petrova",
    requestParticipants: "Product Growth",
    agreements: "Mobile Release",
    priority: "High",
    quarter: "Q2 2026",
    status: "Приемка",
    targetStart: "2026-04-01",
    startDate: "2026-04-01",
    dsd: "2026-04-07",
    targetEnd: "2026-06-05",
    endDate: "",
    resolutionDate: "",
    passport: "https://jira.example/passport/mobile-checkout",
    roadmap: "",
    definitionOfDone: "Checkout conversion smoke-tested.",
    program: "PPM-2",
    statusEntered: "2026-05-16",
    links: [],
  },
  {
    key: "PPM-104",
    issueType: "Project",
    summary: "Support Portal Redesign",
    description: "New support portal information architecture.",
    teams: "CX",
    reporter: "Oleg Mironov",
    assignee: "Dmitry Kuznetsov",
    requestParticipants: "Support",
    agreements: "CX Roadmap",
    priority: "Medium",
    quarter: "Q3 2026",
    status: "Декомпозиция и планирование",
    targetStart: "2026-05-01",
    startDate: "2026-05-01",
    dsd: "2026-05-20",
    targetEnd: "2026-07-16",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "PPM-2",
    statusEntered: "2026-04-18",
    links: [{ type: "blocked by", status: "В процессе", key: "PPM-411" }],
  },
  {
    key: "PPM-105",
    issueType: "Project",
    summary: "IAM Hardening",
    description: "Privileged access review and hardening.",
    teams: "Security",
    reporter: "Masha Kerbs",
    assignee: "",
    requestParticipants: "",
    agreements: "Security Baseline",
    priority: "Critical",
    quarter: "Q2 2026",
    status: "В процессе",
    targetStart: "2026-04-18",
    startDate: "2026-04-18",
    dsd: "2026-04-25",
    targetEnd: "",
    endDate: "",
    resolutionDate: "",
    passport: "https://jira.example/passport/iam",
    roadmap: "",
    definitionOfDone: "",
    program: "PPM-3",
    statusEntered: "2026-04-26",
    links: [],
  },
  {
    key: "PPM-106",
    issueType: "Project",
    summary: "Warehouse Forecasting",
    description: "Demand forecast model implementation.",
    teams: "Data",
    reporter: "Anna Smirnova",
    assignee: "Pavel Ivanov",
    requestParticipants: "Logistics",
    agreements: "Supply Chain",
    priority: "Medium",
    quarter: "Q2 2026",
    status: "В процессе",
    targetStart: "2026-04-10",
    startDate: "2026-04-10",
    dsd: "2026-04-16",
    targetEnd: "2026-06-24",
    endDate: "",
    resolutionDate: "",
    passport: "https://jira.example/passport/forecasting",
    roadmap: "https://confluence.example/roadmap/forecasting",
    definitionOfDone: "Forecast dashboard adopted by logistics.",
    program: "PPM-1",
    statusEntered: "2026-04-21",
    links: [],
  },
  {
    key: "PPM-107",
    issueType: "Project",
    summary: "PMO Reporting Standard",
    description: "Standard reports and health governance.",
    teams: "PMO",
    reporter: "Head of PMO",
    assignee: "Masha Kerbs",
    requestParticipants: "PM Leads",
    agreements: "PMO Governance",
    priority: "Low",
    quarter: "Q2 2026",
    status: "Новый",
    targetStart: "",
    startDate: "",
    dsd: "",
    targetEnd: "2026-08-01",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "",
    statusEntered: "2026-05-15",
    links: [],
  },
  {
    key: "PPM-108",
    issueType: "Project",
    summary: "Legacy CRM Closure",
    description: "Close the final CRM migration wave.",
    teams: "CRM",
    reporter: "Irina Volkova",
    assignee: "Elena Petrova",
    requestParticipants: "Sales Ops",
    agreements: "CRM Migration",
    priority: "Medium",
    quarter: "Q1 2026",
    status: "Закрыт",
    targetStart: "2026-01-12",
    startDate: "2026-01-12",
    dsd: "2026-01-20",
    targetEnd: "2026-03-01",
    endDate: "2026-04-05",
    resolutionDate: "2026-04-05",
    passport: "https://jira.example/passport/crm",
    roadmap: "https://confluence.example/roadmap/crm",
    definitionOfDone: "CRM closed and archived.",
    program: "PPM-2",
    statusEntered: "2026-04-05",
    links: [],
  },
  {
    key: "PPM-109",
    issueType: "Project",
    summary: "Contract Automation",
    description: "Automation of contract intake workflow.",
    teams: "Legal Tech",
    reporter: "Ivan Fedorov",
    assignee: "Dmitry Kuznetsov",
    requestParticipants: "Legal",
    agreements: "Legal Operations",
    priority: "High",
    quarter: "Q3 2026",
    status: "Бэклог",
    targetStart: "",
    startDate: "",
    dsd: "",
    targetEnd: "2026-06-20",
    endDate: "",
    resolutionDate: "",
    passport: "https://jira.example/passport/contracts",
    roadmap: "",
    definitionOfDone: "",
    program: "PPM-3",
    statusEntered: "2026-05-24",
    links: [],
  },
  {
    key: "PPM-110",
    issueType: "Project",
    summary: "Data Retention Cleanup",
    description: "Cancel legacy retention cleanup initiative.",
    teams: "Security",
    reporter: "Head of PMO",
    assignee: "Pavel Ivanov",
    requestParticipants: "Compliance",
    agreements: "Security Baseline",
    priority: "Low",
    quarter: "Q1 2026",
    status: "Отмена",
    targetStart: "2026-01-15",
    startDate: "2026-01-15",
    dsd: "2026-01-22",
    targetEnd: "2026-04-01",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "PPM-3",
    statusEntered: "2026-02-15",
    links: [],
  },
  {
    key: "PPM-1",
    issueType: "Program",
    summary: "Data & Billing Transformation",
    description: "Program for billing and data modernization.",
    teams: "Platform, Data",
    reporter: "CTO",
    assignee: "Masha Kerbs",
    requestParticipants: "Head of PMO",
    agreements: "Strategic Portfolio",
    priority: "Critical",
    quarter: "Q2 2026",
    status: "В процессе",
    targetStart: "",
    startDate: "",
    dsd: "",
    targetEnd: "",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "",
    statusEntered: "2026-02-20",
    links: [],
  },
  {
    key: "PPM-2",
    issueType: "Program",
    summary: "Customer Experience Portfolio",
    description: "Customer-facing delivery stream.",
    teams: "Mobile, CX",
    reporter: "CTO",
    assignee: "Elena Petrova",
    requestParticipants: "Product",
    agreements: "Strategic Portfolio",
    priority: "High",
    quarter: "Q2 2026",
    status: "Приемка",
    targetStart: "",
    startDate: "",
    dsd: "",
    targetEnd: "",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "",
    statusEntered: "2026-05-15",
    links: [],
  },
  {
    key: "PPM-3",
    issueType: "Program",
    summary: "Governance & Security",
    description: "Security and governance portfolio.",
    teams: "Security, Legal Tech",
    reporter: "Head of PMO",
    assignee: "Dmitry Kuznetsov",
    requestParticipants: "Security Board",
    agreements: "Strategic Portfolio",
    priority: "Critical",
    quarter: "Q3 2026",
    status: "В процессе",
    targetStart: "",
    startDate: "",
    dsd: "",
    targetEnd: "",
    endDate: "",
    resolutionDate: "",
    passport: "",
    roadmap: "",
    definitionOfDone: "",
    program: "",
    statusEntered: "2026-04-15",
    links: [],
  },
];

const fieldLabels = {
  key: "Key",
  summary: "Summary",
  issueType: "Issue Type",
  status: "Status",
  priority: "Priority",
  reporter: "Reporter",
  assignee: "Assignee",
  requestParticipants: "Request participants",
  agreements: "Agreements",
  quarter: "Quarter",
  program: "Program",
  targetStart: "Target Start Date",
  startDate: "Start Date",
  dsd: "DSD",
  targetEnd: "Target End Date",
  endDate: "End Date",
  definitionOfDone: "Definition of Done",
  passport: "Passport",
  roadmap: "Roadmap",
};

const filters = {
  assignee: "",
  status: "",
  priority: "",
  program: "",
  agreements: "",
  quarter: "",
  health: "",
  overdue: false,
  endingSoon: false,
  missingArtifacts: false,
};

function initTheme() {
  const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
  setTheme(savedTheme);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolioTheme", theme);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === theme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function parseDate(value) {
  if (!value) return null;
  return new Date(`${value}T00:00:00+07:00`);
}

function daysBetween(a, b) {
  if (!a || !b) return null;
  return Math.ceil((parseDate(a) - parseDate(b)) / MS_PER_DAY);
}

function daysFromToday(value) {
  if (!value) return null;
  return Math.ceil((parseDate(value) - today) / MS_PER_DAY);
}

function isActive(issue) {
  return !["Закрыт", "Отмена"].includes(issue.status);
}

function hasValue(value) {
  return Boolean(String(value || "").trim());
}

function getProgramName(key) {
  return issues.find((issue) => issue.key === key)?.summary || "";
}

function hasActiveBlocker(issue) {
  return issue.links.some((link) => link.type === "blocked by" && !["Закрыт", "Отмена"].includes(link.status));
}

function missingArtifacts(issue) {
  return !hasValue(issue.passport) || !hasValue(issue.roadmap);
}

function calculateHealth(issue) {
  if (issue.issueType !== "Project" || !isActive(issue)) {
    return { health: "Green", reasons: [] };
  }

  const red = [];
  const yellow = [];
  const targetEndDays = daysFromToday(issue.targetEnd);
  const statusAge = Math.max(0, Math.floor((today - parseDate(issue.statusEntered)) / MS_PER_DAY));
  const endShift = daysBetween(issue.endDate, issue.targetEnd);

  if (issue.status === "Ожидает") red.push("Waiting");
  if (hasValue(issue.targetEnd) && targetEndDays < 0) red.push("Overdue");
  if (!hasValue(issue.assignee)) red.push("Missing Assignee");
  if (!hasValue(issue.requestParticipants)) red.push("Missing Request Participants");
  if (!hasValue(issue.targetEnd)) red.push("Missing Target End Date");
  if (issue.status === "В процессе" && !hasValue(issue.definitionOfDone)) red.push("Missing Definition of Done");
  if (issue.status === "В процессе" && !hasValue(issue.requestParticipants)) red.push("Missing Request Participants");
  if (issue.status === "В процессе" && !hasValue(issue.targetEnd)) red.push("Missing Target End Date");
  if (issue.status === "Приемка" && !hasValue(issue.endDate)) red.push("Missing End Date");
  if (endShift !== null && endShift > 30) red.push("Shifted > 30 Days");
  if (issue.priority === "Critical" && (!hasValue(issue.assignee) || !hasValue(issue.requestParticipants) || !hasValue(issue.targetEnd))) {
    red.push("Critical Missing Required Fields");
  }

  if (hasValue(issue.targetEnd) && targetEndDays >= 0 && targetEndDays < 30) yellow.push("Ending < 30 Days");
  if (hasValue(issue.dsd) && daysFromToday(issue.dsd) < 0 && ["Новый", "Бэклог", "Декомпозиция и планирование"].includes(issue.status)) {
    yellow.push("DSD Overdue");
  }
  if (issue.status === "Новый" && statusAge > 7) yellow.push("New > 7 Days");
  if (issue.status === "Декомпозиция и планирование" && statusAge > 30) yellow.push("Planning Too Long");
  if (issue.status === "Приемка" && statusAge > 7) yellow.push("Acceptance Too Long");
  if (!hasValue(issue.passport)) yellow.push("Missing Passport");
  if (!hasValue(issue.roadmap)) yellow.push("Missing Roadmap");
  if (["High", "Critical"].includes(issue.priority) && (!hasValue(issue.agreements) || !hasValue(issue.reporter) || !hasValue(issue.quarter))) {
    yellow.push("Priority Governance Incomplete");
  }
  if (hasActiveBlocker(issue)) yellow.push("Blocked By Active Issue");

  if (red.length) return { health: "Red", reasons: [...new Set(red)] };
  if (yellow.length) return { health: "Yellow", reasons: [...new Set(yellow)] };
  return { health: "Green", reasons: [] };
}

function complianceFields(issue) {
  if (["Новый", "Бэклог"].includes(issue.status)) return ["summary", "description", "teams"];
  if (issue.status === "Декомпозиция и планирование") return ["reporter", "assignee", "agreements", "priority", "dsd"];
  if (issue.status === "В процессе") return ["targetEnd", "definitionOfDone", "assignee", "requestParticipants"];
  if (issue.status === "Приемка") return ["endDate"];
  if (issue.status === "Закрыт") return ["endDateOrResolution"];
  return ["assignee", "requestParticipants", "targetEnd"];
}

function calculateCompliance(issue) {
  const fields = complianceFields(issue);
  const complete = fields.filter((field) => {
    if (field === "endDateOrResolution") return hasValue(issue.endDate) || hasValue(issue.resolutionDate);
    return hasValue(issue[field]);
  }).length;
  return Math.round((complete / fields.length) * 100);
}

function enrich(issue) {
  const health = calculateHealth(issue);
  return {
    ...issue,
    programName: getProgramName(issue.program),
    calculatedHealth: health.health,
    healthReason: health.reasons.join(", ") || "No risk detected",
    compliance: calculateCompliance(issue),
  };
}

function getPortfolio() {
  return issues.map(enrich);
}

function uniqueOptions(items, selector) {
  return [...new Set(items.map(selector).filter(Boolean))].sort();
}

function setSelect(id, values, placeholder = "All") {
  const el = document.getElementById(id);
  el.innerHTML = [`<option value="">${placeholder}</option>`, ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)].join("");
}

function initFilters() {
  const portfolio = getPortfolio();
  setSelect("filterAssignee", uniqueOptions(portfolio, (issue) => issue.assignee), "All PMs");
  setSelect("filterStatus", uniqueOptions(portfolio, (issue) => issue.status), "All statuses");
  setSelect("filterPriority", uniqueOptions(portfolio, (issue) => issue.priority), "All priorities");
  setSelect("filterProgram", uniqueOptions(portfolio, (issue) => issue.programName), "All programs");
  setSelect("filterAgreements", uniqueOptions(portfolio, (issue) => issue.agreements), "All agreements");
  setSelect("filterQuarter", uniqueOptions(portfolio, (issue) => issue.quarter), "All quarters");
  setSelect("filterHealth", ["Green", "Yellow", "Red"], "All health");

  const mappings = [
    ["filterAssignee", "assignee"],
    ["filterStatus", "status"],
    ["filterPriority", "priority"],
    ["filterProgram", "program"],
    ["filterAgreements", "agreements"],
    ["filterQuarter", "quarter"],
    ["filterHealth", "health"],
  ];

  mappings.forEach(([id, key]) => {
    document.getElementById(id).addEventListener("change", (event) => {
      filters[key] = event.target.value;
      render();
    });
  });

  document.getElementById("filterOverdue").addEventListener("change", (event) => {
    filters.overdue = event.target.checked;
    render();
  });
  document.getElementById("filterEndingSoon").addEventListener("change", (event) => {
    filters.endingSoon = event.target.checked;
    render();
  });
  document.getElementById("filterMissingArtifacts").addEventListener("change", (event) => {
    filters.missingArtifacts = event.target.checked;
    render();
  });
  document.getElementById("filterToggle").addEventListener("click", () => {
    const panel = document.getElementById("filterPanel");
    const button = document.getElementById("filterToggle");
    const nextState = !panel.hidden;
    panel.hidden = nextState;
    button.setAttribute("aria-expanded", String(!nextState));
  });
  document.getElementById("resetFilters").addEventListener("click", resetFilters);
  document.getElementById("exportSnapshot").addEventListener("click", exportCsv);
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  document.getElementById("issueDrawer").addEventListener("click", (event) => {
    if (event.target.id === "issueDrawer") closeDrawer();
  });
}

function resetFilters() {
  Object.assign(filters, {
    assignee: "",
    status: "",
    priority: "",
    program: "",
    agreements: "",
    quarter: "",
    health: "",
    overdue: false,
    endingSoon: false,
    missingArtifacts: false,
  });
  document.querySelectorAll("select").forEach((select) => {
    select.value = "";
  });
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.checked = false;
  });
  render();
}

function applyFilters(portfolio) {
  return portfolio.filter((issue) => {
    if (filters.assignee && issue.assignee !== filters.assignee) return false;
    if (filters.status && issue.status !== filters.status) return false;
    if (filters.priority && issue.priority !== filters.priority) return false;
    if (filters.program && issue.programName !== filters.program) return false;
    if (filters.agreements && issue.agreements !== filters.agreements) return false;
    if (filters.quarter && issue.quarter !== filters.quarter) return false;
    if (filters.health && issue.calculatedHealth !== filters.health) return false;
    if (filters.overdue && !(hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0 && isActive(issue))) return false;
    if (filters.endingSoon && !(hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) >= 0 && daysFromToday(issue.targetEnd) < 30 && isActive(issue))) return false;
    if (filters.missingArtifacts && !missingArtifacts(issue)) return false;
    return true;
  });
}

function updateActiveFilterCount() {
  const count = Object.values(filters).filter(Boolean).length;
  document.getElementById("activeFilterCount").textContent = `${count} active`;
  renderActiveFilterChips();
}

function renderActiveFilterChips() {
  const chips = [];
  const labels = {
    assignee: "PM",
    status: "Status",
    priority: "Priority",
    program: "Program",
    agreements: "Agreements",
    quarter: "Quarter",
    health: "Health",
  };

  Object.entries(labels).forEach(([key, label]) => {
    if (filters[key]) chips.push({ key, label, value: filters[key] });
  });
  if (filters.overdue) chips.push({ key: "overdue", label: "Overdue", value: "Yes" });
  if (filters.endingSoon) chips.push({ key: "endingSoon", label: "Ending < 30 Days", value: "Yes" });
  if (filters.missingArtifacts) chips.push({ key: "missingArtifacts", label: "Missing Artifacts", value: "Yes" });

  const container = document.getElementById("activeFilterChips");
  if (!chips.length) {
    container.innerHTML = '<span class="filter-chip filter-chip--empty">No active filters</span>';
    return;
  }

  container.innerHTML = chips
    .map((chip) => `<button class="filter-chip" type="button" data-filter-key="${chip.key}">${escapeHtml(chip.label)}: ${escapeHtml(chip.value)} <span>×</span></button>`)
    .join("");
  container.querySelectorAll("[data-filter-key]").forEach((chip) => {
    chip.addEventListener("click", () => clearFilter(chip.dataset.filterKey));
  });
}

function clearFilter(key) {
  filters[key] = false;
  if (!["overdue", "endingSoon", "missingArtifacts"].includes(key)) {
    filters[key] = "";
  }

  const controlMap = {
    assignee: "filterAssignee",
    status: "filterStatus",
    priority: "filterPriority",
    program: "filterProgram",
    agreements: "filterAgreements",
    quarter: "filterQuarter",
    health: "filterHealth",
    overdue: "filterOverdue",
    endingSoon: "filterEndingSoon",
    missingArtifacts: "filterMissingArtifacts",
  };
  const control = document.getElementById(controlMap[key]);
  if (control?.type === "checkbox") control.checked = false;
  if (control?.tagName === "SELECT") control.value = "";
  render();
}

function projectIssues(portfolio) {
  return portfolio.filter((issue) => issue.issueType === "Project");
}

function activeProjects(portfolio) {
  return projectIssues(portfolio).filter(isActive);
}

function programIssues(portfolio) {
  return portfolio.filter((issue) => issue.issueType === "Program");
}

function renderExecutiveKpis(portfolio) {
  const active = activeProjects(portfolio);
  const programs = programIssues(portfolio).filter(isActive);
  const red = active.filter((issue) => issue.calculatedHealth === "Red").length;
  const yellow = active.filter((issue) => issue.calculatedHealth === "Yellow").length;
  const endingSoon = active.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) >= 0 && daysFromToday(issue.targetEnd) < 30).length;
  const complianceAverage = active.length ? Math.round(active.reduce((sum, issue) => sum + issue.compliance, 0) / active.length) : 0;
  const healthScore = active.length ? Math.max(0, Math.round(((active.length - red * 1.4 - yellow * 0.55) / active.length) * 100)) : 100;
  const nextMilestone = active
    .filter((issue) => hasValue(issue.targetEnd))
    .sort((a, b) => Math.abs(daysFromToday(a.targetEnd)) - Math.abs(daysFromToday(b.targetEnd)))[0];
  const cards = [
    { label: "Portfolio Health", value: healthScore, trend: "↑ +5% vs last month", detail: `${complianceAverage}% lifecycle compliance`, tone: "green" },
    { label: "Portfolio Trend", value: red <= yellow ? "Stable" : "Risk up", trend: red <= yellow ? "Risks contained" : "Critical load increased", detail: `${yellow} warning / ${red} critical`, tone: red ? "yellow" : "green" },
    { label: "Projects At Risk", value: red + yellow, trend: `${red} critical`, detail: "Red and Yellow projects", tone: red ? "red" : "yellow" },
    { label: "Programs Active", value: programs.length, trend: "Live portfolio streams", detail: `${active.length} active projects`, tone: "blue" },
    { label: "Upcoming Milestones", value: endingSoon, trend: nextMilestone ? nextMilestone.targetEnd : "No upcoming date", detail: nextMilestone ? nextMilestone.summary : "No active milestones", tone: endingSoon ? "yellow" : "green" },
  ];

  document.getElementById("executiveKpis").innerHTML = cards
    .map(
      (card) => `<article class="executive-card executive-card--${card.tone}">
        <div class="metric-value">${escapeHtml(card.value)}</div>
        <div class="metric-label">${escapeHtml(card.label)}</div>
        <div class="metric-trend">${escapeHtml(card.trend)}</div>
        <p>${escapeHtml(card.detail)}</p>
      </article>`,
    )
    .join("");
}

function renderKpis(portfolio) {
  const active = activeProjects(portfolio);
  const kpis = [
    ["Healthy Projects", active.filter((issue) => issue.calculatedHealth === "Green").length, "Projects with no risk signals", "✓", "green"],
    ["Attention Required", active.filter((issue) => ["Red", "Yellow"].includes(issue.calculatedHealth)).length, "Red and Yellow projects", "!", "yellow"],
    ["Critical Projects", active.filter((issue) => issue.calculatedHealth === "Red").length, "Requires executive focus", "×", "red"],
    ["Missing Artifacts", active.filter(missingArtifacts).length, "Passport or roadmap missing", "□", "blue"],
    ["Overdue", active.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0).length, "Target End is in the past", "↘", "red"],
    ["Ending Soon", active.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) >= 0 && daysFromToday(issue.targetEnd) < 30).length, "Target End within 30 days", "→", "yellow"],
  ];

  document.getElementById("kpiGrid").innerHTML = kpis
    .map(
      ([label, value, description, icon, tone]) => `<article class="overview-card overview-card--${tone}">
        <div class="overview-card__icon">${icon}</div>
        <div>
          <div class="overview-card__value">${value}</div>
          <div class="overview-card__label">${label}</div>
          <p>${description}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderHealthDistribution(portfolio) {
  const active = activeProjects(portfolio);
  const counts = [
    ["Healthy", "Green", active.filter((issue) => issue.calculatedHealth === "Green").length],
    ["Warning", "Yellow", active.filter((issue) => issue.calculatedHealth === "Yellow").length],
    ["Critical", "Red", active.filter((issue) => issue.calculatedHealth === "Red").length],
  ];
  const total = Math.max(1, active.length);

  document.getElementById("healthDistribution").innerHTML = counts
    .map(([label, health, count]) => {
      const percent = Math.round((count / total) * 100);
      return `<div class="distribution-row distribution-row--${health.toLowerCase()}">
        <div class="distribution-label">${label}</div>
        <div class="distribution-track"><span style="width:${Math.max(3, percent)}%"></span></div>
        <strong>${count}</strong>
      </div>`;
    })
    .join("");
}

function healthBadge(health) {
  return `<span class="badge badge--${health.toLowerCase()}">${health}</span>`;
}

function valueOrDash(value) {
  return hasValue(value) ? escapeHtml(value) : '<span class="cell-muted">-</span>';
}

function rowHtml(columns, gridClass, issue) {
  const data = issue ? ` data-key="${issue.key}"` : "";
  return `<div class="table-row ${gridClass}"${data}>${columns.map((column) => `<div>${column}</div>`).join("")}</div>`;
}

function renderTable(id, gridClass, headers, rows, mapper) {
  const table = document.getElementById(id);
  if (!rows.length) {
    table.innerHTML = `<div class="empty-state">No issues match current filters.</div>`;
    return;
  }
  table.innerHTML = rowHtml(headers, `${gridClass} table-head`) + rows.map((row) => rowHtml(mapper(row), gridClass, row.key ? row : null)).join("");
  table.querySelectorAll("[data-key]").forEach((row) => {
    row.addEventListener("click", () => openDrawer(row.dataset.key));
  });
}

function renderAttention(portfolio) {
  const rows = activeProjects(portfolio)
    .filter((issue) => ["Red", "Yellow"].includes(issue.calculatedHealth))
    .sort((a, b) => {
      const healthOrder = { Red: 0, Yellow: 1, Green: 2 };
      const priorityOrder = { Critical: 0, High: 1, Medium: 2, Low: 3 };
      return (
        healthOrder[a.calculatedHealth] - healthOrder[b.calculatedHealth] ||
        priorityOrder[a.priority] - priorityOrder[b.priority] ||
        (daysFromToday(a.targetEnd) ?? 9999) - (daysFromToday(b.targetEnd) ?? 9999)
      );
    });

  renderTable(
    "attentionTable",
    "attention-grid",
    ["Project", "Status", "PM", "Program", "Target End", "Health", "Reason"],
    rows,
    (issue) => [
      `<div class="project-cell"><span class="issue-key">${issue.key}</span><strong>${escapeHtml(issue.summary)}</strong><span>${priorityBadge(issue.priority)}</span></div>`,
      `<span class="status-pill">${escapeHtml(issue.status)}</span>`,
      valueOrDash(issue.assignee),
      valueOrDash(issue.programName),
      valueOrDash(issue.targetEnd),
      healthBadge(issue.calculatedHealth),
      escapeHtml(issue.healthReason),
    ],
  );
}

function renderTimeline(portfolio) {
  const rows = activeProjects(portfolio)
    .filter((issue) => hasValue(issue.targetEnd))
    .map((issue) => ({ ...issue, days: daysFromToday(issue.targetEnd) }))
    .filter((issue) => issue.days < 45)
    .sort((a, b) => a.days - b.days)
    .slice(0, 8);

  if (!rows.length) {
    document.getElementById("timelineStrip").innerHTML = '<div class="empty-state">No upcoming or overdue milestones.</div>';
    return;
  }

  document.getElementById("timelineStrip").innerHTML = rows
    .map((issue) => {
      const tone = issue.days < 0 ? "red" : issue.days < 30 ? "yellow" : "green";
      const label = issue.days < 0 ? `${Math.abs(issue.days)}d overdue` : `${issue.days}d left`;
      return `<button class="timeline-item timeline-item--${tone}" type="button" data-key="${issue.key}">
        <span class="timeline-dot"></span>
        <strong>${escapeHtml(issue.targetEnd)}</strong>
        <span>${escapeHtml(issue.summary)}</span>
        <em>${label}</em>
      </button>`;
    })
    .join("");

  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", () => openDrawer(item.dataset.key));
  });
}

function renderRisks(portfolio) {
  const active = activeProjects(portfolio);
  const cards = [
    {
      label: "Overdue Projects",
      value: active.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0).length,
      description: "Review dates and unblock decisions",
      filter: "overdue",
      tone: "red",
    },
    {
      label: "Missing Artifacts",
      value: active.filter(missingArtifacts).length,
      description: "Passport or roadmap is absent",
      filter: "missingArtifacts",
      tone: "yellow",
    },
    {
      label: "Projects without PM",
      value: active.filter((issue) => !hasValue(issue.assignee)).length,
      description: "Assign ownership before execution",
      filter: "unassigned",
      tone: "red",
    },
    {
      label: "Projects without DoD",
      value: active.filter((issue) => !hasValue(issue.definitionOfDone)).length,
      description: "Clarify acceptance criteria",
      filter: "dod",
      tone: "blue",
    },
  ];

  document.getElementById("riskActions").innerHTML = cards
    .map(
      (card) => `<button class="risk-card risk-card--${card.tone}" type="button" data-risk-filter="${card.filter}">
        <span>${escapeHtml(card.label)}</span>
        <strong>${card.value}</strong>
        <em>${escapeHtml(card.description)}</em>
      </button>`,
    )
    .join("");

  document.querySelectorAll("[data-risk-filter]").forEach((card) => {
    card.addEventListener("click", () => {
      const risk = card.dataset.riskFilter;
      if (risk === "overdue") filters.overdue = true;
      if (risk === "missingArtifacts") filters.missingArtifacts = true;
      if (risk === "unassigned") filters.assignee = "";
      if (risk === "dod") filters.health = "";
      syncControlsFromFilters();
      render();
    });
  });
}

function syncControlsFromFilters() {
  document.getElementById("filterAssignee").value = filters.assignee;
  document.getElementById("filterStatus").value = filters.status;
  document.getElementById("filterPriority").value = filters.priority;
  document.getElementById("filterProgram").value = filters.program;
  document.getElementById("filterAgreements").value = filters.agreements;
  document.getElementById("filterQuarter").value = filters.quarter;
  document.getElementById("filterHealth").value = filters.health;
  document.getElementById("filterOverdue").checked = filters.overdue;
  document.getElementById("filterEndingSoon").checked = filters.endingSoon;
  document.getElementById("filterMissingArtifacts").checked = filters.missingArtifacts;
}

function renderEnding(portfolio) {
  const rows = activeProjects(portfolio)
    .filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) >= 0 && daysFromToday(issue.targetEnd) < 30)
    .sort((a, b) => daysFromToday(a.targetEnd) - daysFromToday(b.targetEnd));

  renderTable(
    "endingTable",
    "ending-grid",
    ["Key", "Summary", "PM", "Status", "Priority", "Target End", "Program", "DoD", "Passport", "Roadmap"],
    rows,
    (issue) => [
      `<span class="issue-key">${issue.key}</span>`,
      escapeHtml(issue.summary),
      valueOrDash(issue.assignee),
      escapeHtml(issue.status),
      priorityBadge(issue.priority),
      valueOrDash(issue.targetEnd),
      valueOrDash(issue.programName),
      yesNo(issue.definitionOfDone),
      yesNo(issue.passport),
      yesNo(issue.roadmap),
    ],
  );
}

function renderDeviations(portfolio) {
  const rows = activeProjects(portfolio)
    .filter((issue) => {
      const overdue = hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0;
      const shifted = daysBetween(issue.endDate, issue.targetEnd) > 30;
      return overdue || shifted;
    })
    .sort((a, b) => (daysFromToday(a.targetEnd) ?? 9999) - (daysFromToday(b.targetEnd) ?? 9999));

  renderTable(
    "deviationsTable",
    "deviation-grid",
    ["Key", "Summary", "PM", "Status", "Target End", "End Date", "Deviation Days", "Health Reason"],
    rows,
    (issue) => [
      `<span class="issue-key">${issue.key}</span>`,
      escapeHtml(issue.summary),
      valueOrDash(issue.assignee),
      escapeHtml(issue.status),
      valueOrDash(issue.targetEnd),
      valueOrDash(issue.endDate),
      String(daysBetween(issue.endDate || formatDate(today), issue.targetEnd) ?? "-"),
      escapeHtml(issue.healthReason),
    ],
  );
}

function renderCompliance(portfolio) {
  const active = activeProjects(portfolio);
  const metric = (label, predicate) => {
    const percent = active.length ? Math.round((active.filter(predicate).length / active.length) * 100) : 0;
    return { label, percent };
  };
  const metrics = [
    metric("% проектов с DoD", (issue) => hasValue(issue.definitionOfDone)),
    metric("% проектов с Passport", (issue) => hasValue(issue.passport)),
    metric("% проектов с Roadmap", (issue) => hasValue(issue.roadmap)),
    metric("% проектов с Request participants", (issue) => hasValue(issue.requestParticipants)),
    metric("% проектов с Target End", (issue) => hasValue(issue.targetEnd)),
    { label: "Compliance Score", percent: active.length ? Math.round(active.reduce((sum, issue) => sum + issue.compliance, 0) / active.length) : 0 },
  ];

  document.getElementById("complianceScore").textContent = `${metrics.at(-1).percent}%`;
  document.getElementById("qualityGrid").innerHTML = metrics
    .map(
      (item) => `<div class="quality-item"><div class="quality-item__top"><strong>${item.label}</strong><span>${item.percent}%</span></div><div class="quality-bar"><span style="width:${item.percent}%"></span></div></div>`,
    )
    .join("");
}

function renderWorkload(portfolio) {
  const active = activeProjects(portfolio);
  const grouped = uniqueOptions(active, (issue) => issue.assignee || "Unassigned").map((pm) => {
    const rows = active.filter((issue) => (issue.assignee || "Unassigned") === pm);
    return {
      pm,
      active: rows.length,
      red: rows.filter((issue) => issue.calculatedHealth === "Red").length,
      yellow: rows.filter((issue) => issue.calculatedHealth === "Yellow").length,
      overdue: rows.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0).length,
      missing: rows.filter(missingArtifacts).length,
    };
  });

  renderTable(
    "workloadTable",
    "workload-grid",
    ["PM", "Active Projects", "Red Projects", "Yellow Projects", "Overdue Projects", "Missing Artifacts"],
    grouped,
    (row) => [escapeHtml(row.pm), row.active, row.red, row.yellow, row.overdue, row.missing],
  );
}

function renderPrograms(portfolio) {
  const rows = programIssues(portfolio).map((program) => {
    const linked = activeProjects(portfolio).filter((issue) => issue.program === program.key);
    const targetStarts = linked.map((issue) => issue.targetStart).filter(Boolean).sort();
    const targetEnds = linked.map((issue) => issue.targetEnd).filter(Boolean).sort();
    return {
      key: program.key,
      program: program.summary,
      count: linked.length,
      red: linked.filter((issue) => issue.calculatedHealth === "Red").length,
      yellow: linked.filter((issue) => issue.calculatedHealth === "Yellow").length,
      overdue: linked.filter((issue) => hasValue(issue.targetEnd) && daysFromToday(issue.targetEnd) < 0).length,
      earliestStart: targetStarts[0] || "",
      latestEnd: targetEnds[targetEnds.length - 1] || "",
    };
  });

  renderTable(
    "programTable",
    "program-grid",
    ["Program", "Projects Count", "Red Projects", "Yellow Projects", "Overdue Projects", "Earliest Target Start", "Latest Target End"],
    rows,
    (row) => [escapeHtml(row.program), row.count, row.red, row.yellow, row.overdue, valueOrDash(row.earliestStart), valueOrDash(row.latestEnd)],
  );
}

function renderStatusChart(portfolio) {
  const projects = projectIssues(portfolio);
  const max = Math.max(1, ...statusesProject.map((status) => projects.filter((issue) => issue.status === status).length));
  document.getElementById("statusChart").innerHTML = statusesProject
    .map((status) => {
      const count = projects.filter((issue) => issue.status === status).length;
      const intensity = count === max ? "max" : count >= Math.ceil(max / 2) ? "medium" : "low";
      return `<div class="status-tile status-tile--${intensity}">
        <span>${status}</span>
        <strong>${count}</strong>
        <em>projects</em>
      </div>`;
    })
    .join("");
}

function renderRegistry(portfolio) {
  document.getElementById("registryCount").textContent = `${portfolio.length} issues`;
  document.getElementById("registryList").innerHTML = portfolio
    .map(
      (issue) => `<article class="registry-card" data-key="${issue.key}">
        <div><span class="issue-key">${issue.key}</span><div class="meta-label">${issue.issueType}</div></div>
        <div class="registry-card__summary">${escapeHtml(issue.summary)}<div class="meta-label">${escapeHtml(issue.healthReason)}</div></div>
        <div class="meta-stack"><span class="meta-label">Status</span><span>${escapeHtml(issue.status)}</span></div>
        <div class="meta-stack"><span class="meta-label">PM</span><span>${valueOrDash(issue.assignee)}</span></div>
        <div>${priorityBadge(issue.priority)}</div>
        <div class="meta-stack"><span class="meta-label">Program</span><span>${valueOrDash(issue.programName)}</span></div>
        <div class="meta-stack"><span class="meta-label">Target End</span><span>${valueOrDash(issue.targetEnd)}</span></div>
        <div>${healthBadge(issue.calculatedHealth)} <span class="badge badge--gray">${issue.compliance}%</span></div>
      </article>`,
    )
    .join("");
  document.querySelectorAll(".registry-card").forEach((row) => {
    row.addEventListener("click", () => openDrawer(row.dataset.key));
  });
}

function render() {
  const filtered = applyFilters(getPortfolio());
  updateActiveFilterCount();
  renderExecutiveKpis(filtered);
  renderKpis(filtered);
  renderHealthDistribution(filtered);
  renderRisks(filtered);
  renderAttention(filtered);
  renderTimeline(filtered);
  renderEnding(filtered);
  renderDeviations(filtered);
  renderCompliance(filtered);
  renderWorkload(filtered);
  renderPrograms(filtered);
  renderStatusChart(filtered);
  renderRegistry(filtered);
}

function openDrawer(key) {
  const issue = getPortfolio().find((item) => item.key === key);
  if (!issue) return;
  const fields = [
    "issueType",
    "status",
    "priority",
    "reporter",
    "assignee",
    "requestParticipants",
    "agreements",
    "quarter",
    "program",
    "targetStart",
    "startDate",
    "dsd",
    "targetEnd",
    "endDate",
    "definitionOfDone",
    "passport",
    "roadmap",
  ];

  document.getElementById("drawerContent").innerHTML = `
    <div class="drawer-title">
      <div class="issue-key">${issue.key}</div>
      <h2 id="drawerTitle">${escapeHtml(issue.summary)}</h2>
      ${healthBadge(issue.calculatedHealth)} <span class="badge badge--gray">${issue.compliance}% compliance</span>
    </div>
    <section class="drawer-section">
      <h3>Health Reason</h3>
      <p>${escapeHtml(issue.healthReason)}</p>
    </section>
    <section class="drawer-section">
      <h3>Lifecycle Compliance</h3>
      <p>Checked fields: ${complianceFields(issue).map((field) => fieldLabels[field] || field).join(", ")}</p>
    </section>
    <section class="drawer-section">
      <h3>Registry Fields</h3>
      <div class="field-grid">
        ${fields.map((field) => `<div><span class="meta-label">${fieldLabels[field]}</span><br>${valueOrDash(field === "program" ? issue.programName : issue[field])}</div>`).join("")}
      </div>
    </section>
  `;
  document.getElementById("issueDrawer").classList.add("is-open");
  document.getElementById("issueDrawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  document.getElementById("issueDrawer").classList.remove("is-open");
  document.getElementById("issueDrawer").setAttribute("aria-hidden", "true");
}

function exportCsv() {
  const filtered = applyFilters(getPortfolio());
  const headers = ["Key", "Summary", "Issue Type", "Status", "Priority", "Assignee", "Program", "Target End", "End Date", "Calculated Health", "Health Reason", "Compliance"];
  const rows = filtered.map((issue) => [
    issue.key,
    issue.summary,
    issue.issueType,
    issue.status,
    issue.priority,
    issue.assignee,
    issue.programName,
    issue.targetEnd,
    issue.endDate,
    issue.calculatedHealth,
    issue.healthReason,
    `${issue.compliance}%`,
  ]);
  const csv = [headers, ...rows].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "portfolio-health-dashboard.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function priorityBadge(priority) {
  const className = priority === "Critical" ? "red" : priority === "High" ? "yellow" : priority === "Medium" ? "blue" : "gray";
  return `<span class="badge badge--${className}">${escapeHtml(priority)}</span>`;
}

function yesNo(value) {
  return hasValue(value) ? '<span class="badge badge--green">Yes</span>' : '<span class="badge badge--red">No</span>';
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

initTheme();
initFilters();
render();
