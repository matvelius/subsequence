#!/usr/bin/env node

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0

let s // string to check
let sQueue // a queue to keep track of characters found
let t // string to check against (i.e. "is s a subsequence of t?")

class Queue {
  constructor(head = null) {
    this.head = head
    this.tail = head
  }

  push(value) { // add new element to the end of the list
    this.tail.next = new Node(value)
    this.tail = this.tail.next
  }

  pop() {
    if (this.head.next != null) {
      this.head = this.head.next
    } else {
      this.head = null
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}

rl.on('line', function (line) {

  if (lineIndex == 0) {

    s = line.split('')

    // fill queue
    sQueue = new Queue(new Node(s[0]))

    for (let i = 1; i < s.length; i++) {
      sQueue.push(s[i])
    }

  } else {

    t = line

    if (s.length == 0) {
      console.log("True")
      return
    }

    if (t.length == 0) {
      console.log("False")
      return
    }

    rl.close()

    console.log(isSubsequence())

  }

  lineIndex += 1

})

function isSubsequence() {

  for (let i = 0; i < t.length; i++) {
    if (t[i] == sQueue.head.value) {
      sQueue.pop()
      if (sQueue.head == null) {
        return "True"
      }
    }
  }

  return "False"
}