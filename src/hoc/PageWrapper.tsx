
const PageWrapper = (WrappedComponent) => {
    return function NewComponent(props) {
        return (
            <div className="flex justify-center items-center h-screen">
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default PageWrapper
