import PageWrapper from "../hoc/PageWrapper"

const Reference = () => {
    return (
        <div>
            <h2>Reference Page</h2>
        </div>
    )
}

const WrappedReference = PageWrapper(Reference) 
export default WrappedReference
