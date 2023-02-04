import React from "react";

type ApiRequest = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  payload?: { [key: string]: any };
  url: RequestInfo | URL;
  headers?: {
    [key: string]: any;
  };
};
const API = async (
  url: RequestInfo | URL,
  option: ApiRequest,
  signal: AbortSignal
) => {
  const payload = { ...option, signal };
  const response = await fetch(url, payload);
  return response.json();
};

export const useReducerAPI = (
  option: ApiRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: "",
  }
) => {
  const initialState = { loading: false, data: null, error: null };
  // This is reducer
  const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case "loading":
        return { loading: true, data: null, error: null };
      case "success":
        return { loading: false, data: action.data, error: null };
      case "error":
        return { loading: false, data: null, error: action.error };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // This is the abort controller that will cancel the fetch if the component was unmounted
    const controller = new AbortController();
    const signal = controller.signal;
    let mounted = true;

    const fetchData = async () => {
      // This dispatch will trigger before api was called
      dispatch({ type: "loading" });
      try {
        const data = await API(option.url, option, signal);
        // This dispatch will trigger after api called was success
        dispatch({ type: "success", data: data });
      } catch (e) {
        // This dispatch will trigger after api called was failed
        dispatch({ type: "error", error: e });
      }
    };
    // it will fetch data only on mount so that
    if (mounted === true) {
      fetchData();
    }

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [option.url]);

  return state;
};
