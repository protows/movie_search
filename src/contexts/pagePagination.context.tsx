import React, { createContext, useEffect, useState } from "react";
import { IPagePagination } from '../interfacesPagePagination'
import { IPageTvPagination } from '../interfacesTvPagePagination'

interface Props {
  children: React.ReactNode;
}

const initialTodos: IPagePagination = {
  pageNumber: 1,
};

const initialTvSeries: IPageTvPagination = {
  pageNumberTvSeries: 1,
};

const TodoContext = createContext({
  pageNumber: initialTodos,
  // editPage: (todo: IPagePagination) => { },
  // editPage: initialTodos,
  editPage: (page: any) => { },

  pageNumberTvSeries: initialTvSeries,
  editPageTvSeries: (page: any) => { },
});

// export const TodoProvider = ({ children }: IPagePagination) => {
export const TodoProvider = ({ children }: Props) => {

  // export const TodoProvider = () => {
  const [pageNumber, setPageNumber] = React.useState<IPagePagination>(initialTodos);

  const editPage = (page: number) => {
    console.log("ssss editPage  is" + page)
    setPageNumber({ pageNumber: page });
    console.log("new  pageNumber is" + page)

  };
  ///////
  const [pageNumberTvSeries, setPageNumberTvSeries] = React.useState<IPageTvPagination>(initialTvSeries);

  const editPageTvSeries = (page: number) => {
    console.log("ssss pageNumberTvSeries  is" + page)
    setPageNumberTvSeries({ pageNumberTvSeries: page });
    console.log("new  pageNumber is" + page)

  };

  return (
    <TodoContext.Provider
      value={{
        pageNumber,
        editPage,
        pageNumberTvSeries,
        editPageTvSeries
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
