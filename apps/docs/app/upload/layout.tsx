import { withI18n } from "~/lib/i18n/with-i18n";

function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export default withI18n(Layout);

