const BASE_URL = "https://notes-api.dicoding.dev/v1";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const putAccessToken = (accessToken) => {
  return localStorage.setItem("accessToken", accessToken);
};

export const removeAccessToken = () => {
  return localStorage.removeItem("accessToken");
};

export const register = async (name, email, password) => {
  let code = null;
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    ({ status: code } = response);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const login = async (email, password) => {
  let code = null;
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    ({ status: code } = response);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

export const getUserLogged = async () => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const createNote = async (title, body) => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const getActiveNotes = async () => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes`);

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const getArchivedNotes = async () => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/archived`);

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const getNote = async (id) => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const archiveNote = async (id) => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
      method: "POST",
    });

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const unarchiveNote = async (id) => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
      method: "POST",
    });

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};

export const deleteNote = async (id) => {
  let code = null;
  try {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });

    ({ status: code } = response);

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
      throw new Error(responseJson.message);
    }

    return { error: false, data: responseJson.data, code };
  } catch (error) {
    return { error: true, data: null, errorMessage: error.message, code };
  }
};
