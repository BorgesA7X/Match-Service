import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import { ArrowRightIcon } from "../dashboard/icons";
import {
  incomingRequests,
  INCOMING_REQUEST_STATUS,
} from "../../data/supplierDashboard";

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function RequestRow({ request }) {
  const status = INCOMING_REQUEST_STATUS[request.status];

  return (
    <li className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 xl:gap-2 xl:py-2">
      <div className="min-w-0 xl:w-72 xl:shrink-0">
        <h3 className="truncate font-display text-base font-medium text-cream xl:text-sm">
          {request.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cream/45 xl:mt-0.5">
          {request.client} · {formatDate(request.date)}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:shrink-0 xl:gap-x-10">
        <Badge variant={status.variant}>{status.label}</Badge>
        <Link
          to="/fornecedor/solicitacoes"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-cream/60 transition hover:text-orange"
        >
          Ver solicitação
          <ArrowRightIcon width={14} height={14} />
        </Link>
      </div>
    </li>
  );
}

/**
 * Solicitações recebidas mais recentes (mesmo padrão do RecentRequests
 * do cliente, mas com o nome do cliente no lugar da categoria).
 */
export default function IncomingRequests() {
  return (
    <section aria-labelledby="incoming-requests-title">
      <div className="mb-3 flex items-baseline justify-between xl:mb-1.5">
        <h2
          id="incoming-requests-title"
          className="font-display text-xl font-semibold text-cream xl:text-base"
        >
          Solicitações recebidas
        </h2>
        <Link
          to="/fornecedor/solicitacoes"
          className="font-mono text-[11px] uppercase tracking-widest text-cream/50 transition hover:text-orange"
        >
          Ver todas
        </Link>
      </div>

      <ul className="divide-y divide-hairline overflow-hidden rounded-[20px] border border-hairline bg-surface-1">
        {incomingRequests.map((request) => (
          <RequestRow key={request.id} request={request} />
        ))}
      </ul>
    </section>
  );
}
