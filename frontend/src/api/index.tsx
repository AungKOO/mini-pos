type ApiRequest = RequestInit;
//   {
//   method: "GET" | "POST" | "PUT" | "DELETE";
//   body: { [key: string]: any };
//   headers?: {
//     [key: string]: any;
//   };
// };
export const API = async (
  url: RequestInfo | URL,
  option: ApiRequest,
  signal?: AbortSignal
) => {
  const payload = { ...option, signal };
  const response = await fetch(url, payload);
  console.log("response: ", response);
  if (response.status === 401) {
    localStorage.clear();
    window.location.reload();
  }
  return response.json();
};
