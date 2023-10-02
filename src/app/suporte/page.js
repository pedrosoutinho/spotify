import Faq from "../components/faq";
import ImportBsJS from "../components/importBsJS.js";
import Planos from "../components/tabelaPlanos";

export default function Page() {
    return (
        <main>
            <ImportBsJS />
            <Faq />
            <Planos />
        </main>
    );
}

