interface ErrorResponse {
  data: {
    message: string;
  };
  status: number;
}

export class CustomError extends Error {
  public status: number;

  public response: ErrorResponse;

  constructor(response: ErrorResponse) {
    super();
    this.response = response;
    this.status = this.response.status;
    this.message = this.response.data.message;
  }
}
