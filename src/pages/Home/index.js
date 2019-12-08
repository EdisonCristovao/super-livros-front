import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Table, Card } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { chain } from 'lodash';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import MyPagination from '../../components/Pagination';
import * as BookActions from '../../store/module/book/actions';

import { Header, DateFields, TableSection, OutlinedButton } from './styles';

const Home = ({ fetchBooks, bookList, page, total }) => {
  const [filter, setFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(2);

  useEffect(() => {
    fetchBooks('', null, null, page, rowsPerPage);
  }, []);

  const dateBlur = () => {
    if (dateFrom !== '' && dateTo !== '' && dateFrom > dateTo) {
      setDateFrom(0);
      setDateTo(0);
      toast.warn('Ano incorreto!');
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchBooks(filter, dateFrom, dateTo, page, rowsPerPage);
  };

  const pageChange = newPage => {
    fetchBooks(filter, dateFrom, dateTo, newPage, rowsPerPage);
  };

  return (
    <div>
      <Header>
        <h1>
          <strong>SUPERO</strong>
        </h1>
        <Form onSubmit={handleSearch}>
          <Form.Control
            onChange={e => setFilter(e.target.value)}
            value={filter}
            placeholder="Filtrar por título, autor ou ISBN"
          />
        </Form>
        <div>
          <OutlinedButton onClick={handleSearch}>Buscar</OutlinedButton>
        </div>
      </Header>

      <hr />
      <DateFields>
        <Form>
          <p>Filtrar por ano de publicação. De</p>
          <Form.Group>
            <Form.Control
              value={dateFrom}
              onChange={e => setDateFrom(e.target.value)}
              onBlur={() => dateBlur()}
            ></Form.Control>
          </Form.Group>
          <FaCalendarAlt size={30} />
          <span>até</span>
          <Form.Group>
            <Form.Control
              value={dateTo}
              onChange={e => setDateTo(e.target.value)}
              onBlur={e => dateBlur()}
            ></Form.Control>
          </Form.Group>
          <FaCalendarAlt size={30} />
        </Form>
        <p className="toLeft">{bookList.length} resultados encontrados</p>
      </DateFields>
      <hr />

      <TableSection>
        <Card style={{ width: '100%', border: 'none' }}>
          <Card.Body style={{ width: '100%' }}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Livro</th>
                  <th>ISBN</th>
                  <th>Autor</th>
                  <th>Editora</th>
                  <th>Ano</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {chain(bookList)
                  .map(book => (
                    <tr>
                      <td>{book.title}</td>
                      <td>{book.isbn}</td>
                      <td>{book.author}</td>
                      <td>{book.publishing_company}</td>
                      <td>
                        {book.year && format(parseISO(book.year), 'yyyy')}
                      </td>
                      <td>
                        <Link to={`/${book.id}`}>
                          <OutlinedButton>Detalhes</OutlinedButton>
                        </Link>
                      </td>
                    </tr>
                  ))
                  .value()}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer>
            <MyPagination
              total={total}
              page={page}
              rowsPerPage={rowsPerPage}
              pageChange={pageChange}
            />
          </Card.Footer>
        </Card>
      </TableSection>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(BookActions, dispatch);

const mapStateToProps = ({ book }) => book;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
