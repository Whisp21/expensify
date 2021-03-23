const book = {
  title: "Breathe",
  author: "Sarah Crossan",
  publisher: {
    // name: "Penguin"
  }
}

const {name: publisherName = "Self published"} = book.publisher;
console.log(publisherName);

const item = ["Coffee", "R10", "R13", "R16"];
const [itemName, , itemPrice] = item;

console.log("The medium ${itemName} costs ${itemPrice}");
