const products = [
  {
    name: "Mindfulness - Writing and Creativity Journal",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942297478005391410/mindfulness.jpg",
    description:
      "Created by artist and author, Toni Carmine Salerno, this Writing & Creativity journal is designed to be a sacred space for you to the plant seeds of your future creations - a place to collect your scattered thoughts and express your heart's deepest desires or your greatest worries. It can be a mirror that reflects your unique brilliance and the light and essence of your soul. This deluxe soft cover journal features 220 pages of cream-coloured premium quality wood-free paper, with a combination of lined and unlined pages to accommodate all facets of your self-expression - you may like to write, doodle, paint or draw. Over 140 of the pages feature an inspirational quote or message and the journal, also, includes 44 full colour artwork reproductions by Toni Carmine Salerno to inspire your creative expression. The artist has, also, written an introduction about creativity and the importance of self-expression, as well as some suggested affirmations to guide you on your way.",
    price: 70,
    countInStock: 15,
  },
  {
    name: "Josephine Wall: Soul of a Unicorn (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942296665832960000/unicorn.jpg",
    description:
      "A FLAME TREE NOTEBOOK. Beautiful and luxurious the journals combine high-quality production with magnificent art. Perfect as a gift, and an essential personal choice for writers, notetakers, travellers, students, poets and diarists. Features a wide range of well-known and modern artists, with new artworks published throughout the year.",
    price: 65,
    countInStock: 10,
  },
  {
    name: "Aimee Stewart: A Stitch in Time Bookshelves (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942296383464026143/9781787550018.jpg",
    description:
      "A FLAME TREE NOTEBOOK. Beautiful and luxurious the journals combine high-quality production with magnificent art. Perfect as a gift, and an essential personal choice for writers, notetakers, travellers, students, poets and diarists. Features a wide range of well-known and modern artists, with new artworks published throughout the year.",
    price: 68,
    countInStock: 10,
  },
  {
    name: "Beautiful Decay by IA London (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942296034770550874/beautiful_decay.jpg",
    description:
      "Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed, then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Beautiful Decay by IA LONDON",
    price: 70,
    countInStock: 10,
  },
  {
    name: "Nel Whatmore: Beautiful Reflections (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942294718459543582/beautiful_reflections.jpg",
    description:
      `Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed, then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Nel Whatmore's Beautiful Reflections.
      Nel Whatmore is a fine artist, well known for her floral paintings and abstracts. A contemporary colourist, her paintings are both expressionist and evocative. She seeks to constantly explore mediums and their ability to convey emotion. Her work is varied and encapsulates her interest in expressionist painting.`,
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Claude Monet: Bridge over a Pond of Water Lilies (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942294319518330880/bridge_over.jpg",
    description:
      `A FLAME TREE NOTEBOOK. Beautiful and luxurious the journals combine high-quality production with magnificent art. Perfect as a gift, and an essential personal choice for writers, notetakers, travellers, students, poets and diarists. Features a wide range of well-known and modern artists, with new artworks published throughout the year.
      BEAUTIFULLY DESIGNED. The highly crafted covers are printed on foil paper, embossed then foil stamped, complemented by the luxury binding and rose red end-papers. The covers are created by our artists and designers who spend many hours transforming original artwork into gorgeous 3d masterpieces that feel good in the hand and look wonderful on a desk or table.`,
    price: 50,
    countInStock: 25,
  },
  {
    name: "Ashmolean Museum: Embroidered Hanging with Peacock (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942295540962566154/ashmolean.jpg",
    description:
      `Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. Ashmolean Museum: Chinese Embroidered Hanging with Peacock.

      The peacock was emblematic not of glory but of compassion and care, and so it would appear to be in this intricate hanging. What we might expect to be its show-stealing splendour is almost upstaged by the pure-white peonies, lilies and roses all around. The eyes of its furled-up tail, though beautiful, blend into the background as though they were another flower.`,
    price: 72,
    countInStock: 4,
  },
  {
    name: "Monet: Waterlilies (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942292486863335445/waterlilies.jpg",
    description:
      "Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed, then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Monet's Waterlilies",
    price: 72,
    countInStock: 10,
  },
  {
    name: "Vincent van Gogh: Starry Night (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942291575357182022/starry_night.jpg",
    description:
      `Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed, then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Vincent van Gogh's 'Starry Night.
      Regarded as one of Van Gogh's finest works The Starry Night was painted during his stay at the asylum of Saint-Paul-de-Mausole following a mental breakdown. Based on the view from his window at the asylum as well as his imagination this incredible painting is one of the most recognized in the world.`,
    price: 70,
    countInStock: 10,
  },
  {
    name: "Van Gogh: Almond Blossom (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942288133284823090/almond_blosoom.jpg",
    description:
      "Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example is based on a detail from Almond Blossom, 1890 by Vincent van Gogh (1853-90), and printed on silver.",
    price: 68,
    countInStock: 10,
  },
  {
    name: "Hiroshige: Sea at Satta (Foiled Journal)",
    imageUrl:
     "https://cdn.discordapp.com/attachments/922847003141091379/942293062271512586/sea_at_satta.jpg" ,
    description:
    `Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Hiroshige's timeless Sea at Satta design.


    Hiroshige was a prolific artist, creating over 5,000 works in his lifetime. Here he makes tribute to Hokusai's The Great Wave, off Kanagawa. The hectic activity of the waves is offset by Mount Fuji's tranquility, demonstrating Hiroshige's fascination with portraying the sensual moods of a landscape.`,
    price: 70,
    countInStock: 10,
  },
  {
    name: "Gustave Courbet: The Calm Sea (Foiled Journal)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/922847003141091379/942293591257141248/the_calm_sea.jpg",
    description:
      `Part of a series of exciting and luxurious Flame Tree Notebooks. Combining high-quality production with magnificent fine art, the covers are printed on foil in five colours, embossed, then foil stamped. And they're powerfully practical: a pocket at the back for receipts and scraps, two bookmarks and a solid magnetic side flap. These are perfect for personal use and make a dazzling gift. This example features Gustave Courbet: The Calm Sea.

      Gustave Courbet painted this view of the sea, receded at low tide, during his visit to Etretat near Normandy, France, in the summer of 1869. The two small boats left on the shore add to the tranquility of the scene, which is in stark comparison to many of Courbet's other coastal landscapes, which depicted chaotic, crashing waves and dramatic skies.`,
    price: 68,
    countInStock: 10,
  },
];

module.exports = products;
