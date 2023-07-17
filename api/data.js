"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = exports.posts = void 0;
var posts = [
    {
        id: 1,
        title: 'The future',
        imageUrl: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 2,
        title: 'Another Post',
        imageUrl: 'images/another_post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
];
exports.posts = posts;
var comments = [
    {
        id: 1,
        postId: 1,
        email: 'user1@example.com',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
        id: 2,
        postId: 1,
        email: 'user2@example.com',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
        id: 3,
        postId: 2,
        email: 'user3@example.com',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
];
exports.comments = comments;
