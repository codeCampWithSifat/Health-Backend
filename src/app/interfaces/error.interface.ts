export interface TErrorSouces {
  path: string;
  message: string;
}

export interface TErrorResponse {
  statusCode?: number;
  success: boolean;
  message: string;
  errorSources: TErrorSouces[];
  stack?: string;
  error?: unknown;
}
