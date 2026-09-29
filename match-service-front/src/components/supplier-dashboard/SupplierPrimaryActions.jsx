import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { supplierPrimaryActions } from "../../data/supplierDashboard";

export default function SupplierPrimaryActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {supplierPrimaryActions.map((action) => (
        <Button
          key={action.id}
          as={Link}
          to={action.to}
          variant={action.variant}
          size="md"
          className="sm:min-w-[180px] xl:min-h-[38px] xl:py-2"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
