const Signup = () => {
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h2 className="text-3xl">Welcome to </h2>
                    <h1 className="text-5xl font-bold py-3">Public Gallary</h1>
                    <p className="py-3">
                        Sign up today to share your photos with the world!
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign-Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Signup