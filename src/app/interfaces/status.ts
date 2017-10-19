export const Status: {[K in string]: K} = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

export type Status = keyof typeof Status;