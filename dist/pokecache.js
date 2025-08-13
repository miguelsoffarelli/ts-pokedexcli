export class Cache {
    #cache = new Map();
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
        return this.#cache.get(key).val;
    }
}
