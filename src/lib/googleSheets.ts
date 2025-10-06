// Google Sheets Integration
// Replace with your deployed Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

export interface FormData {
  [key: string]: string | number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  name: string;
}

// Submit form data to Google Sheets
export const submitToGoogleSheets = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const formData = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.result === 'success') {
      return { success: true, message: 'Data submitted successfully!' };
    } else {
      return { success: false, message: result.error || 'Submission failed' };
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};

// Login user by checking Google Sheets
export const loginUser = async (credentials: LoginCredentials): Promise<{ success: boolean; message: string; user?: { name: string; email: string } }> => {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=login&email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`);
    const result = await response.json();
    
    if (result.success) {
      // Store user session in localStorage (NOT SECURE - for demo only)
      localStorage.setItem('user', JSON.stringify(result.user));
      return { success: true, message: 'Login successful!', user: result.user };
    } else {
      return { success: false, message: result.message || 'Invalid credentials' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};

// Signup user by adding to Google Sheets
export const signupUser = async (data: SignupData): Promise<{ success: boolean; message: string }> => {
  try {
    const formData = new URLSearchParams();
    formData.append('action', 'signup');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.result === 'success') {
      return { success: true, message: 'Account created successfully!' };
    } else {
      return { success: false, message: result.error || 'Signup failed' };
    }
  } catch (error) {
    console.error('Error during signup:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
};

// Check if user is logged in
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('user') !== null;
};

// Get current user
export const getCurrentUser = (): { name: string; email: string } | null => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
  return null;
};

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem('user');
};
