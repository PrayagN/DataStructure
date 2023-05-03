class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let value = 0;
    for (let i = 0; i < key.length; i++) {
      value += key.charCodeAt(i);
    }
    return value % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        sameItemKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        return sameItemKey[1];
      }
      return undefined;
    }
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        bucket.splice(bucket.indexOf(sameItemKey), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(59);
table.set("name", "Prayag");
table.set("mane", "augustin");
table.set('agesd',232)
console.log(table.get("mane"));
table.remove("agesd");
table.display();
