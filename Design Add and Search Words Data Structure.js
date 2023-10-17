Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    search(word) {
        return this.searchInTrie(this.root, word, 0);
    }

    searchInTrie(node, word, index) {
        if (index === word.length) {
            return node.isEndOfWord;
        }
        const char = word[index];

        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.searchInTrie(child, word, index + 1)) {
                    return true;
                }
            }
        } else if (node.children.has(char)) {
            return this.searchInTrie(node.children.get(char), word, index + 1);
        }

        return false;
    }
}
