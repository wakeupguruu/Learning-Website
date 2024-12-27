import { getTokens } from '../../utils/auth';

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchCompletedTopics = async () => {
    try {
        const tokens = getTokens();
        if (!tokens?.access) {
            throw new Error('No access token available');
        }

        const response = await fetch(`${API_BASE_URL}/completed-topics/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch completed topics');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching completed topics: ${error.message}`);
    }
};

export const fetchTopicProgress = async (topic) => {
    try {
        const tokens = getTokens();
        if (!tokens?.access) {
            throw new Error('No access token available');
        }

        const response = await fetch(`${API_BASE_URL}/topic-progress/${topic}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.access}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch topic progress');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching topic progress: ${error.message}`);
    }
};