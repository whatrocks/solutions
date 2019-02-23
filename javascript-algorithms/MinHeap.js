class MinHeap {
  constructor(comparatorFunction) {
    this.heapContainer = [];
    this.compare = comparatorFunction
      ? comparatorFunction
      : (a, b) => {
        console.log("using this")
          if (a === b) {
            return 0;
          }
          return a < b ? -1 : 1;
        };
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // move the last element from the end to the head
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item, comparator = this.comparator) {
    // find number of items to remove

    // Fix this
    const numberOfItemsToRemove = this.find(item, comparator).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // we need to find item indexto remove each time after removeal since
      // indices are changed after each heapify process
      const indexToRemove = this.find(item, comparator).pop();

      // if we need to remove last child in the hap then just remove it
      // there is no need to havility
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        // move last element in heap to vacant removed position
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // get parent
        const parentItem = this.parent(indexToRemove);

        // if there is no parent or parent is in correct order with the node
        // we are going to delete then heapify down. Otherwise heapify up
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem ||
            this.pairIsInCorrectOrder(
              parentItem,
              this.heapContainer[indexToRemove]
            ))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  find(item, comparator) {
    const foundItemIndices = [];
    for (
      let itemIndex = 0;
      itemIndex < this.heapContainer.length;
      itemIndex += 1
    ) {
      // might need to adjust this for priority queues
      if (item === this.heapContainer[itemIndex]) {
        foundItemIndices.push(itemIndex);
      }
    }
    return foundItemIndices;
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }

  heapifyUp(customStartIndex) {
    // take the last element (last in array, or the bottom left in a tree)
    // in the heap container and lift it up until it is in the correct order
    // with respect to its parent element
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    console.log("heaping up!")

    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
    ) {
      console.log("swapping up");
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(customStartIndex = 0) {
    // compare parent element to its childen and swap parent with the appropriate
    // child (smallest for minHeap and largest for maxheap)
    // so same for next childrn after swap
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (
        this.pairIsInCorrectOrder(
          this.heapContainer[currentIndex],
          this.heapContainer[nextIndex]
        )
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  pairIsInCorrectOrder(firstElement, secondElement) {
    console.log("first: ", firstElement, "second: ", secondElement)
    const val = this.compare(firstElement, secondElement)
    if (val <= 0) {
      return false
    } else {
      return true
    }
  }
}

module.exports = MinHeap;
