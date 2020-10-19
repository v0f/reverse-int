module.exports = function reverse (n) {
    return Array.from(String(n < 0 ? -n : n)).reverse().join('');
}
