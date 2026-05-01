export interface ApiResponse<T> {
  data: T;
  meta?: any;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: any;
}
