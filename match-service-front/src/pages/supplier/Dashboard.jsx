import SupplierPrimaryActions from "../../components/supplier-dashboard/SupplierPrimaryActions";
import SupplierSummaryStrip from "../../components/supplier-dashboard/SupplierSummaryStrip";
import IncomingRequests from "../../components/supplier-dashboard/IncomingRequests";
import { mockSupplier } from "../../data/supplierDashboard";

/**
 * Dashboard do Fornecedor (/fornecedor).
 * Dados 100% mockados em src/data/supplierDashboard.js — nenhuma chamada
 * de rede. Segue a mesma estrutura e os mesmos espaçamentos (inclusive os
 * compactos a partir de xl) do Dashboard do cliente:
 * saudação > ações > indicadores > solicitações recebidas.
 */
export default function SupplierDashboard() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 xl:gap-3">
      <div className="flex flex-col gap-6 xl:gap-2">
        <header>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl xl:text-2xl">
            Olá, {mockSupplier.name}
          </h1>
          <p className="mt-2 max-w-xl text-base text-cream/60 xl:mt-1 xl:text-sm">
            Acompanhe as solicitações recebidas e as propostas do seu negócio.
          </p>
        </header>
        <SupplierPrimaryActions />
      </div>

      <SupplierSummaryStrip />
      <IncomingRequests />
    </div>
  );
}
