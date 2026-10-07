export interface Health {
	readonly status: "ok";
	readonly uptime: number;
}

export const health = (startedAt: number, now: number): Health => ({ status: "ok", uptime: now - startedAt });
