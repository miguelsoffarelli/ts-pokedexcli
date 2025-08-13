export type CacheEntry<T> = {
    createdAt: number,
    val: T,
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, {
        createdAt: Date.now(),
        val: val,
    })
  }

  get<T>(key: string): T | undefined {
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
    const intervalID = setInterval(() => { this.#reap() }, this.#interval);
    this.#reapIntervalId = intervalID;
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}