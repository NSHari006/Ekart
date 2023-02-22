const list = [
    {
      id: 1,
      title: "OnePlus  ",
      price: 89,
      img: "https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg",
      amount: 1,
    },
    {
      id: 2,
      title: " Boat 255 Pro+",
      price: 98,
      img: "http://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1.png?v=1641801688",
      amount: 1,
    },
    {
      id: 3,
      title: "Sony ",
      price: 143,
      img: "https://www.sony.co.in/image/6c38457c5e4d73b6292f97dfa1c551d5?fmt=png-alpha&wid=480",
      amount: 1,
    },
    {
      id: 4,
      title: "Airpods 131",

      price: 57,
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_600x.png?v=1625046016",
      amount: 1,
    },
    {
      id: 5,
      title: "Yamaha",
      price: 149,
      img: "https://yamaha.ndcdn.in/media/catalog/product/cache/9e0f31af0cdc06df956748b13dabad87/t/w/twe7bb-14sep_7_.jpg",
      amount: 1,
    },
    {
      id: 6,
      title: "Vivo",

      price: 135,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLVKIRN79syxp5HmnNNgogV28P4YnB6Py-A&usqp=CAU",
      amount: 1,
    },
    {
      id: 7,
      title: " Boat man",
    
      price: 693,
      img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1107006/1097625560.jpg",
      amount: 1,
    },
    {
      id: 8,
      title: " Zebronics jet pro",
      price: 289,
      img: "https://m.media-amazon.com/images/I/71VR6c3j2bL._SL1500_.jpg",
      amount: 1,
    },
    {
      id: 9,
      title: "Leaf Bass Pro ",
      price: 80,
      img: "data:image/jpeg;base64,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",
      amount: 1,
    },
    {
      id: 10,
      title: "Sony",
      price: 86,
      img: "https://media.croma.com/image/upload/v1665448129/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/235236_3_nphncc.png",
      amount: 1,
    },
    {
      id: 11,
      title: "Boat speaker",
      author: "by Rebecca Smith  | 14 December 2021",
      price: 120,
      img: "http://cdn.shopify.com/s/files/1/0057/8938/4802/products/448e5d44-7829-4597-9238-aebe7554b9a4.png?v=1625045368",
      amount: 1,
    },
    {
      id: 12,
      title: "JBL ",
      price: 157,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkpdDoUXt8b1cqmSAFH9hmn3fQ1YulAhKcqpsHp9uqmZQs4lhTRrWZ3JEopvqChj1KmQ&usqp=CAU",
      amount: 1,
    },
];

export default list;