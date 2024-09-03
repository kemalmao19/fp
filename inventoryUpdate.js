function updateInventory(arr1, arr2) {
  const combinedInventory = [...arr1, ...arr2];

  // Update the inventory using reduce
  const updatedInventory = combinedInventory.reduce((acc, [quantity, itemName]) => {
    const existingItem = acc.find(item => item[1] === itemName);

    if (existingItem) {
      existingItem[0] += quantity;
    } else {
      acc.push([quantity, itemName]);
    }

    return acc;
  }, []);

  // Sort the updated inventory alphabetically by item name
  return updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

const res = updateInventory(curInv, newInv);
console.log(res)
