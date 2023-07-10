import { Movie } from "./Movie";
function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {Object.keys(movies).length ? (
                Object.keys(movies).map((key) => (
                    <Movie key={key} {...movies[key]} />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export { Movies };
