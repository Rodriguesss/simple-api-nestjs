export interface IResponse {
  status: number;
  message: string;
  data: object;
  hasError: boolean;
}