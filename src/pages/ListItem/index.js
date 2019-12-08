import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { BookItem } from './styles';

export default function ListItem(props) {
  const { id } = props.match.params;

  const [book, setBook] = useState({});

  useEffect(async () => {
    const resp = await api.get(`/books/${id}`);

    setBook(resp.data);
  }, []);
  return (
    <BookItem>
      <img src={book.img_url} alt="" />
      <div>
        <div className="title">
          <h1>{book.title}</h1>
          <small>
            <strong>Cod: {book.isbn}</strong>
          </small>
        </div>
        <h2> {book.author} </h2>
        <div className="detail">
          <h4>
            <strong>Editora</strong>
          </h4>
          <span>{book.publishing_company}</span>
        </div>

        <div className="detail">
          <h4>
            <strong>Ano</strong>
          </h4>
          <span>{book.year}</span>
        </div>

        <div className="detail">
          <h4>
            <strong>Lingua</strong>
          </h4>
          <span>{book.language}</span>
        </div>

        <div className="detail">
          <h4>
            <strong>Peso</strong>
          </h4>
          <span>{book.weight}</span>
        </div>

        <div className="detail">
          <h4>
            <strong>Dimenssão</strong>
          </h4>
          <span>{book.dimension}</span>
        </div>
        <Link to={`/6`}>
          <button>voltar</button>
        </Link>
      </div>
    </BookItem>
  );
}
