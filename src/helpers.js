function colorChoice(arr) {
    let ranId = Math.floor(Math.random() * arr.length);
    return (arr[ranId]);
}

export { colorChoice };