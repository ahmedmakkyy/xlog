

const page = () => {
    return (
        <div>
            <div className="card w-96 border border-indigo-500 shadow-lg mx-auto">
                <div className="card-body">
                    {/* xs */}
                    <textarea placeholder="Headline" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                    {/* lg */}
                    <textarea placeholder="....." className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    <div className="btn btn-success">Add</div>
                </div>
            </div>
        </div>
    );
};

export default page;