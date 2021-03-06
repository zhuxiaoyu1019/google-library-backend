# Google Library Backend

![GitHub license](https://img.shields.io/badge/License-MIT-lightgrey.svg)

## Description

This is a Google Library Backend API built with Mongoose, Node, and Express. It is used to support Google Library Frontend application.

## Usage

- `/api/books` (get) - return all saved books as JSON.

  ```js
  {
    authors: ["Suzanne Collins"];
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.";
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api";
    title: "The Hunger Games";
  }
  ```

- `/api/books` (post) - save a new book to the database.

- `/api/books/:id` (delete) - delete a book from the database by Mongo `_id`.

## Installation

 - This backend server is used in [google-library-frontend](https://github.com/zhuxiaoyu1019/google-library-frontend.git)
 - To install necessary dependencies, run the following command:

      npm i

## Contributing

      folk / pull

## Questions

If you have any questions about the repo, open an issue or contact me directly @[xiaoyz28@uw.edu](xiaoyz28@uw.edu). You can find more of my work at [zhuxiaoyu1019](https://github.com/zhuxiaoyu1019).

## License

Copyright (c) Rita Z All rights reserved.

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
