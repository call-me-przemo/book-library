import { Books as BooksModel } from '../database';
import { RouteHandler } from 'fastify';
import { Dto } from './dto';

export class Books {
  constructor(private model: BooksModel) {}

  list: RouteHandler<Dto['List']> = async (req, rep) => this.model.listBooks();

  get: RouteHandler<Dto['Get']> = async (req, rep) => {
    const book = await this.model.getBook(Number(req.params.isbn));

    return book ? book : rep.notFound();
  };

  create: RouteHandler<Dto['Create']> = async (req, rep) => {
    const book = await this.model.getBook(req.body.isbn);

    if (book) {
      return rep.conflict();
    }

    await this.model.createBook(req.body);

    return { isbn: req.body.isbn };
  };

  update: RouteHandler<Dto['Update']> = async (req, rep) => {
    const isbn = Number(req.params.isbn);

    const affectedCount = await this.model.updateBook(
      isbn,
      req.body.availableCount
    );

    if (!affectedCount) {
      return rep.notFound();
    }

    return { isbn };
  };

  delete: RouteHandler<Dto['Delete']> = async (req, rep) => {
    const affectedCount = await this.model.deleteBook(Number(req.params.isbn));

    if (!affectedCount) {
      return rep.notFound();
    }

    rep.code(204);
  };
}
