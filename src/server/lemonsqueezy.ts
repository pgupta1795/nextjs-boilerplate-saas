import { env } from '@/lib/env';
import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';

export function configureLemonSqueezy() {
  lemonSqueezySetup({
    apiKey: env.LEMONSQUEEZY_API_KEY,
    onError: (error) => {
      console.error(error);
      throw new Error(`Lemon Squeezy API error: ${error.message}`);
    }
  });
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Typeguard to check if the object has a 'meta' property
 * and that the 'meta' property has the correct shape.
 */
export function webhookHasMeta(obj: unknown): obj is {
  meta: {
    event_name: string;
    custom_data: {
      user_id: string;
      org_id: string;
    };
  };
} {
  if (
    isObject(obj) &&
    isObject(obj.meta) &&
    typeof obj.meta.event_name === 'string' &&
    isObject(obj.meta.custom_data) &&
    typeof obj.meta.custom_data.user_id === 'string' &&
    typeof obj.meta.custom_data.org_id === 'string'
  ) {
    return true;
  }
  return false;
}

/**
 * Typeguard to check if the object has a 'data' property and the correct shape.
 *
 * @param obj - The object to check.
 * @returns True if the object has a 'data' property.
 */
export function webhookHasData(obj: unknown): obj is {
  data: {
    attributes: Record<string, unknown> & {
      first_subscription_item: {
        id: number;
        price_id: number;
        is_usage_based: boolean;
      };
    };
    id: string;
  };
} {
  return (
    isObject(obj) &&
    'data' in obj &&
    isObject(obj.data) &&
    'attributes' in obj.data
  );
}
