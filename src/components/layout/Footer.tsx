import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative"
      style={{
        background: "linear-gradient(135deg, #0D1F3C 0%, #1A3A5C 100%)",
      }}
    >
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              REACH<span className="text-accent"> GLOBAL</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Ações Globais. Em Dólar. Sem Câmbio.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`https://${CONTACT_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_INFO.website}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Instagram {CONTACT_INFO.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com${CONTACT_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Capital */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Reach Capital
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Gestora de recursos com mais de R$ 2,8 bilhões sob gestão.
              Regulamentada pela ANBIMA — Código de Melhores Práticas.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed">
            As informações contidas neste material são de caráter exclusivamente
            informativo. Este material não constitui oferta de valores
            mobiliários nos termos da legislação vigente. Rentabilidade passada
            não representa garantia de rentabilidade futura. A rentabilidade
            divulgada não é líquida de impostos. Os fundos de investimento não
            contam com a garantia do administrador, do gestor, de qualquer
            mecanismo de seguro ou do Fundo Garantidor de Crédito (FGC). Leia o
            regulamento, o formulário de informações complementares e a lâmina
            de informações essenciais antes de investir. A Reach Capital não se
            responsabiliza pela publicação acidental de informações incorretas.
            ANBIMA — Código de Melhores Práticas para Fundos de Investimento.
          </p>
          <p className="text-xs text-white/30 mt-4">
            © {new Date().getFullYear()} Reach Capital. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
