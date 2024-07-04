import { Book } from "../models/booksModel";
import { Author } from "../models/authorsModel";
import { AuthorOfBook } from "../models/authorsOfBooksModel";
import { Borrow } from "../models/borrowsModel";
import { Copy } from "../models/copiesModel";
import { User } from "../models/usersModel";
import sequelizeInstance from "./db";

// to run the sync database code
export const startAndCountTables = async () =>{
    await sequelizeInstance.authenticate()
    console.log("Books:", await Book.count())
    console.log("Authors:", await Author.count())
    console.log("Authors of Books:", await AuthorOfBook.count())
    console.log("Copy:", await Copy.count())
    console.log("Borrows:", await Borrow.count())
    console.log("Users:", await User.count())
}