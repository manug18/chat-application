export interface TestResponse {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface TestQueryRequest {
  postId: string;
}

export interface TestQueryResponse extends TestQueryRequest {
  id: string;
  name: string;
  email: string;
  body: string;
}
