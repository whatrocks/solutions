/*

Hash table (hash map) which implements an associated array
- associative array maps keys to values
- uses a hash function to compute an index into an array of buckets or slots
- ideally hash function assigns each key to unique bucket
- but collisions occur and need to be accomodated


*/

const LinkedList = require('./LinkedList');

const defaultHashTableSize = 32;

class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        // create hash table of size and fill each bucket with empty linkedlist
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());

        // to track all the keys in a fast way
        this.keys = {}
    }

    // converts the key string into a hash number
    hash(key) {
        // there are ways to reduce collisions
        // if its just integer, you can do (integer % buckets.length)
        // but lets handle strings
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0
        )

        // reduce hash to fit onto table size
        return hash % this.buckets.length
    }

    set(key, value) {
        const keyHash = this.hash(key)
        this.keys[key] = keyHash;

        const bucketLinkedList = this.buckets[keyHash]
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});

        if (!node) {
            // insert new node
            bucketLinkedList.addToTail({ key, value })
        } else {
            // udpate existing
            node.value.value = value
        }

    }

    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key})
        // console.log("node is: ", node);
        return node ? node.value.value : undefined;
    }

    delete(key) {
        const keyHash = this.hash(key)
        delete this.keys[key]

        const bucketLinkedList = this.buckets[keyHash]
        const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key})

        if (node) {
            return bucketLinkedList.delete(node.value)
        }

        return null;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key)
    }




}

const hash = new HashTable()
// console.log(hash)
hash.set('carly','leahy')
hash.set('carly','harrington')
console.log(hash.get('carly'))
console.log(hash.get('charlie'))