export default class Queue<T> {
    private items: T[] = [];

    public enqueue(item: T) {
        this.items.push(item);
    }

    public dequeue(): T {
        if (this.count === 0) {
            throw new Error("the queue is empty");
        }
        return this.items.shift();
    }

    public peek(): T {
        if (this.count === 0) {
            throw new Error("the queue is empty");
        }
        return this.items[0];
    }

    public clear() {
        this.items = [];
    }

    public get count() {
        return this.items.length;
    }
}
