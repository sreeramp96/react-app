function List() {
    const fruits = [{ name: "apple", caloires: 95 },
    { name: "orange", caloires: 45 },
    { name: "banana", caloires: 105 },
    { name: "coconut", caloires: 159 },
    { name: "pineapple", caloires: 37 }];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return (<ul>{listItems}</ul>);
}

export default List