export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val,
        });
    }
    get(key) {
        if (!this.#cache.has(key)) {
            return undefined;
        }
        return this.#cache.get(key)?.val;
    }
    #reap() {
        for (const [key, entry] of this.#cache) {
            if (Date.now() - entry.createdAt >= this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        const intervalID = setInterval(() => { this.#reap(); }, this.#interval);
        this.#reapIntervalId = intervalID;
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
