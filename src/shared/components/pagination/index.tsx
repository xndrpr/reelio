import React from "react";
import { Container, Page } from "./styled";

interface Props {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ pages, currentPage }: Props) => {
  return (
    <Container>
      {[...Array(pages)].slice(0, 10).map((_, index) => {
        return (
          <Page
            href={`?offset=${index + 1}`}
            $isActive={currentPage === index + 1}
            key={index}
          >
            {index + 1}
          </Page>
        );
      })}
      <Page href={`?offset=${pages}`} $isActive={pages === currentPage}>
        {pages}
      </Page>
    </Container>
  );
};
