// Authentication utility functions
export const getTokens = () => {
    try {
      const tokens = localStorage.getItem('codex-user');
      return tokens ? JSON.parse(tokens) : null;
    } catch (error) {
      console.error('Error parsing tokens:', error);
      return null;
    }
  };
  
  export const getAuthHeader = () => {
    const tokens = getTokens();
    return tokens?.access ? `Bearer ${tokens.access}` : '';
  };