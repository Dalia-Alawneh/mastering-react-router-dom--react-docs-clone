import PageWrapper from "../hoc/PageWrapper"

const BlogPage = () => {
    return (
        <div>
            Blog Page
        </div>
    )
}
const WrappedBlog = PageWrapper(BlogPage)
export default WrappedBlog
