A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
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
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
}


