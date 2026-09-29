// Dados mockados do Dashboard do Fornecedor.
// Quando o Django estiver pronto, estes exports devem ser substituídos por
// chamadas em src/services/ (via api.js) — o formato abaixo já é o que os
// componentes de components/supplier-dashboard/ esperam receber.

export const mockSupplier = {
  name: "Fornecedor",
};

export const supplierSummaryStats = [
  { id: "new", label: "Novas solicitações", value: "03" },
  { id: "proposals", label: "Propostas enviadas", value: "05" },
  { id: "progress", label: "Em andamento", value: "02" },
];

// Status -> variante do Badge (reaproveita as variantes existentes).
export const INCOMING_REQUEST_STATUS = {
  new: { label: "Nova", variant: "orange" },
  proposal_sent: { label: "Proposta enviada", variant: "warning" },
  in_progress: { label: "Em andamento", variant: "success" },
};

export const incomingRequests = [
  {
    id: "in-001",
    title: "Limpeza pós-obra",
    client: "Construtora Horizonte",
    date: "2026-09-27",
    status: "new",
  },
  {
    id: "in-002",
    title: "Limpeza empresarial",
    client: "Clínica Vida Plena",
    date: "2026-09-24",
    status: "proposal_sent",
  },
  {
    id: "in-003",
    title: "Higienização de espaços",
    client: "Escritório Nova Era",
    date: "2026-09-18",
    status: "in_progress",
  },
];

// Ações principais (botões sob a saudação).
export const supplierPrimaryActions = [
  {
    id: "requests",
    label: "Ver solicitações",
    to: "/fornecedor/solicitacoes",
    variant: "primary",
  },
  {
    id: "services",
    label: "Meus serviços",
    to: "/fornecedor/servicos",
    variant: "secondary",
  },
];
