const ImageGallary = () => {
    return (
        <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src=""
                        alt="Image" />
                </figure>
                <div className="card-body">
                    <p>Upload by: </p>
                    <span>Created on: </span>
                </div>
            </div>
        </div>
    )
}

export default ImageGallary