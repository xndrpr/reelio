import React from "react";
import { Container, Page } from "./styled";

interface Props {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ pages, currentPage }: Props) => {
  const LIMIT = 3;
  const min = currentPage > LIMIT ? currentPage - LIMIT : 1;
  const max = currentPage + LIMIT;

  const pagesArray = Array.from(Array(pages).keys())
    .slice(min, max)
    .filter((page) => page > 0);

  return (
    <Container>
      <Page href={`?offset=1`} $isActive={currentPage === 1}>
        1
      </Page>
      {!pagesArray.includes(1) ? "..." : ""}
      {pagesArray
        .filter((page) => page !== 1)
        .map((page) => (
          <Page
            key={page}
            href={`?offset=${page}`}
            $isActive={page === currentPage && page !== 1 && page !== pages}
          >
            {page}
          </Page>
        ))}
      {!pagesArray.includes(pages - 1) ? "..." : ""}
      <Page href={`?offset=${pages}`} $isActive={currentPage === pages}>
        {pages}
      </Page>
    </Container>
  );
};
