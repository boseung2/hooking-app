/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Board = {
  __typename?: 'Board';
  /** 게시글 본문 */
  content: Scalars['String']['output'];
  /** 생성일 */
  createDate: Scalars['DateTime']['output'];
  /** 게시글 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 좋아요 수 */
  likes: Scalars['Int']['output'];
  /** 수정일 */
  modifiedDate: Scalars['DateTime']['output'];
  /** 게시글 타입 */
  type: Scalars['String']['output'];
  /** 조회수 */
  views: Scalars['Int']['output'];
  writer: User;
  /** 작성자 ID */
  writerId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  boards: Array<Board>;
};

export type User = {
  __typename?: 'User';
  /** 생성 일자 */
  createdAt: Scalars['String']['output'];
  /** 유저 이메일 */
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** 업데이트 일자 */
  updatedAt: Scalars['String']['output'];
  /** 유저 이름 */
  username: Scalars['String']['output'];
};

export type BoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type BoardsQuery = { __typename?: 'Query', boards: Array<{ __typename?: 'Board', id: number, type: string, content: string, views: number, likes: number, createDate: any, modifiedDate: any, writer: { __typename?: 'User', id: number, username: string, email: string } }> };


export const BoardsDocument = gql`
    query Boards {
  boards {
    id
    type
    content
    writer {
      id
      username
      email
    }
    views
    likes
    createDate
    modifiedDate
  }
}
    `;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsQuery(baseOptions?: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
      }
export function useBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export function useBoardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsSuspenseQueryHookResult = ReturnType<typeof useBoardsSuspenseQuery>;
export type BoardsQueryResult = Apollo.QueryResult<BoardsQuery, BoardsQueryVariables>;