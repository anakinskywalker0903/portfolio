/**
 * Lightweight Live Visitor Counter Service for rohitdubey.dev
 * Uses counterapi.dev with session-level deduplication to count unique browser sessions.
 */

const COUNTER_API_BASE = 'https://api.counterapi.dev/v1/rohitdubey-portfolio/visits';
const SESSION_KEY = 'rohitdubey_session_counted';
const BASELINE_COUNT = 136; // Matching live Google Analytics baseline user count

export async function fetchVisitorCount(): Promise<number> {
  try {
    const hasCountedInSession =
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem(SESSION_KEY) === 'true';

    const url = hasCountedInSession ? COUNTER_API_BASE : `${COUNTER_API_BASE}/up`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Counter API returned status ${response.status}`);
    }

    const data = await response.json();
    const count = data?.count ?? data?.value;

    if (typeof count === 'number' && !isNaN(count)) {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(SESSION_KEY, 'true');
      }
      return count;
    }

    return BASELINE_COUNT;
  } catch (err) {
    console.debug('Visitor Counter Notice (Using Fallback Baseline):', err);
    return BASELINE_COUNT;
  }
}
