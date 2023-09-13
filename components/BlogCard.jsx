const BlogCard = () => {
    return (
        <div>
            <div className="w-96 card shadow-lg border border-cyan-500">
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-primary">Edit</button>
                        <button className="btn btn-sm btn-error">Delate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;