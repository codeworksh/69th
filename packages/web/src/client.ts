export const fetchHealth = async (base: string) => {
	const response = await fetch(`${base}/health`);
	return (await response.json()) as { status: string; uptime: number };
};
