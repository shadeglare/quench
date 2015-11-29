export default class Stack<T> {
    private items: T[] = [];

    public push(item: T) {
        this.items.push(item);
    }

    public pop(): T {
        if (this.count === 0) {
            throw new Error("the stack is empty");
        }
        return this.items.pop();
    }

    public peek(): T {
        if (this.count === 0) {
            throw new Error("the stack is empty");
        }
        return this.items[this.count - 1];
    }

    public clear() {
        this.items = [];
    }

    public get count() {
        return this.items.length;
    }
}
