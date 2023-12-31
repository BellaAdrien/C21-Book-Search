import {gql} from '@apollo/client'

export const ADD_USER=gql`mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }`

  export const LOGIN=gql`mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }`

  export const SAVE_book=gql`mutation SaveBook($book: bookInput!) {
    saveBook(book: $book) {
      savedBooks {
        title
      }
    }
  }`