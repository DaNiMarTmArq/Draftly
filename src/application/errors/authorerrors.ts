export class AuthorAlreadyExistsError extends Error {
  constructor(id: string, type: string) {
    type === "name"
      ? super(`Author with name "${id}" already exists`)
      : super(`Author with email "${id}" already exists`);
    this.name = "AuthorAlreadyExistsError";
  }
}

export class AuthorCreationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthorCreationError";
  }
}

export class AuthorNotFoundError extends Error {
  constructor(authorId: string) {
    super(`No author found with id: ${authorId}`);
    this.name = "AuthorNotFoundError";
  }
}

export class AuthorReadError extends Error {
  constructor() {
    super("Failed to read authors");
    this.name = "AuthorReadErrors";
  }
}
