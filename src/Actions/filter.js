export const FILTER_CATEGORY = "FILTER_CATEGORY"

export function filterCategory(category="All") {
    return {
      type: FILTER_CATEGORY,
      category
    }
  }