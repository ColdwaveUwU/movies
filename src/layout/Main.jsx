import { Container, Typography } from "@mui/material";
import { Movies } from "../components/Movies";
import { useEffect, useState } from "react";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase();
    useEffect(() => {
        fetch(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=
            ${year}&month=${month}`,
            {
                method: "GET",
                headers: {
                    "X-API-KEY": "fcb1378e-f77c-4951-9490-399034c968a0",
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [year]);
    return (
        <Container style={{ marginBottom: "60px" }}>
            <Typography variant="body1">
                <Movies movies = {movies}></Movies>
            </Typography>
        </Container>
    );
};

export { Main };
