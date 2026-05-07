type BadgeVariant =
  | "ativo"
  | "inativo"
  | "pendente"
  | "pago"
  | "processando"
  | "cancelado"
  | "confirmado"
  | "enviado"
  | "entregue"
  | "suspenso";

const variantClasses: Record<BadgeVariant, string> = {
  ativo: "bg-emerald-50 text-emerald-700 border-emerald-200",
  inativo: "bg-gray-100 text-gray-500 border-gray-200",
  pendente: "bg-amber-50 text-amber-700 border-amber-200",
  pago: "bg-emerald-50 text-emerald-700 border-emerald-200",
  processando: "bg-blue-50 text-blue-700 border-blue-200",
  cancelado: "bg-red-50 text-red-700 border-red-200",
  confirmado: "bg-purple-50 text-purple-700 border-purple-200",
  enviado: "bg-blue-50 text-blue-700 border-blue-200",
  entregue: "bg-emerald-50 text-emerald-700 border-emerald-200",
  suspenso: "bg-orange-50 text-orange-700 border-orange-200",
};

const variantDots: Record<BadgeVariant, string> = {
  ativo: "bg-emerald-500",
  inativo: "bg-gray-400",
  pendente: "bg-amber-500",
  pago: "bg-emerald-500",
  processando: "bg-blue-500",
  cancelado: "bg-red-500",
  confirmado: "bg-purple-500",
  enviado: "bg-blue-500",
  entregue: "bg-emerald-500",
  suspenso: "bg-orange-500",
};

const labels: Record<BadgeVariant, string> = {
  ativo: "Ativo",
  inativo: "Inativo",
  pendente: "Pendente",
  pago: "Pago",
  processando: "Processando",
  cancelado: "Cancelado",
  confirmado: "Confirmado",
  enviado: "Enviado",
  entregue: "Entregue",
  suspenso: "Suspenso",
};

interface BadgeProps {
  status: BadgeVariant;
  showDot?: boolean;
}

export default function Badge({ status, showDot = true }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${variantClasses[status]}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${variantDots[status]}`} />}
      {labels[status]}
    </span>
  );
}
