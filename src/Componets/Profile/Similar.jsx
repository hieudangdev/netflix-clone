import React from 'react';
import Row from 'Componets/Row/Row';

function SimilarMovies({ Similar, mediaType }) {
   return <Row dataMovies={Similar} mediaType={mediaType} title='Similar movies' />;
}

export default SimilarMovies;
