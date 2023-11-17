import { useLocation } from "react-router-dom"
import PageWrapper from "../hoc/PageWrapper"
import Textarea from "../components/ui/TextArea";

const ContributionPage = () => {
    const { state } = useLocation();

    return (
        <div className="flex flex-col text-center">
            {state?.email && <h2 className="text-center mb-3">Email: {state.email}</h2>}
            <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
            <form className="space-y-3 max-w-sm mx-auto">
                <Textarea />

                <button>Submit new issue</button>
            </form>
        </div>
    );
};

const WrappedContribution = PageWrapper(ContributionPage)
export default WrappedContribution
