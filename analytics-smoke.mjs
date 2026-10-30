/** Small, public fixture for the review-and-merge analytics smoke check. */
export function countLabels(labels) {
	const counts = new Map()
	for (const label of labels) {
		const normalized = label.trim()
		if (normalized.length === 0) continue
		counts.set(normalized, (counts.get(normalized) ?? 0) + 1)
	}
	return Object.fromEntries(counts)
}
