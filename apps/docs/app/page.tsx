import HomePage from "./components/domain/home";
import { withI18n } from "~/lib/i18n/with-i18n";

function Page() {
  return <HomePage />;
}

export default withI18n(Page);
