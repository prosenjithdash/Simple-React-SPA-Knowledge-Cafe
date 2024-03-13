
// 42-3 Set Layout And Make React Responsive
import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    const { title } = blog;
    return (
        <div>
            <h2>name:{ title} </h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog;