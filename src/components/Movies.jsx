import Loader from "./Preloader/Loader";

const BASE_URL_IMG = `https://image.tmdb.org/t/p/`;

const Movies = ( { movie } ) => {

    const { poster_path, title, overview, vote_average } = movie;

    return (
        <div className="col s12 m6 l3">
            <div>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        {
                            poster_path ?
                                <img
                                    className="activator"
                                    src={`${ BASE_URL_IMG }w500${ poster_path }`}
                                    alt={title} />
                                :
                                <Loader />
                        }
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            {title}
                        </span>
                        <p><a href="#">{vote_average}</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Movies;