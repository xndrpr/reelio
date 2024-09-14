export interface ErrorModelActionResultModel {
  code: number;
  message: string;
}

export interface Data<T> {
  total: number;
  data: T[];
  pages: number;
}
